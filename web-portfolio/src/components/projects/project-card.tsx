"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";
import { getProjectCopy } from "@/data/projects";
import { useLocale } from "@/providers/locale-provider";

export function ProjectCard({ project }: { project: Project }) {
  const { locale, dictionary } = useLocale();
  const copy = getProjectCopy(project, locale);

  return (
    <article className="glass-panel flex flex-col gap-4 rounded-3xl px-6 py-6 text-white">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{copy.name}</h3>
        <span className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-wide text-white/70">
          {project.status === "live"
            ? dictionary.projectCard.status.live
            : dictionary.projectCard.status.prototype}
        </span>
      </div>
      <p className="text-sm text-white/70">{copy.summary}</p>
      <p className="text-sm text-white/60">{copy.problem}</p>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
            {tech}
          </span>
        ))}
      </div>
      <Link
        href={`/projects/${project.slug}`}
        className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-cyan-200"
      >
        {dictionary.projectCard.detailCta} →
      </Link>
    </article>
  );
}
