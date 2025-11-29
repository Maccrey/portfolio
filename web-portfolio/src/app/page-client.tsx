"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/home/hero";
import { ProjectCard } from "@/components/projects/project-card";
import { SkillSection } from "@/components/skills/skill-section";
import { ContactLinks } from "@/components/contact/contact-links";
import { featuredProjects } from "@/data/projects";
import { getSkillsByCategory } from "@/data/skills";
import { useLocale } from "@/providers/locale-provider";

const BlogSection = dynamic(() => import("@/components/home/blog-section").then((m) => m.BlogSection), {
  ssr: false,
});

export default function HomePageClient() {
  const { dictionary } = useLocale();

  return (
    <div className="space-y-12">
      <Hero />

      <BlogSection initialPosts={[]} />

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[var(--text-secondary)]">
            {dictionary.sections.projects}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-[var(--text-secondary)]">
          {dictionary.sections.skills}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <SkillSection category="learning" skills={getSkillsByCategory("learning")} />
          <SkillSection category="strong" skills={getSkillsByCategory("strong")} />
          <SkillSection
            category="usable"
            skills={getSkillsByCategory("usable")}
            className="md:col-span-2"
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-[var(--text-secondary)]">
          {dictionary.sections.contact}
        </h2>
        <ContactLinks />
      </section>
    </div>
  );
}
