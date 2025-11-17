"use client";

import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";
import { useLocale } from "@/providers/locale-provider";

export default function ProjectsPage() {
  const { dictionary } = useLocale();

  return (
    <div className="space-y-6">
      <div className="glass-panel rounded-3xl px-8 py-10 text-white">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">Projects</p>
        <h1 className="mt-2 text-4xl font-semibold">
          {dictionary.sections.projects}
        </h1>
        <p className="mt-3 text-white/70">
          프로젝트마다 문제 정의, 대상 사용자, 기여도를 명확히 정리했습니다.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
