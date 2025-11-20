import type { Locale } from "@/i18n/locales";

export type SkillCategory = "learning" | "strong" | "usable";

export type Skill = {
  id: string;
  name: string;
  category: SkillCategory;
  description: Record<Locale, string>;
};

const defaultLocale: Locale = "ko";

export const skills: Skill[] = [
  {
    id: "n8n",
    name: "n8n",
    category: "learning",
    description: {
      ko: "AI 에이전트·백오피스 자동화를 위한 워크플로 빌더를 꾸준히 연구 중",
      en: "Researching workflows for AI agents and back-office automation continuously.",
      ja: "AIエージェントとバックオフィス自動化のワークフローを継続的に研究。",
      zh: "持續研究 AI 代理與後台自動化的流程。",
    },
  },
  {
    id: "flutter",
    name: "Flutter",
    category: "strong",
    description: {
      ko: "상태 관리, 모듈화, CI/CD까지 경험한 메인 모바일 스택",
      en: "Primary mobile stack with experience in state management, modularization, and CI/CD.",
      ja: "状態管理・モジュール化・CI/CDまで経験したメインモバイルスタック。",
      zh: "主要行動開發堆疊，熟悉狀態管理、模組化與 CI/CD。",
    },
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "strong",
    description: {
      ko: "인증 없이 Firestore/Storage 조합으로 정적 앱에 데이터 공급",
      en: "Deliver data to static apps through Firestore/Storage combos without auth.",
      ja: "認証なしでFirestore/Storageを組み合わせ、静的アプリにデータ供給。",
      zh: "在無認證情況下以 Firestore/Storage 為靜態應用提供資料。",
    },
  },
  {
    id: "supabase",
    name: "Supabase",
    category: "usable",
    description: {
      ko: "Edge Function, RLS 설정 경험 및 read-only API 구성",
      en: "Experience configuring Edge Functions, RLS, and read-only APIs.",
      ja: "Edge FunctionやRLS設定、read-only API構築の経験。",
      zh: "具備 Edge Function、RLS 與 read-only API 的設定經驗。",
    },
  },
  {
    id: "python",
    name: "Python",
    category: "usable",
    description: {
      ko: "데이터 정제, 간단한 API 서버 제작, n8n 커스텀 노드 작성",
      en: "Data wrangling, lightweight API servers, and custom n8n nodes.",
      ja: "データ整形、軽量APIサーバー、n8nカスタムノード作成。",
      zh: "可做資料清理、簡易 API 服務與 n8n 客製節點。",
    },
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "usable",
    description: {
      ko: "App Router, i18n, 정적 Export에 익숙",
      en: "Comfortable with App Router, i18n, and static export workflows.",
      ja: "App Router・i18n・静的エクスポートのワークフローに精通。",
      zh: "熟悉 App Router、i18n 與靜態輸出流程。",
    },
  },
  {
    id: "css",
    name: "CSS & Tailwind",
    category: "usable",
    description: {
      ko: "글래스모피즘, 다크 모드, 반응형 UI 설계",
      en: "Design glassmorphism, dark mode, and responsive UI tokens.",
      ja: "グラスモーフィズム、ダークモード、レスポンシブUIを設計。",
      zh: "設計玻璃擬態、深色模式與響應式 UI。",
    },
  },
  {
    id: "github-actions",
    name: "Git & GitHub Actions",
    category: "usable",
    description: {
      ko: "lint/test/build 파이프라인 자동화",
      en: "Automate lint/test/build pipelines with reusable workflows.",
      ja: "lint/test/buildパイプラインをGitHub Actionsで自動化。",
      zh: "以 GitHub Actions 自動化 lint/test/build 流程。",
    },
  },
];

export function getSkillsByCategory(category: SkillCategory): Skill[] {
  return skills.filter((skill) => skill.category === category);
}

export function getSkillDescription(skill: Skill, locale: Locale): string {
  return skill.description[locale] ?? skill.description[defaultLocale];
}
