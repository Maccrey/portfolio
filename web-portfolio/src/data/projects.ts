export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  summary: string;
  problem: string;
  audience: string;
  contribution: string;
  stack: string[];
  impact: string;
  timeline: string;
  status: "live" | "prototype";
  links: ProjectLink[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "study-duck",
    name: "Study Duck",
    summary:
      "몰입을 돕는 학습 타이머와 집중 루틴을 제공하는 모바일 앱. Flutter/Firebase 기반.",
    problem:
      "성인 학습자들이 멀티 디바이스에서 루틴을 유지하기 어렵다는 문제를 해결하고자 했음.",
    audience: "스터디 모임, 부트캠프생, 재직자 학습자",
    contribution:
      "PM/개발을 모두 맡아 Flutter 위젯 구조 설계, Firebase 인증 없이 로컬 프로필 저장.",
    stack: ["Flutter", "Firebase", "Riverpod", "GitHub Actions"],
    impact:
      "주간 400분 이상을 기록하는 사용자 12명 확보, 학습 루틴 이탈률 26% 감소.",
    timeline: "2023.06 - 2024.02",
    status: "live",
    links: [
      { label: "GitHub", href: "https://github.com/Maccrey/study-duck" },
      { label: "Demo", href: "https://studyduck.app" },
    ],
    highlights: [
      "Focus Session, Pomodoro, 번다운 차트 등 학습자 여정 전체를 덮는 기능 설계",
      "모듈형 위젯 설계로 재사용률 65% 달성",
      "Firebase 없이 로컬 퍼시스턴스 구현으로 개인정보 보관 부담 최소화",
    ],
  },
  {
    slug: "braille-dashboard",
    name: "점자 도서 작업 관리 대시보드",
    summary:
      "점자 도서 봉사자들의 작업 현황을 한 눈에 확인할 수 있는 웹 대시보드.",
    problem:
      "문서/카톡으로 관리되던 점역, 검수 현황이 뒤섞여 병목이 발생.",
    audience: "시각장애인 도서 제작 단체와 봉사 코디네이터",
    contribution:
      "요구사항 도출, Firebase Auth 제거 후 Supabase read-only API로 대체, 접근성 가이드 정의.",
    stack: ["Next.js", "Supabase", "TypeScript", "TailwindCSS"],
    impact:
      "작업 배정 시간이 평균 2.5일에서 4시간으로 단축, 병목 업무 제로화.",
    timeline: "2022.03 - 2023.01",
    status: "prototype",
    links: [
      { label: "GitHub", href: "https://github.com/Maccrey/braille-dashboard" },
    ],
    highlights: [
      "상태 머신 도입으로 작업 단계별 알림 자동화",
      "점자 입력 보조 UI와 고대비 모드 제공",
      "Dashboards/업무 히스토리 컴포넌트를 모듈화하여 유지보수 용이",
    ],
  },
  {
    slug: "braille-typing",
    name: "점자 타자 연습기",
    summary:
      "브라우저에서 바로 실행되는 점자 타자 인풋 연습 웹앱.",
    problem:
      "점자 표기법을 처음 접하는 교사/학습자가 소프트웨어 설치 없이 바로 연습할 도구가 부족.",
    audience: "특수교사, 점자 학습 입문자",
    contribution:
      "웹 표준 키보드 이벤트로 점자 6키 입력을 해석하고, 시각화 애니메이션 구현.",
    stack: ["React", "Vite", "Netlify", "Vitest"],
    impact:
      "월간 1천 회 입력 학습 데이터 확보, 피드백 만족도 4.8/5",
    timeline: "2021.10 - 2022.02",
    status: "live",
    links: [
      { label: "GitHub", href: "https://github.com/Maccrey/braille-typing" },
      { label: "Demo", href: "https://braille-typing.web.app" },
    ],
    highlights: [
      "접근성 ARIA 패턴 준수",
      "점자 키보드 히트맵으로 학습 데이터 시각화",
      "n8n으로 사용자 피드백을 Google Sheet에 자동 축적",
    ],
  },
];

export const featuredProjects = projects.slice(0, 3);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
