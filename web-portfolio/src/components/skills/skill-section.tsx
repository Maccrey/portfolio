import { type Skill, type SkillCategory } from "@/data/skills";

const categoryLabel: Record<SkillCategory, string> = {
  learning: "현재 배우는 기술",
  strong: "강점 기술",
  usable: "사용 가능 기술",
};

const badgeColors: Record<SkillCategory, string> = {
  learning: "from-fuchsia-500 to-cyan-500",
  strong: "from-cyan-500 to-sky-500",
  usable: "from-teal-500 to-emerald-500",
};

export function SkillSection({ category, skills }: { category: SkillCategory; skills: Skill[] }) {
  return (
    <section className="glass-panel rounded-3xl px-6 py-6 text-white">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">{categoryLabel[category]}</h2>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
          "bg-gradient-to-r " + badgeColors[category]
        }`}>
          {skills.length} skills
        </span>
      </div>
      <ul className="space-y-3">
        {skills.map((skill) => (
          <li key={skill.name} className="rounded-2xl border border-white/10 px-4 py-3">
            <p className="text-base font-medium">{skill.name}</p>
            <p className="text-sm text-white/70">{skill.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
