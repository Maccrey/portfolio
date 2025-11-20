"use client";

import { getSkillDescription, type Skill, type SkillCategory } from "@/data/skills";
import { useLocale } from "@/providers/locale-provider";

const badgeColors: Record<SkillCategory, string> = {
  learning: "from-fuchsia-500 to-cyan-500",
  strong: "from-cyan-500 to-sky-500",
  usable: "from-teal-500 to-emerald-500",
};

export function SkillSection({ category, skills }: { category: SkillCategory; skills: Skill[] }) {
  const { locale, dictionary } = useLocale();
  const countLabel = dictionary.skillsSection.countLabel.replace(
    "{{count}}",
    String(skills.length),
  );

  return (
    <section className="glass-panel rounded-3xl px-6 py-6 text-white">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">{dictionary.skillsSection.categories[category]}</h2>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
            "bg-gradient-to-r " + badgeColors[category]
          }`}
        >
          {countLabel}
        </span>
      </div>
      <ul className="space-y-3">
        {skills.map((skill) => (
          <li key={skill.id} className="rounded-2xl border border-white/10 px-4 py-3">
            <p className="text-base font-medium">{skill.name}</p>
            <p className="text-sm text-white/70">{getSkillDescription(skill, locale)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
