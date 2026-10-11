import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { locales } from "@/i18n/locales";

const siteUrl = "https://portfolio.maccrey.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/about", "/projects", "/skills", "/writing", "/contact"];
  const withTrailingSlash = (path: string) => (path === "/" ? path : `${path}/`);
  const localizedPages = locales.flatMap((locale) => {
    const prefix = locale === "ko" ? "" : `/${locale}`;
    return [
      ...pages.map((path) => ({ url: `${siteUrl}${withTrailingSlash(`${prefix}${path === "/" ? "" : path}`)}`, changeFrequency: "weekly" as const, priority: path === "/" ? 0.9 : 0.65 })),
      ...projects.map((project) => ({ url: `${siteUrl}${withTrailingSlash(`${prefix}/projects/${project.slug}`)}`, changeFrequency: "monthly" as const, priority: project.slug === "kinora" ? 0.85 : 0.55 })),
    ];
  });
  return [
    ...localizedPages,
  ];
}
