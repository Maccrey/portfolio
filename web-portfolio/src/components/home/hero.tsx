"use client";

import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { useLocale } from "@/providers/locale-provider";

export function Hero() {
  const { dictionary } = useLocale();

  return (
    <section className="glass-panel mb-12 rounded-3xl px-8 py-12 text-white">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">
            Impact Builder
          </p>
          <h1 className="text-4xl font-semibold leading-tight lg:text-5xl">
            {dictionary.hero.title}
          </h1>
          <p className="text-lg text-white/70">{dictionary.hero.subtitle}</p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-cyan-100"
          >
            {dictionary.hero.cta}
          </Link>
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <p className="text-sm text-white/60">대표 프로젝트</p>
          <ul className="grid gap-3">
            {featuredProjects.map((project) => (
              <li key={project.slug} className="rounded-2xl border border-white/10 px-4 py-3">
                <p className="text-base font-medium text-white">{project.name}</p>
                <p className="text-sm text-white/60">{project.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
