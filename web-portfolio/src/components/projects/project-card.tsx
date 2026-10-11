"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";
import { getProjectCopy } from "@/data/projects";
import { useLocale } from "@/providers/locale-provider";
import { localizedPath } from "@/lib/localized-route";

export function ProjectCard({ project, directUrl }: { project: Project; directUrl?: string }) {
  const { locale, dictionary } = useLocale();
  const copy = getProjectCopy(project, locale);

  const card = (
    <article className="glass-card flex h-full flex-col gap-4 rounded-3xl px-6 py-6 text-[var(--text-primary)] group transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold group-hover:text-gradient transition-all duration-300">{copy.name}</h3>
        <span className="glass rounded-full px-3 py-1 text-xs uppercase tracking-wide text-[var(--text-secondary)]">
          {project.status === "live"
            ? dictionary.projectCard.status.live
            : project.status === "in-development"
              ? dictionary.projectCard.status.inDevelopment
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
      {directUrl ? (
        <span className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent-primary group-hover:text-accent-secondary transition-colors">
          {dictionary.projectCard.visitCta} ↗
        </span>
      ) : (
        <Link
          href={localizedPath(locale, `/projects/${project.slug}`)}
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent-primary hover:text-accent-secondary transition-colors"
        >
          {dictionary.projectCard.detailCta} →
        </Link>
      )}
    </article>
  );

  return directUrl ? (
    <a href={directUrl} target="_blank" rel="noreferrer" aria-label={`${copy.name}: ${dictionary.projectCard.visitCta}`} className="block rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-primary)]">
      {card}
    </a>
  ) : card;
}
