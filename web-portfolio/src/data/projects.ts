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
    slug: "crack-fortune",
    stack: ["React", "Three.js", "Firebase", "Gemini API"],
    timeline: "2025.12",
    status: "live",
    links: [
      { label: "GitHub", href: "https://github.com/Maccrey/CrackFortune" },
      { label: "Demo", href: "https://www.crackfortune.maccrey.com/" },
    ],
    translations: {
      ko: {
        name: "FortuneCrack",
        summary: "3D 포춘 쿠키 깨기와 AI 점술가 상담을 결합한 인터랙티브 운세 플랫폼.",
        problem: "기존 운세 서비스의 정적인 텍스트 결과는 사용자에게 깊은 몰입감이나 개인화된 상담 경험을 제공하지 못함.",
        audience: "매일의 운세를 재미있게 확인하고, 고민을 가볍게 상담하고 싶은 Gen Z 사용자",
        contribution: "React Three Fiber로 3D 쿠키 인터랙션 구현, Gemini API 기반 페르소나 챗봇 설계, 게스트-로그인 데이터 동기화 개발.",
        impact: "3D 애니메이션과 대화형 AI로 기존 텍스트 운세 대비 몰입도 높은 사용자 경험 제공.",
        highlights: [
          "물리기반 3D 포춘 쿠키 깨기 인터랙션 (R3F)",
          "Gemini Pro 기반의 '신비로운 점술가' 페르소나 챗봇",
          "게스트 모드에서 로그인 전환 시 데이터 자동 마이그레이션",
        ],
      },
      en: {
        name: "FortuneCrack",
        summary: "An interactive fortune-telling platform combining 3D fortune cookie breaking with AI-powered counseling.",
        problem: "Traditional fortune services offer static text that lacks immersion and personalized guidance.",
        audience: "Gen Z users seeking fun daily insights and lighthearted counseling",
        contribution: "Implemented 3D interactions using React Three Fiber, designed Gemini API-based persona chatbots, and built guest-to-login data sync.",
        impact: "Delivers a highly immersive experience with 3D animation and conversational AI, surpassing static text formats.",
        highlights: [
          "Physics-based 3D fortune cookie interaction (R3F)",
          "Mystic Fortune Teller persona chatbot powered by Gemini Pro",
          "Automatic data migration from guest mode to authenticated account",
        ],
      },
      ja: {
        name: "FortuneCrack",
        summary: "3DフォーチュンクッキーとAI占い師への相談を組み合わせたインタラクティブな運勢プラットフォーム。",
        problem: "既存の運勢サービスは静的なテキストのみで、没入感や個人的な相談体験が不足していた。",
        audience: "毎日の運勢を楽しみ、軽い悩みを相談したいGen Z世代",
        contribution: "React Three Fiberによる3Dクッキー演出の実装、Gemini APIを用いたペルソナチャットボットの設計、ゲストからログインへのデータ同期開発。",
        impact: "3Dアニメーションと対話型AIにより、従来のテキスト運勢と比較して高い没入感を提供。",
        highlights: [
          "物理ベースの3Dフォーチュンクッキー割り（R3F）",
          "Gemini Proを活用した「神秘的な占い師」ペルソナチャット",
          "ゲストモードからログインへのシームレスなデータ移行",
        ],
      },
      zh: {
        name: "FortuneCrack",
        summary: "結合 3D 幸運餅乾與 AI 占卜師諮詢的互動式運勢平台。",
        problem: "傳統運勢服務僅提供靜態文字，缺乏沉浸感與個人化的諮詢體驗。",
        audience: "尋求每日運勢樂趣與輕量諮詢的 Gen Z 用戶",
        contribution: "使用 React Three Fiber 實作 3D 餅乾互動，設計基於 Gemini API 的角色聊天機器人，並開發訪客至登入的資料同步。",
        impact: "透過 3D 動畫與對話式 AI，提供超越傳統靜態文字的高度沉浸體驗。",
        highlights: [
          "基於物理的 3D 幸運餅乾互動 (R3F)",
          "由 Gemini Pro 驅動的「神秘占卜師」角色聊天",
          "支援訪客模式自動同步資料至登入帳號",
        ],
      },
    },
  },
  {
    slug: "personal-play",
    stack: ["Next.js", "Firebase", "GitHub Pages", "TailwindCSS"],
    timeline: "2024.01 - Present",
    status: "live",
    links: [
      { label: "GitHub", href: "https://github.com/Maccrey/personalplay" },
      { label: "Demo", href: "https://maccrey.com/" },
    ],
    translations: {
      ko: {
        name: "Personal Play",
        summary: "한국어, 영어, 일본어를 지원하는 재미있고 전문적인 다국어 심리테스트 플랫폼.",
        problem: "기존 심리테스트 사이트의 과도한 광고와 부족한 다국어 지원, 모바일 최적화 미흡 문제를 해결.",
        audience: "자기이해와 재미를 추구하는 전 세계 사용자",
        contribution: "Next.js 14 Static Export로 성능 최적화, 다국어 SEO/OG 태그 자동화, Firebase Analytics 연동.",
        impact: "120개 이상의 전문 테스트 제공, 실시간 방문자 집계 및 국가별 맞춤 콘텐츠 제공.",
        highlights: [
          "연애, 성격 등 6개 카테고리의 88개 전문 테스트",
          "접속 국가 기반 자동 언어 감지 및 전환 (KR/EN/JA)",
          "GDPR 준수 광고 제어 및 SEO 최적화",
        ],
      },
      en: {
        name: "Personal Play",
        summary: "A fun and professional multilingual psychological test platform supporting Korean, English, and Japanese.",
        problem: "Addressed issues of excessive ads, lack of multilingual support, and poor mobile optimization in existing platforms.",
        audience: "Global users seeking self-discovery and entertainment",
        contribution: "Optimized performance with Next.js 14 Static Export, automated multilingual SEO/OG tags, and integrated Firebase Analytics.",
        impact: "Provides 120+ professional tests, real-time visitor tracking, and localized content.",
        highlights: [
          "88 professional tests across 6 categories including Love and Personality",
          "Automatic language detection and switching (KR/EN/JA)",
          "GDPR-compliant ad control and SEO optimization",
        ],
      },
      ja: {
        name: "Personal Play",
        summary: "韓国語、英語、日本語に対応した、楽しくて専門的な多言語心理テストプラットフォーム。",
        problem: "既存サイトの過度な広告や多言語対応の欠如、モバイル最適化不足を解決。",
        audience: "自己理解や楽しみを求める世界中のユーザー",
        contribution: "Next.js 14 Static Exportでパフォーマンスを最適化し、多言語SEO/OGタグの自動化、Firebase Analyticsを統合。",
        impact: "88以上の専門テストを提供し、リアルタイムの訪問者追跡とローカライズされたコンテンツを実現。",
        highlights: [
          "恋愛、性格など6つのカテゴリーにわたる120の専門テスト",
          "接続国に基づいた言語の自動検出と切り替え（KR/EN/JA）",
          "GDPR準拠の広告制御とSEO最適化",
        ],
      },
      zh: {
        name: "Personal Play",
        summary: "支援韓語、英語、日語的有趣且專業的多語言心理測驗平台。",
        problem: "解決現有平台廣告過多、缺乏多語言支援及移動端優化不足的問題。",
        audience: "尋求自我探索與娛樂的全球用戶",
        contribution: "使用 Next.js 14 Static Export 優化效能，自動化多語言 SEO/OG 標籤，並整合 Firebase Analytics。",
        impact: "提供 120 個以上的專業測驗，即時追蹤訪客，並提供在地化內容。",
        highlights: [
          "涵蓋戀愛、性格等 6 大類別的 88 個專業測驗",
          "基於連線國家的自動語言偵測與切換 (KR/EN/JA)",
          "符合 GDPR 的廣告控制與 SEO 優化",
        ],
      },
    },
  },
  {
    slug: "study-duck",
    stack: ["Flutter", "Firebase", "Riverpod", "GitHub Actions"],
    timeline: "2023.06 - 2024.02",
    status: "live",
    links: [
      { label: "GitHub", href: "https://github.com/Hummingbird-Team-Project/hummingbird-app" },
      { label: "Demo", href: "https://www.studyduck.net/" },
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
      { label: "GitHub", href: "https://github.com/Maccrey/Task-Manager-Cloudtype" },
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
      { label: "GitHub", href: "https://github.com/Maccrey/braille_typing_EX" },
      { label: "Demo", href: "https://typing.maccrey.com/" },
    ],
    translations: {
      ko: {
        name: "점자 타자 연습기",
        summary:
          "시각장애인을 위한 브라우저 기반 점자 타자 연습기. 개인화된 학습 환경에서 다양한 점자 문자를 연습하고 진행 상황을 추적할 수 있습니다.",
        problem:
          "설치형 프로그램 없이 점자 6키 입력을 체계적으로 연습·기록할 수 있는 학습 도구가 부족.",
        audience: "점자 학습자, 특수교사, 보조공학 교육 담당자",
        contribution:
          "웹 표준 키보드 이벤트로 6키 패턴 엔진을 구현하고, 맞춤 학습 시나리오/진행도 저장, WAI-ARIA 내비게이션을 강화.",
        impact:
          "월간 1천 회 이상의 입력 로그로 학습 난이도 튜닝, 만족도 4.8/5로 커뮤니티 피드백 반영",
        highlights: [
          "접근성: 스크린리더 호환, 키보드 전용 인터랙션, 고대비 모드 지원",
          "개인화: 사용자별 학습 계획과 진행률 저장, 점수 리포트 제공",
          "커뮤니티: 피드백/학습 자료를 n8n + Google Sheet 파이프라인으로 수집·공유",
          "성능: Vite 기반 경량 빌드와 Netlify 배포로 빠른 초기 로드",
        ],
      },
      en: {
        name: "Braille Typing Trainer",
        summary:
          "Browser-based braille typing trainer that lets visually impaired learners practice six-key input with progress tracking.",
        problem:
          "There were few install-free tools that offered structured braille practice and saved progress.",
        audience: "Braille learners, special education teachers, assistive tech coaches",
        contribution:
          "Built a six-key parsing engine on standard keyboard events, added personalized lesson flows and saved progress, and tightened WAI-ARIA navigation.",
        impact:
          "Over 1K monthly practice logs used to tune difficulty; 4.8/5 satisfaction via community feedback.",
        highlights: [
          "Accessibility: screen reader-friendly, keyboard-first interactions, high-contrast mode.",
          "Personalization: per-user lesson plans, progress storage, and score reports.",
          "Community: collects and shares feedback/materials through an n8n + Google Sheet pipeline.",
          "Performance: lightweight Vite build served on Netlify for fast first paint.",
        ],
      },
      ja: {
        name: "点字タイピングトレーナー",
        summary:
          "ブラウザで使える6キー点字入力の練習アプリ。学習者が進捗を追跡しながら点字を練習できます。",
        problem:
          "インストール不要で体系的に点字を練習・記録できるツールが不足していた。",
        audience: "点字学習者、特別支援学校の教師、支援技術コーチ",
        contribution:
          "標準キーボードイベントで6キー入力エンジンを実装し、個別レッスンと進捗保存、WAI-ARIAナビゲーションを強化。",
        impact:
          "月1,000件超の練習ログを元に難易度を調整し、満足度4.8/5のフィードバックを取得。",
        highlights: [
          "アクセシビリティ: スクリーンリーダー対応・キーボード操作・ハイコントラストモード",
          "パーソナライズ: ユーザーごとの学習計画と進捗保存、スコアレポート",
          "コミュニティ: n8n＋Google Sheetでフィードバックと教材を収集・共有",
          "パフォーマンス: Viteの軽量ビルドをNetlifyで高速配信",
        ],
      },
      zh: {
        name: "點字打字練習器",
        summary: "讓視障學習者能在瀏覽器練習六鍵點字並追蹤進度的 Web 應用。",
        problem: "缺乏免安裝、可系統化練習並保存進度的點字工具。",
        audience: "點字學習者、特殊教育教師、輔具教練",
        contribution:
          "以標準鍵盤事件打造 6 鍵解析引擎，提供個人化課程與進度存取，並加強 WAI-ARIA 導航。",
        impact:
          "每月 1,000+ 筆練習紀錄用於調整難度，社群滿意度 4.8/5。",
        highlights: [
          "無障礙: 支援螢幕閱讀器、鍵盤操作與高對比模式",
          "個人化: 使用者課程計畫、進度儲存與分數報告",
          "社群: 透過 n8n + Google Sheet 蒐集並分享回饋/教材",
          "效能: Vite 輕量構建，Netlify 快速佈署與載入",
        ],
      },
    },
  },
  {
    slug: "work-dashboard",
    stack: ["HTML", "CSS", "Vanilla JS", "Playwright"],
    timeline: "2025.10",
    status: "live",
    links: [
      { label: "GitHub", href: "https://github.com/Maccrey/work_dash" },
      { label: "Demo", href: "https://dashboard.maccrey.com/" },
    ],
    translations: {
      ko: {
        name: "업무 대시보드",
        summary:
          "메모, 계산기, 할 일, 출퇴근, 뽀모도로, TTS 스케줄러를 한 화면에서 관리하는 생산성 대시보드.",
        problem:
          "분산된 툴로 관리하던 일정·메모·근태 데이터를 한곳에서 모니터링하고 유지보수 가능한 테스트 체계를 갖추기 어려움.",
        audience: "개발자, PM, 프리랜서 등 개인 업무를 한 화면에서 관리하려는 사용자",
        contribution:
          "24개 Playwright 시나리오로 3브라우저(Cr/FF/WebKit) 품질 검증, UI 타이밍 조건부 대기 가이드 제안, localStorage 지속성 확인.",
        impact:
          "핵심 카드 기능 100% 통과(메모/할 일/계산기/설정/데이터 지속성), 전체 70.8% 통과로 안정성 지표 확보.",
        highlights: [
          "메모·할 일·계산기·뽀모도로·TTS·출퇴근·카드 토글을 갖춘 데스크톱 위젯형 UX",
          "조건부 대기/명확한 셀렉터로 UI 타이밍 이슈 최소화하는 테스트 가이드",
          "localStorage에 카드 표시 상태와 데이터 저장, 새로고침 후에도 동일 상태 유지",
          "README_TEST/TEST_RESULTS/TESTING_GUIDE로 테스트 커버리지와 개선 우선순위 문서화",
        ],
      },
      en: {
        name: "Work Dashboard",
        summary:
          "Productivity dashboard that combines notes, calculator, todos, clock-in/out, pomodoro, and TTS scheduler in one view.",
        problem:
          "Hard to monitor dispersed todo/memo/attendance data and keep a maintainable test suite across browsers.",
        audience: "Developers, PMs, and freelancers who want a single-screen personal workspace.",
        contribution:
          "Authored 24 Playwright scenarios across Chromium/Firefox/WebKit, proposed conditional waits to fix UI timing, verified localStorage persistence.",
        impact:
          "Core cards (notes/todos/calculator/settings/persistence) at 100% pass; overall 70.8% pass rate providing a stability baseline.",
        highlights: [
          "Desktop-style cards for notes, todos, calculator, pomodoro, TTS scheduler, time tracking, and card toggles.",
          "Testing guide favors explicit selectors and conditional waits to reduce flaky UI timing.",
          "Persists card visibility and data in localStorage so refreshes keep the same layout.",
          "Documented quality status via README_TEST, TEST_RESULTS, and TESTING_GUIDE.",
        ],
      },
      ja: {
        name: "業務ダッシュボード",
        summary:
          "メモ、計算機、ToDo、出退勤、ポモドーロ、TTSスケジューラーを1画面にまとめた生産性ダッシュボード。",
        problem:
          "分散したToDo/メモ/勤怠データを一元管理し、ブラウザ横断でメンテしやすいテスト体系を作るのが難しい。",
        audience: "1画面で個人業務を管理したい開発者・PM・フリーランサー",
        contribution:
          "Chromium/Firefox/WebKit向けに24のPlaywrightシナリオを作成し、UIタイミング改善の条件付き待機ガイドを提示、localStorageの永続性を検証。",
        impact:
          "メモ/ToDo/計算機/設定/永続性カードは100%合格、全体70.8%合格で安定性のベースラインを確立。",
        highlights: [
          "メモ・ToDo・計算機・ポモドーロ・TTS・出退勤・カード切替を備えたデスクトップ風カードUX",
          "明示的セレクターと条件付き待機でUIタイミング由来のフレークを削減するテストガイド",
          "localStorageにカード表示状態とデータを保存し、リロード後もレイアウトを維持",
          "README_TEST/TEST_RESULTS/TESTING_GUIDEで品質状況と改善優先度を文書化",
        ],
      },
      zh: {
        name: "工作儀表板",
        summary:
          "把備忘錄、計算機、待辦、打卡、番茄鐘、TTS 排程放在同一畫面的生產力儀表板。",
        problem:
          "難以同時監控分散的待辦/備忘錄/出勤資料，並在多瀏覽器維持可維護的測試體系。",
        audience: "想在單一畫面管理個人工作的開發者、PM、自由工作者",
        contribution:
          "為 Chromium/Firefox/WebKit 撰寫 24 個 Playwright 情境，提出條件等待以修正 UI 時序，並驗證 localStorage 持久化。",
        impact:
          "備忘錄/待辦/計算機/設定/持久化卡片 100% 通過，整體通過率 70.8% 作為穩定性基線。",
        highlights: [
          "備忘錄、待辦、計算機、番茄鐘、TTS、出勤、卡片切換的桌面卡片式體驗",
          "以明確選擇器與條件等待降低 UI 時序造成的測試不穩",
          "localStorage 儲存卡片顯示狀態與資料，重新整理後保持佈局",
          "透過 README_TEST、TEST_RESULTS、TESTING_GUIDE 將品質狀態與改進優先度文件化",
        ],
      },
    },
  },
  {
    slug: "symbol-checker",
    stack: ["HTML", "CSS", "Vanilla JS", "Chart.js"],
    timeline: "2025.11",
    status: "live",
    links: [
      { label: "GitHub", href: "https://github.com/Maccrey/symbol-checker" },
      { label: "Demo", href: "https://checker.maccrey.com/" },
    ],
    translations: {
      ko: {
        name: "특수문자 검사기",
        summary:
          "특수문자 개수·괄호/인용부호 짝을 자동 검사하고, 두 문서를 diff 모드로 비교하는 웹 도구.",
        problem:
          "괄호·따옴표 누락이나 두 칸 띄어쓰기를 수동으로 찾기 어렵고, 문서 간 차이를 빠르게 대조하기 힘듦.",
        audience: "기술 문서/보고서 작성자, 편집자, 번역가",
        contribution:
          "특수문자 카운트와 불균형 검사, Chart.js 시각화, diff 모드 비교, 붙여넣기·다운로드 워크플로우 설계.",
        impact:
          "한 번의 검사로 괄호/인용부호 누락을 즉시 확인해 교정 시간 단축, 반복 검수 정확도 향상.",
        highlights: [
          "괄호·인용부호 짝 검증 및 누락 위치 하이라이트",
          "특수문자 유형별 카운트와 빈도 차트",
          "두 문서 내용을 diff 모드로 비교해 상이한 구간 표시",
          "텍스트 붙여넣기/초기화/다운로드 지원으로 편집 워크플로우 간소화",
        ],
      },
      en: {
        name: "Symbol Checker",
        summary:
          "Web tool that counts special characters, checks unmatched brackets/quotes, and compares two documents via diff mode.",
        problem:
          "Manually spotting missing pairs or double spaces is slow, and cross-checking differences between docs is tedious.",
        audience: "Technical writers, editors, translators",
        contribution:
          "Built special-character counters, imbalance detection, Chart.js visuals, diff comparison, and paste/download flows.",
        impact:
          "Cuts proofreading time by surfacing missing pairs instantly and improves accuracy across repeated checks.",
        highlights: [
          "Validates bracket/quote pairs and highlights missing positions",
          "Counts special characters and visualizes frequency with charts",
          "Diff mode to compare two documents and mark divergent lines",
          "Paste/reset/download actions streamline the editing loop",
        ],
      },
      ja: {
        name: "特殊文字チェッカー",
        summary:
          "特殊文字の数と括弧/引用符のペア漏れを自動検出し、2つの文書をdiffモードで比較できるWebツール。",
        problem:
          "括弧や引用符の抜け、二重スペースを手作業で見つけるのは非効率で、文書差分の確認も手間がかかる。",
        audience: "技術文書・レポートの執筆者、編集者、翻訳者",
        contribution:
          "特殊文字カウントと不整合検知、Chart.jsによる可視化、diff比較、貼り付け/ダウンロードのフローを設計。",
        impact:
          "ペア抜けを即座に可視化して校正時間を短縮し、反復チェックの精度を向上。",
        highlights: [
          "括弧・引用符のペア検証と欠落箇所のハイライト",
          "特殊文字タイプ別カウントと頻度チャート表示",
          "2文書をdiffモードで比較し差分行をマーク",
          "貼り付け・リセット・ダウンロードで編集フローを簡素化",
        ],
      },
      zh: {
        name: "特殊符號檢查器",
        summary:
          "自動統計特殊符號、檢查括號/引號是否成對，並以 diff 模式比較兩份文件的網頁工具。",
        problem:
          "手動找出缺失的括號或雙空格效率低，也難以快速比對兩份文件的差異。",
        audience: "技術寫作者、編輯、翻譯人員",
        contribution:
          "實作特殊符號計數與不平衡偵測、Chart.js 視覺化、diff 比對，以及貼上/下載流程。",
        impact:
          "即時顯示缺失的括號/引號，縮短校對時間並提高重複檢查的準確度。",
        highlights: [
          "檢查括號與引號配對，標示缺失位置",
          "統計特殊符號並以圖表呈現頻率",
          "diff 模式比較兩份文件並標出差異行",
          "支援貼上、重置、下載以簡化編輯流程",
        ],
      },
    },
  },
];

export const featuredProjects = projects;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectCopy(project: Project, locale: Locale): ProjectTranslation {
  return project.translations[locale] ?? project.translations[defaultLocale];
}
