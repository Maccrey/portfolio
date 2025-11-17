export type SkillCategory = "learning" | "strong" | "usable";

export type Skill = {
  name: string;
  category: SkillCategory;
  description: string;
};

export const skills: Skill[] = [
  {
    name: "n8n",
    category: "learning",
    description: "AI 에이전트·백오피스 자동화를 위한 워크플로 빌더를 꾸준히 연구 중",
  },
  {
    name: "Flutter",
    category: "strong",
    description: "상태 관리, 모듈화, CI/CD까지 경험한 메인 모바일 스택",
  },
  {
    name: "Firebase",
    category: "strong",
    description: "인증 없이 Firestore/Storage 조합으로 정적 앱에 데이터 공급",
  },
  {
    name: "Supabase",
    category: "usable",
    description: "Edge Function, RLS 설정 경험 및 read-only API 구성",
  },
  {
    name: "Python",
    category: "usable",
    description: "데이터 정제, 간단한 API 서버 제작, n8n 커스텀 노드 작성",
  },
  {
    name: "Next.js",
    category: "usable",
    description: "App Router, i18n, 정적 Export에 익숙",
  },
  {
    name: "CSS & Tailwind",
    category: "usable",
    description: "글래스모피즘, 다크 모드, 반응형 UI 설계",
  },
  {
    name: "Git & GitHub Actions",
    category: "usable",
    description: "lint/test/build 파이프라인 자동화",
  },
];

export function getSkillsByCategory(category: SkillCategory): Skill[] {
  return skills.filter((skill) => skill.category === category);
}
