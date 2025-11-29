import { BlogSection } from "@/components/home/blog-section";
import { getLatestBlogPosts } from "@/lib/tistory";
import HomePageClient from "./page-client";

export default async function Page() {
  const posts = await getLatestBlogPosts(4);
  return <HomePageClient blogSection={<BlogSection initialPosts={posts} />} />;
}
