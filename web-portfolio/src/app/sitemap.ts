import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const siteUrl = "https://portfolio.maccrey.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/projects", "/skills", "/writing", "/contact"];
  return [
    ...pages.map((path) => ({ url: `${siteUrl}${path}`, changeFrequency: "weekly" as const, priority: path === "/" ? 1 : 0.7 })),
    ...projects.map((project) => ({ url: `${siteUrl}/projects/${project.slug}`, changeFrequency: "monthly" as const, priority: project.slug === "kinora" ? 0.9 : 0.6 })),
  ];
}
