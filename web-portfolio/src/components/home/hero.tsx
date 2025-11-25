import Image from "next/image";
import Link from "next/link";
import { featuredProjects, getProjectCopy } from "@/data/projects";
import { useLocale } from "@/providers/locale-provider";

export function Hero() {
  const { dictionary, locale } = useLocale();

  return (
    <section className="glass mb-12 rounded-3xl px-8 py-12 text-[var(--text-primary)] relative overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 opacity-50 mix-blend-overlay">
        <Image
          src="/hero-banana.png"
          alt="Abstract Glass Banana"
          width={600}
          height={600}
          className="object-contain"
          priority
        />
      </div>
      
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center relative z-10">
        <div className="flex-1 space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-accent-secondary font-bold">
            {dictionary.hero.badge}
          </p>
          <h1 className="text-5xl font-bold leading-tight lg:text-7xl tracking-tight">
            <span className="text-gradient">{dictionary.hero.title}</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-lg leading-relaxed">{dictionary.hero.subtitle}</p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-8 py-4 text-base font-bold text-[var(--page-bg)] transition hover:scale-105 hover:shadow-lg hover:shadow-[var(--glass-highlight)]"
          >
            {dictionary.hero.cta}
          </Link>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <p className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider">{dictionary.hero.featuredTitle}</p>
          <ul className="grid gap-4">
            {featuredProjects.map((project) => {
              const copy = getProjectCopy(project, locale);
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
