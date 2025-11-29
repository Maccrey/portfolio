export interface BlogPost {
  title: string;
  link: string;
  date: string;
  summary: string;
  imageUrl?: string;
}

const RSS_URL = "https://code-lab.tistory.com/rss";
const RSS_CORS_FALLBACK = "https://api.allorigins.win/raw?url=https%3A%2F%2Fcode-lab.tistory.com%2Frss";

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
    return parseRssFeed(xml, { limit, fetchOgImages: false });
  } catch (error) {
    console.error("Error fetching blog posts on client:", error);
    return [];
  }
}

async function parseRssFeed(xml: string, options: { limit: number; fetchOgImages: boolean }): Promise<BlogPost[]> {
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
    const response = await fetch(url, { next: { revalidate: 3600 } });
    if (!response.ok) return undefined;
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
  const sources = [RSS_URL, ...(allowFallback ? [RSS_CORS_FALLBACK] : [])];

  let lastError: unknown;

  for (const url of sources) {
    try {
      const response = await fetch(url, {
        cache,
        next: revalidateSeconds ? { revalidate: revalidateSeconds } : undefined,
      });

      if (!response.ok) {
        lastError = new Error(`Failed to fetch RSS feed: ${response.status}`);
        continue;
      }

      const xml = await response.text();
      if (xml.includes("<item")) {
        return xml;
      }
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError instanceof Error ? lastError : new Error("Failed to fetch RSS feed");
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
