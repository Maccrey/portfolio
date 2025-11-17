"use client";

import { SkillSection } from "@/components/skills/skill-section";
import { getSkillsByCategory } from "@/data/skills";
import { useLocale } from "@/providers/locale-provider";

export default function SkillsPage() {
  const { dictionary } = useLocale();

  return (
    <div className="space-y-6">
      <div className="glass-panel rounded-3xl px-8 py-10 text-white">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">Skills</p>
        <h1 className="mt-2 text-4xl font-semibold">{dictionary.sections.skills}</h1>
        <p className="mt-3 text-white/70">
          배우는 기술, 강점 기술, 즉시 투입 가능한 기술을 구분해 성장 방향을 명확히 설명합니다.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <SkillSection category="learning" skills={getSkillsByCategory("learning")} />
        <SkillSection category="strong" skills={getSkillsByCategory("strong")} />
        <SkillSection category="usable" skills={getSkillsByCategory("usable")} />
      </div>
    </div>
  );
}
