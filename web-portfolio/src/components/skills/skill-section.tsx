"use client";

import { getSkillDescription, type Skill, type SkillCategory } from "@/data/skills";
import { useLocale } from "@/providers/locale-provider";

const badgeColors: Record<SkillCategory, string> = {
  learning: "from-fuchsia-500 to-cyan-500",
  strong: "from-cyan-500 to-sky-500",
  usable: "from-teal-500 to-emerald-500",
};

export function SkillSection({
  category,
  skills,
  className = "",
}: {
  category: SkillCategory;
  skills: Skill[];
  className?: string;
}) {
  const { locale, dictionary } = useLocale();
  const countLabel = dictionary.skillsSection.countLabel.replace(
    "{{count}}",
    String(skills.length),
  );

  return (
    <section className={`glass-card rounded-3xl px-6 py-6 text-[var(--text-primary)] h-full ${className}`}>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold">{dictionary.skillsSection.categories[category]}</h2>
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold text-white shadow-lg ${
            "bg-gradient-to-r " + badgeColors[category]
          }`}
        >
          {countLabel}
        </span>
      </div>
      <ul className="space-y-3">
        {skills.map((skill) => (
          <li key={skill.id} className="glass rounded-xl px-4 py-3 hover:bg-[var(--glass-surface)] transition-colors">
            <p className="text-base font-medium text-[var(--text-primary)]">{skill.name}</p>
            <p className="text-sm text-[var(--text-muted)] mt-1">{getSkillDescription(skill, locale)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
