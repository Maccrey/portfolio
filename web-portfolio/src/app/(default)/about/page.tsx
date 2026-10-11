"use client";

import Link from "next/link";
import { useLocale } from "@/providers/locale-provider";
import { localizedPath } from "@/lib/localized-route";

export default function AboutPage() {
  const { dictionary, locale } = useLocale();
  const page = dictionary.pages.about;
  const about = dictionary.aboutPage;

  return (
    <div className="space-y-8 pb-12">
      <header className="glass-panel rounded-3xl px-7 py-10 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-primary)]">{page.badge}</p>
        <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-[var(--text-primary)] md:text-5xl">{page.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--text-secondary)]">{page.description}</p>
      </header>

      <section className="grid gap-5 md:grid-cols-2">
        <article className="glass-card rounded-3xl p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)]">{about.howIWorkLabel}</p>
          <h2 className="mt-3 text-xl font-semibold text-[var(--text-primary)]">{about.howIWorkTitle}</h2>
          <p className="mt-3 leading-7 text-[var(--text-secondary)]">{about.howIWorkDescription}</p>
        </article>
        <article className="glass-card rounded-3xl p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)]">{about.whatIBringLabel}</p>
          <h2 className="mt-3 text-xl font-semibold text-[var(--text-primary)]">{about.whatIBringTitle}</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">{locale === "ko" ? "모바일:" : locale === "ja" ? "モバイル：" : locale === "zh" ? "行動：" : "Mobile:"}</strong> {about.strengths.mobile}</li>
            <li><strong className="text-[var(--text-primary)]">{locale === "ko" ? "웹:" : locale === "ja" ? "Web：" : locale === "zh" ? "網頁：" : "Web:"}</strong> {about.strengths.web}</li>
            <li><strong className="text-[var(--text-primary)]">{locale === "ko" ? "문제 해결:" : locale === "ja" ? "問題解決：" : locale === "zh" ? "問題解決：" : "Problem solving:"}</strong> {about.strengths.problemSolving}</li>
            <li><strong className="text-[var(--text-primary)]">{locale === "ko" ? "협업:" : locale === "ja" ? "協業：" : locale === "zh" ? "合作：" : "Collaboration:"}</strong> {about.strengths.collaboration}</li>
          </ul>
        </article>
      </section>

      <section className="space-y-6" aria-labelledby="kinora-heading">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)]">{about.currentBuildLabel}</p>
          <h2 id="kinora-heading" className="mt-3 text-3xl font-bold text-[var(--text-primary)]">{about.currentBuildTitle}</h2>
          <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">{about.currentBuildDescription}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="glass-card rounded-2xl p-6"><p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent-primary)]">01 · {about.seniorAppLabel}</p><h3 className="mt-3 text-lg font-semibold text-[var(--text-primary)]">{about.seniorAppTitle}</h3><p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{about.seniorAppDescription}</p></article>
          <article className="glass-card rounded-2xl p-6"><p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent-primary)]">02 · {about.familyLabel}</p><h3 className="mt-3 text-lg font-semibold text-[var(--text-primary)]">{about.familyTitle}</h3><p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{about.familyDescription}</p></article>
          <article className="glass-card rounded-2xl p-6"><p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent-primary)]">03 · {about.engineeringLabel}</p><h3 className="mt-3 text-lg font-semibold text-[var(--text-primary)]">{about.engineeringTitle}</h3><p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{about.engineeringDescription}</p></article>
        </div>
        <div className="glass-panel flex flex-col justify-between gap-5 rounded-3xl p-7 md:flex-row md:items-center md:p-9">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)]">{about.inDevelopment}</p><h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)]">{about.launchTitle}</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">{about.launchDescription}</p></div>
          <a href="https://www.kinora.date/" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center rounded-full bg-[var(--text-primary)] px-6 py-3.5 text-sm font-semibold text-[var(--text-inverse)]">{about.launchCta} ↗</a>
        </div>
      </section>

      <section className="glass-panel rounded-3xl p-7 md:p-9">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)]">{about.recentLaunchLabel}</p>
            <h2 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">{about.recentLaunchTitle}</h2>
            <p className="mt-3 leading-7 text-[var(--text-secondary)]">{about.recentLaunchDescription}</p>
          </div>
          <a href="https://maccrey.com" target="_blank" rel="noreferrer" className="rounded-full bg-[var(--text-primary)] px-5 py-3 text-sm font-semibold text-[var(--text-inverse)]">{about.recentLaunchCta} ↗</a>
        </div>
      </section>
      <div className="flex flex-wrap gap-3">
        <Link href={localizedPath(locale, "/projects")} className="rounded-full border border-[var(--glass-border)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)]">{about.projectsCta} →</Link>
        <Link href={localizedPath(locale, "/contact")} className="rounded-full border border-[var(--glass-border)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)]">{about.contactCta} →</Link>
      </div>
    </div>
  );
}
