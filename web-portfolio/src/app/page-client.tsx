"use client";

import Link from "next/link";
import { Hero } from "@/components/home/hero";
import { ProjectCard } from "@/components/projects/project-card";
import { featuredProjects } from "@/data/projects";

export default function HomePageClient() {
  return (
    <div className="space-y-20 pb-12">
      <Hero />
      <section className="grid gap-4 sm:grid-cols-3" aria-label="개발 강점">
        {[
          ["01", "기획부터 출시까지", "아이디어를 실제 서비스로 만들고 운영하며 개선합니다."],
          ["02", "모바일과 웹 제품", "Flutter 앱부터 다국어 웹 서비스와 정적 사이트까지 구현합니다."],
          ["03", "사용자 문제에 집중", "접근성, 데이터 보호, 실제 사용 흐름을 설계에 반영합니다."],
        ].map(([number, title, description]) => (
          <article key={number} className="glass-card rounded-2xl p-6">
            <p className="text-sm font-mono text-[var(--accent-primary)]">{number}</p>
            <h2 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>
          </article>
        ))}
      </section>
      <section className="space-y-7">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-primary)]">SELECTED WORK</p>
            <h2 className="mt-2 text-3xl font-semibold text-[var(--text-primary)]">실제로 공개하고 운영하는 제품</h2>
          </div>
          <Link href="/projects" className="text-sm font-semibold text-[var(--accent-primary)]">전체 프로젝트 보기 →</Link>
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
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-primary)]">BUILD LOG</p>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">만드는 과정과 어려웠던 지점도 기록합니다</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">현재 진행 중인 개발, 기술적 선택의 이유, 막혔던 문제와 해결 과정을 블로그에 남깁니다.</p>
        </div>
        <Link href="/writing" className="inline-flex shrink-0 items-center justify-center rounded-full bg-[var(--text-primary)] px-6 py-3 text-sm font-semibold text-[var(--text-inverse)]">개발 기록 보기 →</Link>
      </section>
      <section className="flex flex-col justify-between gap-5 border-t border-[var(--glass-border)] pt-10 sm:flex-row sm:items-center">
        <div><h2 className="text-2xl font-semibold text-[var(--text-primary)]">함께 만들 프로젝트를 찾고 계신가요?</h2><p className="mt-2 text-sm text-[var(--text-secondary)]">채용, 제품 개발, 기술 협업 이야기를 나눠요.</p></div>
        <Link href="/contact" className="text-sm font-semibold text-[var(--accent-primary)]">협업 문의하기 →</Link>
      </section>
    </div>
  );
}
