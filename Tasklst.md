# Tasklst.md (Maccrey Dev Portfolio - No DB)

> 모든 작업은 `prd.md`와 "바이브코딩 가이드.md"를 기준으로 Micro TDD(`Fail → Code → Refactor → Contract/Test`) 순서로 진행한다. Playwright 테스트가 어려운 영역은 명시적으로 수동 체크 기준을 적어둔다.

## 1. 정적 Next.js 환경/글로벌 시스템

- [ ] **(Fail)** `pnpm create next-app`으로 CSR 자산이 포함된 기본 구조가 아닌 SSG/Static Export 구성이 필요하다는 테스트(빌드 실패) 작성.
- [ ] **(Code)** `next.config.mjs`에 `output: "export"`와 GitHub Pages `basePath`/`assetPrefix` 설정, `pnpm` 워크플로 셋업.
- [ ] **(Refactor)** 공용 UI 시스템(`fonts`, `theme`, `glassmorphism` 토큰) 분리, Tailwind 혹은 CSS-in-JS 중 선택 후 레이아웃 컴포넌트로 추상화.
- [ ] **(Contract/Test)** Playwright로 루트 페이지가 200 응답/핵심 텍스트 포함 확인. Lighthouse CI 스크립트 추가(선택).

## 2. 정적 데이터 레이어

- [ ] **(Fail)** `data/projects.ts`, `data/skills.ts`, `locales/*.json`이 없을 때 타입 오류가 발생하도록 Jest/TS 테스트 작성.
- [ ] **(Code)** `Project`, `Skill`, `LocaleStrings` 타입 정의 및 하드코딩 데이터 작성(Study Duck, 점자 대시보드, 점자 타자 연습기 등).
- [ ] **(Refactor)** slug, tag, CTA 등을 공통 util로 추출 (`lib/slugify.ts`, `lib/i18n.ts`).
- [ ] **(Contract/Test)** `tsc --noEmit`와 데이터 스키마 스냅샷 테스트 실행.

## 3. 레이아웃 / 내비게이션 / 글로벌 UI

- [ ] **(Fail)** 네비게이션가 접근성 요구사항(키보드 탭 이동) 충족하지 않을 경우 Playwright 테스트가 실패하도록 작성.
- [ ] **(Code)** `Layout`, `Header`, `Footer`, `ThemeToggle`, `LocaleSwitcher` 컴포넌트 구현(정적 메뉴: Home, Projects, Skills, Contact).
- [ ] **(Refactor)** glassmorphism 카드/버튼을 `components/ui`에 공통화, 다크 모드 지원.
- [ ] **(Contract/Test)** Playwright 시나리오: 테마 토글이 `data-theme`를 전환, 로케일 전환 시 Hero 텍스트가 언어별로 변경됨을 확인.

## 4. Home 페이지 (Hero + 대표 프로젝트)

- [ ] **(Fail)** Home에 대표 프로젝트 카드가 최소 1개 표시되는지 Playwright 테스트 작성.
- [ ] **(Code)** Hero 메시지(“현재 존재하지 않는 것을 만드는 개발자 Maccrey”), 대표 3개 프로젝트 카드, CTA 버튼(Projects로 이동) 구현.
- [ ] **(Refactor)** 프로젝트 카드를 재사용 가능한 컴포넌트로 추출, 애니메이션/스크롤 모션 적용.
- [ ] **(Contract/Test)** Hero 텍스트, CTA, 프로젝트 카드 타이틀 랜더 테스트(React Testing Library).

## 5. Projects 리스트 & 상세

- [ ] **(Fail)** `/projects`에서 `projects.ts`의 모든 엔트리가 표시되지 않으면 테스트 실패하도록 Playwright/RTL 테스트 추가.
- [ ] **(Code)** 리스트 페이지 + 정적 경로(`/projects/[slug]`) 생성, 문제 정의/대상/기여도/스택/임팩트/링크 섹션 구성.
- [ ] **(Refactor)** `ProjectCard`, `ProjectDetailSections`로 분리, 스택/임팩트 뱃지 컴포넌트화.
- [ ] **(Contract/Test)** Next.js `getStaticPaths`/`getStaticProps`에 대한 단위 테스트 혹은 타입 검증, 상세 페이지에서 GitHub/Demo 링크 존재 여부를 Playwright로 검증.

## 6. Skills & 성장 맵

- [ ] **(Fail)** 카테고리(learning/strong/usable) 각각이 렌더되지 않으면 Playwright 테스트 실패.
- [ ] **(Code)** `SkillsPage`에 카테고리별 섹션 및 아이콘/뱃지 UI 구성, 성장 방향(현재 배우는 n8n) 강조.
- [ ] **(Refactor)** Skill 데이터에서 카테고리별 색상/아이콘 매핑을 util로 분리.
- [ ] **(Contract/Test)** React Testing Library로 특정 카테고리 텍스트가 존재하는지 검증.

## 7. Contact & 외부 폼 연계

- [ ] **(Fail)** GitHub/Email 링크가 누락되면 테스트가 실패하도록 Contact 컴포넌트 테스트 구현.
- [ ] **(Code)** `mailto:` 버튼, GitHub 링크, (옵션) Formspree/Google Form으로 연결되는 버튼 구성.
- [ ] **(Refactor)** ContactMethod 카드 컴포넌트 추상화 및 hover 인터랙션 추가.
- [ ] **(Contract/Test)** Playwright로 Contact 섹션의 a[href^="mailto:"] 존재, GitHub 링크 새 탭 처리 여부 확인.

## 8. 다국어(i18n) & 콘텐츠 관리

- [ ] **(Fail)** 선택한 언어에 맞는 문자열이 렌더되지 않으면 테스트 실패하도록 e2e 테스트 작성.
- [ ] **(Code)** `next-intl` 혹은 커스텀 i18n 래퍼 도입, `locales/ko|en|ja|zh.json` 작성, `useLocale` 훅 구현.
- [ ] **(Refactor)** 페이지별 copy를 JSON에서 불러오는 구조로 통합, fallback 언어 처리.
- [ ] **(Contract/Test)** Jest 스냅샷으로 locale JSON 키 일치 여부 검사.

## 9. 접근성·반응형·테마 품질

- [ ] **(Fail)** Lighthouse/axe-core 접근성 점수가 90 미만이면 파이프라인 실패하도록 스크립트 구성.
- [ ] **(Code)** aria-label, 시맨틱 HTML, 키보드 포커스 스타일, 반응형 레이아웃(breakpoints) 구현.
- [ ] **(Refactor)** glassmorphism 대비 확보(텍스트 그라디언트/blur 조정) 및 모션 감도 감소 옵션 제공.
- [ ] **(Contract/Test)** `@axe-core/playwright`로 접근성 검사, responsive viewport 스냅샷 테스트.

## 10. 애널리틱스 & 배포 CI

- [ ] **(Fail)** GitHub Actions에서 `pnpm lint && pnpm test && pnpm build && pnpm export`가 통과하지 않으면 배포 중단.
- [ ] **(Code)** GA4/Plausible 스크립트 주입 옵션 플래그, GitHub Actions 워크플로 작성(배포: `gh-pages` 브랜치).
- [ ] **(Refactor)** 환경변수/feature flag를 분리(`NEXT_PUBLIC_ANALYTICS_ID`), 빌드 결과 `out/` 자동 푸시.
- [ ] **(Contract/Test)** Actions에서 캐시 재사용 및 pnpm lock 검증, GitHub Pages URL 헬스 체크 스크립트 추가.

## 11. 수동 테스트 체크리스트(Playwright 한계 영역)

- [ ] 모바일(iOS Safari, Android Chrome)에서 Projects/Contact 스크롤 및 폰트 크기 확인.
- [ ] 테마 토글이 OS 다크모드 설정과 충돌 없이 동작하는지 확인.
- [ ] 외부 Formspree/Google Form 링크가 올바른 계정으로 연결되는지 확인.
- [ ] Custom domain + HTTPS 연결 상태 확인.

