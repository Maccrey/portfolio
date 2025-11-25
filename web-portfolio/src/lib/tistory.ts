export interface BlogPost {
  title: string;
  link: string;
  date: string;
  summary: string;
  imageUrl?: string;
}

export async function getLatestBlogPosts(limit: number = 4): Promise<BlogPost[]> {
  try {
    const response = await fetch("https://code-lab.tistory.com/rss", {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error("Failed to fetch RSS feed");
    }

    const xml = await response.text();
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) || [];

    const posts: BlogPost[] = items.slice(0, limit).map((item) => {
      const titleMatch = item.match(/<title>(.*?)<\/title>/);
      const linkMatch = item.match(/<link>(.*?)<\/link>/);
      const dateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
      const descriptionMatch = item.match(/<description>([\s\S]*?)<\/description>/);

      const title = titleMatch ? decodeHTMLEntities(titleMatch[1]) : "No Title";
      const link = linkMatch ? linkMatch[1] : "#";
      const dateStr = dateMatch ? dateMatch[1] : new Date().toISOString();
      const description = descriptionMatch ? decodeHTMLEntities(descriptionMatch[1]) : "";

      // Extract image from description - try multiple patterns
      const imgMatch = 
        description.match(/<img[^>]+src=["']([^"']+)["']/) ||
        description.match(/src=["']([^"']+)["']/) ||
        description.match(/<image>[\s\S]*?<url>(.*?)<\/url>/);
        
      const imageUrl = imgMatch ? imgMatch[1] : undefined;

      // Create a plain text summary from description
      const summary = description
        .replace(/<[^>]+>/g, "") // Remove HTML tags
        .replace(/&nbsp;/g, " ")
        .trim()
        .slice(0, 100) + "...";

      // Format date to YYYY.MM.DD
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

    return posts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

function decodeHTMLEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/<!\[CDATA\[(.*?)\]\]>/g, "$1");
}
