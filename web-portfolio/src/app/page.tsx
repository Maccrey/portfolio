import { BlogSection } from "@/components/home/blog-section";
import HomePageClient from "./page-client";

export default function Page() {
  return <HomePageClient blogSection={<BlogSection />} />;
}
