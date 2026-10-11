import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/projects/project-detail";
import { getProjectBySlug, getProjectCopy, projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return {
      title: "프로젝트를 찾을 수 없습니다",
    };
  }
  const copy = getProjectCopy(project, "ko");
  return {
    title: copy.name,
    description: copy.summary,
    keywords: slug === "kinora"
      ? ["KINORA", "AI 돌봄", "가족 돌봄 앱", "Flutter", "Firebase", "대화형 AI", "어르신 돌봄"]
      : [copy.name, "Maccrey 프로젝트", "Flutter 개발", "웹 제품 개발"],
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${copy.name} | Maccrey Portfolio`,
      description: copy.summary,
      url: `/projects/${slug}`,
      siteName: "Maccrey Portfolio",
      locale: "ko_KR",
      type: "article",
    },
    twitter: { card: "summary", title: `${copy.name} | Maccrey Portfolio`, description: copy.summary },
    robots: { index: true, follow: true },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
