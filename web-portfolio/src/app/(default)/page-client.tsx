"use client";

import Link from "next/link";
import { Hero } from "@/components/home/hero";
import { ProjectCard } from "@/components/projects/project-card";
import { featuredProjects } from "@/data/projects";
import { useLocale } from "@/providers/locale-provider";
import { localizedPath } from "@/lib/localized-route";

export default function HomePageClient() {
  const { dictionary, locale } = useLocale();
  const home = dictionary.homePage;
  return (
    <div className="space-y-20 pb-12">
      <Hero />
      <section className="grid gap-4 sm:grid-cols-3" aria-label={home.strengthsLabel}>
        {home.strengths.map(({ title, description }, index) => (
          <article key={title} className="glass-card rounded-2xl p-6">
            <p className="text-sm font-mono text-[var(--accent-primary)]">{String(index + 1).padStart(2, "0")}</p>
            <h2 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
          </article>
        ))}
      </section>
      <section className="space-y-7">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-primary)]">{home.selectedWorkEyebrow}</p>
            <h2 className="mt-2 text-3xl font-semibold text-[var(--text-primary)]">{home.selectedWorkTitle}</h2>
          </div>
          <Link href={localizedPath(locale, "/projects")} className="text-sm font-semibold text-[var(--accent-primary)]">{home.allProjects} →</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects
            .filter((project) => ["maccrey-museum", "kinora", "study-duck", "braille-dashboard"].includes(project.slug))
            .map((project) => (
            <ProjectCard key={project.slug} project={project} />
            ))}
        </div>
      </section>
      <section className="glass-panel flex flex-col justify-between gap-6 rounded-3xl p-8 md:flex-row md:items-center md:p-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-primary)]">{home.buildLogEyebrow}</p>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">{home.buildLogTitle}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">{home.buildLogDescription}</p>
        </div>
        <Link href={localizedPath(locale, "/writing")} className="inline-flex shrink-0 items-center justify-center rounded-full bg-[var(--text-primary)] px-6 py-3 text-sm font-semibold text-[var(--text-inverse)]">{home.buildLogCta} →</Link>
      </section>
      <section className="flex flex-col justify-between gap-5 border-t border-[var(--glass-border)] pt-10 sm:flex-row sm:items-center">
        <div><h2 className="text-2xl font-semibold text-[var(--text-primary)]">{home.contactTitle}</h2><p className="mt-2 text-sm text-[var(--text-secondary)]">{home.contactDescription}</p></div>
        <Link href={localizedPath(locale, "/contact")} className="text-sm font-semibold text-[var(--accent-primary)]">{home.contactCta} →</Link>
      </section>
    </div>
  );
}
