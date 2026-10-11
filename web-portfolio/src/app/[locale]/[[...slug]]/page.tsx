import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AboutPage from "@/app/(default)/about/page";
import ContactPage from "@/app/(default)/contact/page";
import HomePageClient from "@/app/(default)/page-client";
import ProjectsPage from "@/app/(default)/projects/page";
import SkillsPage from "@/app/(default)/skills/page";
import WritingPage from "@/app/(default)/writing/page";
import { ProjectDetail } from "@/components/projects/project-detail";
import { getProjectBySlug, getProjectCopy, projects } from "@/data/projects";
import { dictionaries, locales, type Locale } from "@/i18n/locales";
import { createPageMetadata } from "@/lib/seo";

type LocalizedPageParams = { locale: string; slug?: string[] };
type LocalizedPageProps = { params: Promise<LocalizedPageParams> };

const contentPages = ["about", "projects", "skills", "writing", "contact"];

export function generateStaticParams() {
  return [
    { slug: [] },
    ...contentPages.map((slug) => ({ slug: [slug] })),
    ...projects.map((project) => ({ slug: ["projects", project.slug] })),
  ];
}

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  const { locale: rawLocale, slug = [] } = await params;
  if (!locales.includes(rawLocale as Locale)) return {};
  const locale = rawLocale as Locale;
  const path = slug.length ? `/${slug.join("/")}` : "/";
  const localizedPath = path === "/" ? `/${locale}` : `/${locale}${path}`;
  const pageKey = path === "/" ? "home" : path === "/about" ? "about" : path === "/projects" ? "projects" : path === "/skills" ? "skills" : path === "/writing" ? "writing" : path === "/contact" ? "contact" : undefined;

  if (slug[0] === "projects" && slug[1]) {
    const project = getProjectBySlug(slug[1]);
    if (!project) return {};
    const copy = getProjectCopy(project, locale);
    return createPageMetadata({
      title: copy.name,
      description: copy.summary,
      path: localizedPath,
      locale,
      keywords: project.slug === "kinora"
        ? ["KINORA", "family care", "Flutter", "Firebase", "AI care"]
        : [copy.name, "Maccrey", "Flutter", "web product"],
    });
  }

  if (!pageKey) return {};
  const content = dictionaries[locale].seo[pageKey];
  return createPageMetadata({ ...content, path: localizedPath, locale });
}

export default async function LocalizedPage({ params }: LocalizedPageProps) {
  const { locale: rawLocale, slug = [] } = await params;
  if (!locales.includes(rawLocale as Locale)) notFound();

  if (slug.length === 0) return <HomePageClient />;
  if (slug.length === 1) {
    switch (slug[0]) {
      case "about": return <AboutPage />;
      case "projects": return <ProjectsPage />;
      case "skills": return <SkillsPage />;
      case "writing": return <WritingPage />;
      case "contact": return <ContactPage />;
      default: return notFound();
    }
  }
  if (slug.length === 2 && slug[0] === "projects") {
    const project = getProjectBySlug(slug[1]);
    if (project) return <ProjectDetail project={project} />;
  }
  return notFound();
}
