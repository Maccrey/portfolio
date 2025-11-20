import type { Locale } from "@/i18n/locales";

export type ProjectLink = {
  label: string;
  href: string;
};

type ProjectTranslation = {
  name: string;
  summary: string;
  problem: string;
  audience: string;
  contribution: string;
  impact: string;
  highlights: string[];
};

export type Project = {
  slug: string;
  stack: string[];
  timeline: string;
  status: "live" | "prototype";
  links: ProjectLink[];
  translations: Record<Locale, ProjectTranslation>;
};

const defaultLocale: Locale = "ko";

export const projects: Project[] = [
  {
    slug: "study-duck",
    stack: ["Flutter", "Firebase", "Riverpod", "GitHub Actions"],
    timeline: "2023.06 - 2024.02",
    status: "live",
    links: [
      { label: "GitHub", href: "https://github.com/Maccrey/study-duck" },
      { label: "Demo", href: "https://studyduck.app" },
    ],
    translations: {
      ko: {
        name: "Study Duck",
        summary:
          "몰입을 돕는 학습 타이머와 집중 루틴을 제공하는 모바일 앱. Flutter/Firebase 기반.",
        problem:
          "성인 학습자들이 멀티 디바이스에서 루틴을 유지하기 어렵다는 문제를 해결하고자 했음.",
        audience: "스터디 모임, 부트캠프생, 재직자 학습자",
        contribution:
          "PM/개발을 모두 맡아 Flutter 위젯 구조 설계, Firebase 인증 없이 로컬 프로필 저장.",
        impact:
          "주간 400분 이상을 기록하는 사용자 12명 확보, 학습 루틴 이탈률 26% 감소.",
        highlights: [
          "Focus Session, Pomodoro, 번다운 차트 등 학습자 여정 전체를 덮는 기능 설계",
          "모듈형 위젯 설계로 재사용률 65% 달성",
          "Firebase 없이 로컬 퍼시스턴스 구현으로 개인정보 보관 부담 최소화",
        ],
      },
      en: {
        name: "Study Duck",
        summary:
          "Mobile app providing focus timers and deep-work routines built with Flutter and Firebase.",
        problem:
          "Adult learners struggled to keep consistent study routines across multiple devices.",
        audience: "Study groups, bootcamp cohorts, working learners",
        contribution:
          "Owned PM and engineering, designed a modular widget architecture, and persisted profiles locally without auth.",
        impact:
          "Twelve users log 400+ weekly minutes; study routine drop-off dropped by 26%.",
        highlights: [
          "Covered the entire learner journey with focus sessions, Pomodoro, and burndown charts.",
          "Achieved 65% component reuse via modular widget design.",
          "Implemented local persistence without Firebase Auth to avoid handling sensitive data.",
        ],
      },
      ja: {
        name: "Study Duck",
        summary:
          "Flutter/Firebaseで構築した集中タイマーとルーティンを提供するモバイルアプリ。",
        problem:
          "複数デバイスで学習ルーティンを維持しにくい成人学習者の課題を解決。",
        audience: "スタディグループ、ブートキャンプ受講生、就業中の学習者",
        contribution:
          "PMと開発を兼任し、モジュラーなウィジェット構造と認証不要のローカル保存を実装。",
        impact:
          "週400分以上を記録するユーザー12名を獲得し、ルーティン離脱率が26%減少。",
        highlights: [
          "フォーカスセッション、ポモドーロ、バーンダウンなど学習ジャーニー全体を設計",
          "モジュラー設計でウィジェット再利用率65%を達成",
          "Firebase Authなしでローカル永続化を実装し、個人情報リスクを低減",
        ],
      },
      zh: {
        name: "Study Duck",
        summary:
          "以 Flutter/Firebase 打造，提供專注計時與學習流程的行動 App。",
        problem: "成人學習者難以在多裝置間維持固定的學習節奏。",
        audience: "讀書會、訓練營學員、在職學習者",
        contribution:
          "負責產品與開發，設計模組化元件，並以本地檔案保存使用者資料。",
        impact:
          "12 名用戶每週記錄 400 分鐘以上，學習流失率下降 26%。",
        highlights: [
          "規畫 Focus Session、番茄鐘、燃盡圖等完整學習旅程功能",
          "模組化元件讓重用率達 65%",
          "無需 Firebase Auth 即可本地儲存，降低個資風險",
        ],
      },
    },
  },
  {
    slug: "braille-dashboard",
    stack: ["Next.js", "Supabase", "TypeScript", "TailwindCSS"],
    timeline: "2022.03 - 2023.01",
    status: "prototype",
    links: [
      { label: "GitHub", href: "https://github.com/Maccrey/braille-dashboard" },
    ],
    translations: {
      ko: {
        name: "점자 도서 작업 관리 대시보드",
        summary:
          "점자 도서 봉사자들의 작업 현황을 한 눈에 확인할 수 있는 웹 대시보드.",
        problem:
          "문서/카톡으로 관리되던 점역, 검수 현황이 뒤섞여 병목이 발생.",
        audience: "시각장애인 도서 제작 단체와 봉사 코디네이터",
        contribution:
          "요구사항 도출, Firebase Auth 제거 후 Supabase read-only API로 대체, 접근성 가이드 정의.",
        impact:
          "작업 배정 시간이 평균 2.5일에서 4시간으로 단축, 병목 업무 제로화.",
        highlights: [
          "상태 머신 도입으로 작업 단계별 알림 자동화",
          "점자 입력 보조 UI와 고대비 모드 제공",
          "Dashboards/업무 히스토리 컴포넌트를 모듈화하여 유지보수 용이",
        ],
      },
      en: {
        name: "Braille Production Workflow Dashboard",
        summary:
          "Web dashboard that shows end-to-end status for braille book volunteers.",
        problem:
          "Status tracked via docs and chat mixed transcription and QA steps, creating bottlenecks.",
        audience: "Braille publishing teams and volunteer coordinators",
        contribution:
          "Led discovery, replaced Firebase Auth with a Supabase read-only API, and documented accessibility guidelines.",
        impact:
          "Assignment time dropped from 2.5 days to 4 hours, eliminating bottlenecks.",
        highlights: [
          "Automated stage notifications through a state machine.",
          "Provided braille input assistance UI plus a high-contrast mode.",
          "Modularized dashboard/history components for easier maintenance.",
        ],
      },
      ja: {
        name: "点字図書作業管理ダッシュボード",
        summary:
          "ボランティアの作業状況を一覧できる点字図書向けWebダッシュボード。",
        problem:
          "文書やチャットで管理していた点訳/検収状況が混在し、ボトルネックが発生。",
        audience: "視覚障害者向け図書制作チームとボランティアコーディネーター",
        contribution:
          "要件定義を行い、Firebase Authを外してSupabaseのread-only APIに置換し、アクセシビリティガイドを整備。",
        impact:
          "作業アサイン時間が平均2.5日から4時間に短縮され、ボトルネックを解消。",
        highlights: [
          "ステートマシン導入で各工程の通知を自動化",
          "点字入力補助UIとハイコントラストモードを提供",
          "ダッシュボードと履歴コンポーネントをモジュール化し保守性を向上",
        ],
      },
      zh: {
        name: "點字書製作管理儀表板",
        summary:
          "讓志工一目瞭然掌握點字書製作進度的 Web 儀表板。",
        problem:
          "原本透過文件/聊天管理的點譯與審稿進度混在一起，容易形成瓶頸。",
        audience: "視障圖書製作單位與志工協調者",
        contribution:
          "負責需求訪談，將 Firebase Auth 換成 Supabase read-only API，並制定無障礙指引。",
        impact:
          "任務派發時間從 2.5 天縮短到 4 小時，瓶頸完全消失。",
        highlights: [
          "導入狀態機自動發送各階段通知",
          "提供點字輸入輔助 UI 與高對比模式",
          "模組化儀表板與歷程元件以降低維護成本",
        ],
      },
    },
  },
  {
    slug: "braille-typing",
    stack: ["React", "Vite", "Netlify", "Vitest"],
    timeline: "2021.10 - 2022.02",
    status: "live",
    links: [
      { label: "GitHub", href: "https://github.com/Maccrey/braille-typing" },
      { label: "Demo", href: "https://braille-typing.web.app" },
    ],
    translations: {
      ko: {
        name: "점자 타자 연습기",
        summary:
          "브라우저에서 바로 실행되는 점자 타자 인풋 연습 웹앱.",
        problem:
          "점자 표기법을 처음 접하는 교사/학습자가 소프트웨어 설치 없이 바로 연습할 도구가 부족.",
        audience: "특수교사, 점자 학습 입문자",
        contribution:
          "웹 표준 키보드 이벤트로 점자 6키 입력을 해석하고, 시각화 애니메이션 구현.",
        impact:
          "월간 1천 회 입력 학습 데이터 확보, 피드백 만족도 4.8/5",
        highlights: [
          "접근성 ARIA 패턴 준수",
          "점자 키보드 히트맵으로 학습 데이터 시각화",
          "n8n으로 사용자 피드백을 Google Sheet에 자동 축적",
        ],
      },
      en: {
        name: "Braille Typing Trainer",
        summary: "Browser-based trainer for six-key braille input.",
        problem:
          "Teachers and learners lacked an install-free tool to practice braille notation.",
        audience: "Special education teachers and braille beginners",
        contribution:
          "Parsed six-key patterns with standard keyboard events and built visualization animations.",
        impact:
          "Captured 1,000 monthly typing sessions with a 4.8/5 satisfaction score.",
        highlights: [
          "Followed ARIA accessibility patterns throughout.",
          "Visualized practice data through a braille keyboard heatmap.",
          "Automated feedback ingestion into Google Sheets via n8n.",
        ],
      },
      ja: {
        name: "点字タイピングトレーナー",
        summary:
          "ブラウザだけで動く6キー点字入力の練習用Webアプリ。",
        problem:
          "点字表記を学び始めた教師・学習者がインストール不要で使える練習ツールが不足。",
        audience: "特別支援学校の教師、点字学習の初心者",
        contribution:
          "標準キーボードイベントで6キー入力を解析し、可視化アニメーションを実装。",
        impact:
          "月1,000件の入力データと満足度4.8/5のフィードバックを獲得。",
        highlights: [
          "ARIAアクセシビリティパターンを順守",
          "点字キーボードのヒートマップで学習データを可視化",
          "n8nでフィードバックをGoogle Sheetに自動蓄積",
        ],
      },
      zh: {
        name: "點字打字練習器",
        summary: "在瀏覽器即可練習六鍵點字輸入的 Web App。",
        problem: "教師與學習者缺乏免安裝就能練習點字的工具。",
        audience: "特殊教育教師、點字入門者",
        contribution:
          "以標準鍵盤事件解析六鍵輸入，並加入視覺化動畫。",
        impact:
          "每月收集 1,000 筆練習資料，滿意度 4.8/5。",
        highlights: [
          "遵循 ARIA 無障礙模式",
          "以點字鍵盤熱度圖呈現學習數據",
          "透過 n8n 將使用者回饋自動寫入 Google Sheet",
        ],
      },
    },
  },
];

export const featuredProjects = projects.slice(0, 3);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectCopy(project: Project, locale: Locale): ProjectTranslation {
  return project.translations[locale] ?? project.translations[defaultLocale];
}
