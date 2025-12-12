export interface BlogPost {
  title: string;
  link: string;
  date: string;
  summary: string;
  imageUrl?: string;
}

const RSS_URL = "https://code-lab.tistory.com/rss";
const RSS_FALLBACKS = [
  "https://corsproxy.io/?https://code-lab.tistory.com/rss",
  "https://api.allorigins.win/raw?url=https%3A%2F%2Fcode-lab.tistory.com%2Frss",
  "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fcode-lab.tistory.com%2Frss",
  "https://api.codetabs.com/v1/proxy?quest=https://code-lab.tistory.com/rss",
];

export async function getLatestBlogPosts(limit: number = 4): Promise<BlogPost[]> {
  try {
    const xml = await fetchRssText({ revalidateSeconds: 3600, allowFallback: true });
    return parseRssFeed(xml, { limit, fetchOgImages: true });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getLatestBlogPostsClient(limit: number = 4): Promise<BlogPost[]> {
  try {
    const xml = await fetchRssText({ cache: "no-store", allowFallback: true });
    return parseRssFeed(xml, { limit, fetchOgImages: true });
  } catch (error) {
    console.error("Error fetching blog posts on client:", error);
    return [];
  }
}

async function parseRssFeed(xml: string, options: { limit: number; fetchOgImages: boolean }): Promise<BlogPost[]> {
  // rss2json returns JSON; detect early
  const jsonPosts = tryParseJsonFeed(xml, options.limit);
  if (jsonPosts) return jsonPosts;

  const items = xml.match(/<item>[\s\S]*?<\/item>/g) || [];

  const posts: BlogPost[] = await Promise.all(
    items.slice(0, options.limit).map(async (item) => {
      const titleMatch = item.match(/<title>(.*?)<\/title>/);
      const linkMatch = item.match(/<link>(.*?)<\/link>/);
      const dateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
      const descriptionMatch = item.match(/<description>([\s\S]*?)<\/description>/);

      const title = titleMatch ? decodeHTMLEntities(titleMatch[1]) : "No Title";
      const link = linkMatch ? linkMatch[1] : "#";
      const dateStr = dateMatch ? dateMatch[1] : new Date().toISOString();
      const description = descriptionMatch ? decodeHTMLEntities(descriptionMatch[1]) : "";

      const imgMatch =
        description.match(/<img[^>]+src=["']([^"']+)["']/) ||
        description.match(/src=["']([^"']+)["']/) ||
        description.match(/<image>[\s\S]*?<url>(.*?)<\/url>/);

      const imageUrl = imgMatch ? imgMatch[1] : undefined;
      let finalImageUrl = imageUrl && imageUrl.startsWith("//") ? `https:${imageUrl}` : imageUrl;

      if (finalImageUrl && finalImageUrl.includes("no-image-v1.png")) {
        finalImageUrl = undefined;
      }

      if (options.fetchOgImages && !finalImageUrl && link !== "#") {
        try {
          const ogImage = await fetchOgImage(link);
          if (ogImage) {
            finalImageUrl = ogImage;
          }
        } catch (e) {
          console.error(`Failed to fetch OG image for ${link}`, e);
        }
      }

      const summary =
        description
          .replace(/<[^>]+>/g, "")
          .replace(/&nbsp;/g, " ")
          .trim()
          .slice(0, 100) + "...";

      const dateObj = new Date(dateStr);
      const formattedDate = `${dateObj.getFullYear()}.${String(dateObj.getMonth() + 1).padStart(2, "0")}.${String(dateObj.getDate()).padStart(2, "0")}`;

      return {
        title,
        link,
        date: formattedDate,
        summary,
        imageUrl: finalImageUrl,
      };
    })
  );

  return posts;
}

async function fetchOgImage(url: string): Promise<string | undefined> {
  try {
    const response = await fetchFromSources(buildOgSources(url), { next: { revalidate: 3600 } });
    if (!response) return undefined;
    const html = await response.text();
    const match = html.match(/<meta property="og:image" content="([^"]+)"/);
    return match ? match[1] : undefined;
  } catch {
    return undefined;
  }
}

async function fetchRssText({
  cache,
  revalidateSeconds,
  allowFallback,
}: {
  cache?: RequestCache;
  revalidateSeconds?: number;
  allowFallback: boolean;
}): Promise<string> {
  const sources =
    typeof window === "undefined"
      ? [RSS_URL, ...(allowFallback ? RSS_FALLBACKS : [])]
      : [...(allowFallback ? RSS_FALLBACKS : []), RSS_URL];

  let lastError: unknown;

  for (const url of sources) {
    try {
      const response = await fetch(url, {
        cache,
        mode: "cors",
        next: revalidateSeconds ? { revalidate: revalidateSeconds } : undefined,
      });

      if (!response.ok) {
        lastError = new Error(`Failed to fetch RSS feed: ${response.status}`);
        continue;
      }

      const body = await response.text();
      const trimmed = body.trim();
      if (trimmed.includes("<item") || trimmed.startsWith("{")) {
        return trimmed;
      }
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError instanceof Error ? lastError : new Error("Failed to fetch RSS feed");
}

async function fetchFromSources(urls: string[], init?: RequestInit): Promise<Response | null> {
  let lastError: unknown;

  for (const url of urls) {
    try {
      const response = await fetch(url, { ...init, mode: "cors" });
      if (!response.ok) {
        lastError = new Error(`Failed request: ${response.status}`);
        continue;
      }
      return response;
    } catch (error) {
      lastError = error;
    }
  }

  if (lastError) {
    throw lastError instanceof Error ? lastError : new Error("All fetch attempts failed");
  }

  return null;
}

function buildOgSources(url: string): string[] {
  const encoded = encodeURIComponent(url);
  const proxies = [
    `https://corsproxy.io/?${url}`,
    `https://api.allorigins.win/raw?url=${encoded}`,
    `https://api.codetabs.com/v1/proxy?quest=${url}`,
  ];

  return typeof window === "undefined" ? [url, ...proxies] : proxies;
}

function tryParseJsonFeed(payload: string, limit: number): BlogPost[] | null {
  try {
    const parsed = JSON.parse(payload) as { items?: Array<Record<string, unknown>> };
    if (!parsed.items) return null;

    return parsed.items.slice(0, limit).map((item) => {
      const title = String(item.title || "No Title");
      const link = String(item.link || "#");
      const dateStr = String(item.pubDate || new Date().toISOString());
      const description = decodeHTMLEntities(String(item.description || ""));
      const imageUrl = typeof item.thumbnail === "string" ? item.thumbnail : undefined;

      const summary =
        description
          .replace(/<[^>]+>/g, "")
          .replace(/&nbsp;/g, " ")
          .trim()
          .slice(0, 100) + "...";

      const dateObj = new Date(dateStr);
      const formattedDate = `${dateObj.getFullYear()}.${String(dateObj.getMonth() + 1).padStart(2, "0")}.${String(dateObj.getDate()).padStart(2, "0")}`;

      return {
        title,
        link,
        date: formattedDate,
        summary,
        imageUrl,
      };
    });
  } catch {
    return null;
  }
}

function decodeHTMLEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&hellip;/g, "...")
    .replace(/&middot;/g, "·")
    .replace(/<!\[CDATA\[(.*?)\]\]>/g, "$1");
}
