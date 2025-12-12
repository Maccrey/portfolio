좋아, 딱 정리하자면

> **로그인 X / DB X / 그냥 방문해서 보는 정적 포트폴리오**

로 바꾸자는 거지?
그 기준으로 **PRD / README / Tasklist** 전부 “DB 없는 버전”으로 다시 짜서 줄게.
(데이터는 전부 코드/JSON에 하드코딩, 폼은 외부 서비스나 mailto로 처리)

---

## PRD.md (DB 없는 버전)

````md
# Maccrey Dev Portfolio (GitHub Pages) - PRD (No-DB Version)

## 1. 제품 개요

### 1.1 문제 정의

- 50세에 개발을 시작해 꾸준히 성장 중인 개발자의 서사, 소셜 임팩트 프로젝트, 협업 경험을
  **이력서만으로는 전달하기 어렵다.**
- HR/클라이언트는 **로그인, 회원가입 없이** 바로 들어와서
  “무슨 걸 어떻게 만들었는지”를 빠르게 보고 싶다.
- 개인 포트폴리오 사이트에 별도의 DB/백엔드까지 운영하는 건 **유지보수 부담**이 크다.

### 1.2 타깃

- HR, 테크리드, PM
- 프리랜서 의뢰를 고려하는 클라이언트
- 함께 사이드 프로젝트를 할 개발자/디자이너

### 1.3 해결 전략

- **GitHub Pages + 정적 빌드(Next.js Static Export)**  
  → 로그인/회원가입/백엔드/DB 전혀 없이, 정적 파일만 배포.
- 프로젝트/스킬/텍스트는 모두 **코드/JSON에 정적으로 정의**하고 빌드 타임에 포함.
- Contact는
  - `mailto:` 링크
  - 또는 Formspree 등 **외부 폼 서비스**(원하면 추가) 활용 → 직접 DB 운영 X.
- 2025년 느낌의 **글래스모피즘 다크 테마 + 기술적인 UI**로 완성도 높은 이미지 전달.
- 다국어(ko/en/ja/zh)는 **정적 번역 리소스(i18n JSON)** 기반으로 처리.

### 1.4 차별점

- “50세에 개발 시작”이라는 강한 서사 + 점자/시각장애 관련 프로젝트라는 소셜 임팩트.
- Flutter/Firebase/Supabase 경험, n8n·Python·AI 코딩툴 활용 능력 강조.
- 로그인/DB 없이도 **프로젝트/스킬/스토리 구조화**를 잘한 포트폴리오.

---

## 2. 핵심 가치 제안

> “현재 존재하지 않는 것을 만드는 개발자 Maccrey.  
>  50세에 개발을 시작해, 사람들의 삶을 더 나은 방향으로 바꾸는 소프트웨어를 만든다.”

---

## 3. 핵심 기능

### 3.1 프로젝트 갤러리 & 상세 페이지

- **문제**  
  HR/클라이언트가 프로젝트 레포 링크만 보고는 “무슨 문제를 어떻게 해결했는지” 감이 잘 안 온다.
- **해결**
  - `/projects` 에 대표 3개 프로젝트 카드:
    - Study Duck (학습 타이머 앱)
    - 점자 도서 작업 관리 대시보드
    - 점자 타자 연습기 웹
  - 각 상세 페이지(정적 페이지):
    - 문제 정의 / 대상 사용자
    - 본인 역할 & 기여도
    - 기술 스택 뱃지
    - 문제 해결 과정 / 트러블슈팅
    - 소셜 임팩트(점자 관련 프로젝트)
    - GitHub / Demo 링크
- **측정 지표(개념적)**
  - Projects 페이지 진입 비율, 상세 페이지 뷰는 GA/Plausible 등 **외부 분석 도구**로 추적

### 3.2 스킬 맵 & 성장 방향 시각화

- **문제**  
  스택 나열만 하면 “지금 뭘 파고 있는지 / 어떤 걸 잘하는지”가 보이지 않는다.
- **해결**
  - Skills 페이지 구분:
    - 현재 배우는 기술: n8n
    - 잘하는 기술: Flutter, Firebase
    - 사용 가능 기술: Python, Supabase, HTML, CSS, JavaScript, Git, VibeCoding 툴들
  - 아이콘 + 카테고리 뱃지로 시각화.
- **지표(개념)**
  - Skills 페이지 체류 시간, 이탈률을 외부 분석 도구로 확인.

### 3.3 Contact 섹션 (DB 없이)

- **문제**  
  포트폴리오를 보고도 어디로 연락해야 할지 모르면 그냥 나가버린다.
- **해결**
  - Contact 페이지:
    - GitHub: https://github.com/Maccrey
    - Email: `mailto:m01071630214@gmail.com`
    - (옵션) Formspree/Google Form 등 외부 폼 서비스로 간단한 폼 연결  
      → 별도 서버/DB 운영 없음.
- **지표(개념)**
  - 메일/폼 도착 수는 **이메일/서비스 관리자 화면에서 직접 확인.**

---

## 4. 사용자 스토리 (요약)

### HR

```gherkin
Scenario: HR가 5분 안에 후보자 이해
  Given HR가 Home 페이지에 진입했을 때
  When Hero 섹션과 Projects 섹션을 스크롤해서 볼 때
  Then Maccrey의 핵심 메시지와 대표 프로젝트 3개를 확인할 수 있어야 한다
  And 각 프로젝트 상세에서 역할, 기술 스택, 문제 해결 과정을 1분 안에 파악할 수 있어야 한다
```
````

### 클라이언트

```gherkin
Scenario: 클라이언트가 프리랜서 적합성 판단
  Given 클라이언트가 모바일 브라우저로 포트폴리오를 열었을 때
  When Projects와 Contact 페이지를 확인할 때
  Then 점자 관련 프로젝트를 통해 소셜 임팩트를 이해할 수 있어야 하고
  And Contact 섹션에서 GitHub와 이메일을 즉시 확인할 수 있어야 한다
```

---

## 5. 성공 지표 (웹 지표, DB 없이 외부 도구 기준)

| 지표                         | 목표        | 도구 예시        |
| ---------------------------- | ----------- | ---------------- |
| 전체 방문 수                 | 점진적 증가 | GA4, Plausible   |
| Projects 상세 페이지 뷰 비율 | 50% 이상    | GA4 이벤트       |
| 모바일 방문 비율             | 50% 이상    | GA4              |
| LCP p75 (모바일)             | ≤ 2.5s      | Lighthouse / RUM |
| INP p75                      | ≤ 200ms     | Lighthouse / RUM |
| CLS p75                      | ≤ 0.1       | Lighthouse / RUM |
| JS 오류율                    | ≤ 0.5%      | Sentry 등        |

※ 모든 지표는 **DB 없이** 외부 분석/모니터링 도구로만 측정.

---

## 6. 비기능 요구사항

- 성능: 정적 빌드 + GitHub Pages, Core Web Vitals 목표 충족.
- SEO: 메타 태그, 오픈그래프, sitemap.xml, robots.txt.
- 접근성: 시맨틱 태그, 키보드 내비게이션, 대비 준수.
- 국제화: ko/en/ja/zh 정적 번역 파일, 언어 스위치.
- 브라우저 지원: 최신 Chrome/Edge/Firefox/Safari, iOS Safari, Android Chrome.
- 보안: 별도 로그인/DB 없고, Contact는 mailto 또는 외부 폼만 사용.

---

## 7. 데이터 모델 (코드 안에서만)

DB는 없지만, 코드 안에서 구조는 있어야 하니까 **TypeScript 인터페이스** 수준으로 정의.

### 7.1 TypeScript 타입

```ts
export type ProjectSlug = "study-duck" | "braille-typing" | "braille-dashboard";

export interface Project {
  slug: ProjectSlug;
  title: string;
  summary: string;
  role: string;
  impactType: "social" | "learning" | "etc";
  techStack: string[];
  githubUrl: string;
  demoUrl?: string | null;
}

export type SkillCategory = "learning" | "strong" | "usable";

export interface Skill {
  name: string;
  category: SkillCategory;
  iconKey: string;
}
```

- 실제 데이터는 `projects.ts`, `skills.ts` 같은 파일에 **상수 배열**로 선언.
- 언어별 텍스트는 `locales/ko.json`, `locales/en.json` 등으로 관리.

---

## 8. 런칭 플랜 (No-DB)

- v0.1

  - ko-only, Home/About/Projects/Skills/Contact 정적 페이지

- v0.5

  - 글래스모피즘 디자인 완성, 다국어 지원 추가

- v1.0

  - Lighthouse/접근성 기준 통과, GA4/분석 연동

````

---

## README.md (No-DB 버전)

```md
# Maccrey Dev Portfolio (Static, No-DB)

> "현재 존재하지 않는 것은 내가 만든다."

GitHub Pages 기반 **완전 정적(Static)** 개발자 포트폴리오.
로그인/회원가입/DB 없이 누구나 바로 접속해서
Maccrey의 프로젝트, 스킬, 스토리를 볼 수 있다.

---

## 기능 요약

- Home: 캐치프레이즈, 주요 프로젝트 하이라이트.
- About: 50세에 개발을 시작한 스토리, 블록체인 비즈니스 → 개발자로의 전환, 협업 경험.
- Projects: Study Duck, 점자 타자 연습기, 점자 도서 작업 관리 대시보드.
- Skills:
  - 현재 배우는 기술: n8n
  - 잘하는 기술: Flutter, Firebase
  - 사용 가능한 기술: Python, Supabase, HTML, CSS, JavaScript, Git, AI 코딩툴 등.
- Contact: GitHub, Email, (옵션) 외부 서비스 연결 폼.

---

## 기술 스택

### 런타임 / 프레임워크

- Node.js 20
- Next.js 15 (App Router, Static Export)

### 언어 / 툴

- TypeScript 5
- 패키지 매니저: pnpm

### UI / 스타일

- Tailwind CSS
- 글래스모피즘 + 다크 테마 기반
- 개발자 느낌의 모노스페이스 폰트 조합

### 상태관리 / 라우팅

- State: React 훅 + Context (테마, 언어)
- Routing: Next.js App Router (파일 기반)

### 백엔드 / DB

- **없음**
- 모든 데이터는 정적 파일/코드 상수로 관리
- Contact는 `mailto:` 또는 Formspree/Google Form 등 외부 서비스 활용 (선택사항)

### 국제화(i18n)

- 지원 언어: ko / en / ja / zh
- 구조: `/`(ko), `/en`, `/ja`, `/zh`
- 번역 리소스: `locales/*.json`

---

## 프로젝트 상태

- 계획: 완료
- 개발: 예정
- 배포: GitHub Pages (예: `maccrey.github.io`)

---

## 로컬 실행

```bash
# 의존성 설치
pnpm install

# 개발 서버
pnpm dev

# 프로덕션 빌드 + 정적 export
pnpm build
pnpm export
# out/ 폴더를 GitHub Pages에 배포
````

---

## 테스트 / 품질

- Lint: ESLint
- Type Check: tsc
- Unit/Component Test: Jest/Vitest + Testing Library
- E2E: Playwright 또는 Cypress (선택)
- 성능/접근성: Lighthouse, axe

목표:

- Lighthouse Performance ≥ 90
- Accessibility ≥ 90
- SEO ≥ 90

---

## 구조 개요

```text
src/
  app/
    page.tsx           # Home
    about/page.tsx
    projects/page.tsx
    projects/[slug]/page.tsx
    skills/page.tsx
    contact/page.tsx
  components/
    layout/
    nav/
    project-card.tsx
    skill-badges.tsx
    language-switcher.tsx
  data/
    projects.ts
    skills.ts
  locales/
    ko.json
    en.json
    ja.json
    zh.json
```

---

## 연락

- GitHub: [https://github.com/Maccrey](https://github.com/Maccrey)
- Email: [m01071630214@gmail.com](mailto:m01071630214@gmail.com)

````

---

## Tasklist.md (No-DB 버전)

```md
# Maccrey Dev Portfolio - Tasklist (No-DB)

## 1. 아키텍처 개요

텍스트 다이어그램:

브라우저(Client)
  ↓ HTTPS
GitHub Pages (정적 HTML/CSS/JS)
  ↔ (옵션) 외부 서비스
      - GA4/Plausible (분석)
      - Formspree/Google Form (Contact 폼)

- 서버/DB/백엔드 직접 운영 없음.
- 모든 콘텐츠는 정적 빌드 결과물에 포함.

---

## 2. 서비스 경계

### web-portfolio (프론트엔드)

- 역할:
  - 모든 페이지 렌더링
  - i18n, 다크 모드, 라우팅
- 데이터:
  - `data/projects.ts`, `data/skills.ts` 상수
  - `locales/*.json` 번역 파일

### external-analytics (외부, 선택)

- GA4, Plausible 등
- 방문/페이지뷰/이벤트 추적 (DB는 외부 서비스가 관리)

### external-forms (외부, 선택)

- Formspree/Google Form 등
- Contact 폼 제출 처리 (DB는 외부 서비스가 관리)

---

## 3. TDD 체크리스트

### Home 페이지

- [Fail] 첫 화면에 캐치프레이즈와 대표 프로젝트 카드가 1개 이상 보여야 한다.
- [Code] `projects.ts`에서 상위 N개를 읽어와 카드 렌더링.
- [Refactor] 카드 디자인 컴포넌트 분리.
- [Contract] `projects` 데이터 타입이 `Project` 인터페이스와 일치하는지 테스트.

### Projects 페이지

- [Fail] `/projects`에서 `projects.ts`에 정의된 모든 프로젝트가 렌더링되어야 한다.
- [Code] map 렌더링 + slug 기반 링크.
- [Refactor] ProjectList/ProjectCard로 분리.
- [Contract] 슬러그 기반 라우트(`/projects/[slug]`)가 존재하는지 테스트.

### Skills 페이지

- [Fail] 카테고리별(learning/strong/usable) 그룹이 나뉘어 있어야 한다.
- [Code] `skills.ts`에서 필터링 렌더링.
- [Refactor] SkillSection 컴포넌트 분리.

### Contact 페이지

- [Fail] GitHub, Email 링크가 항상 존재해야 한다.
- [Code] `mailto:` 링크/버튼 구현.
- [Refactor] ContactMethod 컴포넌트로 정리.

---

## 4. 데이터 스키마 (코드 레벨)

- [ ] `Project` 타입 정의
- [ ] `Skill` 타입 정의
- [ ] `projects.ts`에 하드코딩된 데이터 작성
- [ ] `skills.ts`에 하드코딩된 데이터 작성
- [ ] `locales/*.json` 구조 통일 (key 일관성 유지)

---

## 5. 보안

- 폼을 쓴다면:
  - Formspree/Google Form 등 외부 서비스의 스팸 방지 기능 이용.
- XSS/취약점:
  - 사용자 입력을 받지 않으므로 리스크 낮음.
- HTTPS:
  - GitHub Pages + custom domain 사용 시 HTTPS 자동.

---

## 6. 모니터링

- GA4 스니펫 또는 Plausible 스크립트 삽입.
- 확인할 것:
  - 방문 수
  - Projects 페이지 뷰
  - 모바일/데스크탑 비율
  - 국가/언어 분포

---

## 7. 웹 특화 TDD

- 컴포넌트 접근성:
  - Nav: 키보드로 탭 이동 가능한지
  - 버튼/링크에 aria-label 필요 시 추가
- 브라우저/플랫폼:
  - Chrome/Firefox/Safari 데스크탑
  - iOS Safari / Android Chrome
- 시각 요소:
  - 글래스모피즘 카드가 라이트/다크 모드에서 모두 텍스트 가독성 유지되는지 확인.

---

## 8. CI/CD

- GitHub Actions:

  1. pnpm install
  2. lint
  3. type-check
  4. test (unit/component)
  5. build
  6. `out/` → GitHub Pages 배포

- main 브랜치 푸시 시 자동 배포.

````
