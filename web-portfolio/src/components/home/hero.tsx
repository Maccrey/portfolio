import Link from "next/link";
import { featuredProjects, getProjectCopy } from "@/data/projects";
import { useLocale } from "@/providers/locale-provider";
import { localizedPath } from "@/lib/localized-route";

export function Hero() {
  const { dictionary, locale } = useLocale();

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-[var(--glass-border)] bg-[var(--glass-surface)] px-7 py-12 text-[var(--text-primary)] shadow-[var(--glass-shadow)] md:px-12 md:py-16">

      
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center relative z-10">
        <div className="flex-1 space-y-6">
          <p className="text-xs uppercase tracking-[0.24em] text-accent-secondary font-bold">
            {dictionary.hero.badge}
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.15] tracking-tight md:text-6xl lg:text-7xl">
            <span className="text-gradient">{dictionary.hero.title}</span>
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[var(--text-secondary)] md:text-xl">{dictionary.hero.subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <Link href={localizedPath(locale, "/projects")} className="inline-flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-6 py-3.5 text-sm font-bold text-[var(--text-inverse)] transition hover:opacity-85">{dictionary.hero.cta} →</Link>
            <Link href={localizedPath(locale, "/contact")} className="inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] px-6 py-3.5 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--glass-highlight)]">{dictionary.homePage.contactCta}</Link>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-[var(--glass-border)] pt-5 text-sm text-[var(--text-muted)]">
            {dictionary.hero.focusPoints.map((point) => <span key={point}>{point}</span>)}
          </div>
        </div>
        <div className="hidden flex-1 flex-col gap-4 lg:flex">
          <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">{dictionary.hero.featuredTitle}</p>
          <ul className="grid gap-4">
            {featuredProjects.map((project) => {
              const copy = getProjectCopy(project, locale);
              if (project.slug !== "maccrey-museum" && project.slug !== "kinora" && project.slug !== "loglingo") return null;
              return (
                <li key={project.slug} className="glass-card rounded-2xl p-5 hover:bg-[var(--glass-surface)] transition-colors">
                  <p className="text-lg font-bold text-[var(--text-primary)] mb-1">{copy.name}</p>
                  <p className="text-sm text-[var(--text-secondary)]">{copy.summary}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
