"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";
import { getProjectCopy } from "@/data/projects";
import { useLocale } from "@/providers/locale-provider";

export function ProjectCard({ project }: { project: Project }) {
  const { locale, dictionary } = useLocale();
  const copy = getProjectCopy(project, locale);

  return (
    <article className="glass-card flex flex-col gap-4 rounded-3xl px-6 py-6 text-[var(--text-primary)] group">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold group-hover:text-gradient transition-all duration-300">{copy.name}</h3>
        <span className="glass rounded-full px-3 py-1 text-xs uppercase tracking-wide text-[var(--text-secondary)]">
          {project.status === "live"
            ? dictionary.projectCard.status.live
            : dictionary.projectCard.status.prototype}
        </span>
      </div>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{copy.summary}</p>
      <p className="text-sm text-[var(--text-muted)]">{copy.problem}</p>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="rounded-full bg-[var(--glass-surface)] border border-[var(--glass-border)] px-3 py-1 text-xs text-[var(--text-primary)]">
            {tech}
          </span>
        ))}
      </div>
      <Link
        href={`/projects/${project.slug}`}
        className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent-primary hover:text-accent-secondary transition-colors"
      >
        {dictionary.projectCard.detailCta} →
      </Link>
    </article>
  );
}
