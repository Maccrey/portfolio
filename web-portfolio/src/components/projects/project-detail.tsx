"use client";

import type { Project } from "@/data/projects";
import { getProjectCopy } from "@/data/projects";
import { useLocale } from "@/providers/locale-provider";

export function ProjectDetail({ project }: { project: Project }) {
  const { locale, dictionary } = useLocale();
  const copy = getProjectCopy(project, locale);

  return (
    <article className="glass-panel rounded-3xl px-8 py-8 text-white">
      <div className="mb-6 space-y-2">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">
          {project.timeline}
        </p>
        <h1 className="text-4xl font-semibold">{copy.name}</h1>
        <p className="text-white/70">{copy.summary}</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <DetailSection label={dictionary.projectDetail.labels.problem} value={copy.problem} />
        <DetailSection label={dictionary.projectDetail.labels.audience} value={copy.audience} />
        <DetailSection
          label={dictionary.projectDetail.labels.contribution}
          value={copy.contribution}
        />
        <DetailSection label={dictionary.projectDetail.labels.impact} value={copy.impact} />
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-semibold">{dictionary.projectDetail.stack}</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-8 space-y-3">
        <h2 className="text-lg font-semibold">{dictionary.projectDetail.highlights}</h2>
        <ul className="list-disc space-y-2 pl-5 text-white/80">
          {copy.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}

function DetailSection({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-white/50">{label}</p>
      <p className="text-base text-white/90">{value}</p>
    </div>
  );
}
