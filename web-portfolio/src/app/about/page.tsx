import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="space-y-8 pb-12">
      <header className="glass-panel rounded-3xl px-7 py-10 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-primary)]">ABOUT MACCREY</p>
        <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-[var(--text-primary)] md:text-5xl">문제를 발견하고 끝까지 제품으로 만드는 개발자</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--text-secondary)]">50세에 개발을 시작한 뒤 아이디어를 실제 사용 가능한 서비스로 연결해왔습니다. 기획부터 구현, 출시, 운영 중의 개선까지 직접 경험하며 배운 점을 기록합니다.</p>
      </header>
      <section className="grid gap-5 md:grid-cols-2">
        <article className="glass-card rounded-3xl p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)]">HOW I WORK</p>
          <h2 className="mt-3 text-xl font-semibold text-[var(--text-primary)]">기술보다 먼저, 사용자의 문제를 구체적으로 봅니다</h2>
          <p className="mt-3 leading-7 text-[var(--text-secondary)]">요구사항을 작은 흐름으로 나누고, 동작하는 제품을 빠르게 만들며, 출시 후 실제 사용에서 발견한 문제를 다시 다룹니다. 접근성·개인정보·운영 가능성도 초기 설계에 포함합니다.</p>
        </article>
        <article className="glass-card rounded-3xl p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)]">WHAT I BRING</p>
          <h2 className="mt-3 text-xl font-semibold text-[var(--text-primary)]">제품을 끝까지 책임지는 실행력</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--text-secondary)]">
            <li><strong className="text-[var(--text-primary)]">모바일:</strong> Flutter 앱과 Firebase 연동, 인증·데이터 흐름</li>
            <li><strong className="text-[var(--text-primary)]">웹:</strong> 제품형 웹앱, 다국어 사이트, 정적 배포와 SEO</li>
            <li><strong className="text-[var(--text-primary)]">문제 해결:</strong> 막힌 이유와 검증 방법을 기록하고 재발을 줄이는 방식</li>
            <li><strong className="text-[var(--text-primary)]">협업:</strong> 불확실한 요구를 작은 결정과 확인 가능한 결과로 전환</li>
          </ul>
        </article>
      </section>
      <section className="space-y-6" aria-labelledby="kinora-heading">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)]">CURRENT BUILD · FLUTTER · FIREBASE · AI</p>
          <h2 id="kinora-heading" className="mt-3 text-3xl font-bold text-[var(--text-primary)]">KINORA — 대화에서 시작하는 가족 돌봄</h2>
          <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">KINORA는 어르신이 AI 캐릭터와 자연스럽게 대화하며 식사, 수분 섭취, 복약, 수면, 통증, 기분 같은 일상을 돌아보고, 가족은 필요한 생활 변화와 안부를 확인하도록 돕는 서비스입니다. 감시를 늘리는 대신, 어르신의 자율성과 가족의 안심이 함께 지켜지는 경험을 만들고 있습니다.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="glass-card rounded-2xl p-6"><p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent-primary)]">01 · SENIOR APP</p><h3 className="mt-3 text-lg font-semibold text-[var(--text-primary)]">매일 쓰고 싶은 대화</h3><p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">캐릭터와의 대화를 통해 생활 상태를 부담 없이 표현하고, 이전 대화 맥락을 이어갈 수 있도록 설계합니다.</p></article>
          <article className="glass-card rounded-2xl p-6"><p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent-primary)]">02 · FAMILY</p><h3 className="mt-3 text-lg font-semibold text-[var(--text-primary)]">필요한 변화만 전달</h3><p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">가족에게 모든 대화를 공개하지 않고, 동의와 관계 범위 안에서 안부 확인에 필요한 요약을 전달하는 흐름을 고민합니다.</p></article>
          <article className="glass-card rounded-2xl p-6"><p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent-primary)]">03 · ENGINEERING</p><h3 className="mt-3 text-lg font-semibold text-[var(--text-primary)]">제품과 안전을 함께 설계</h3><p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">Flutter·Firebase 제품 구현과 함께 대화 기억, 데이터 최소화, 동의, 알림의 정확성과 실패 상황을 계속 검토합니다.</p></article>
        </div>
        <div className="glass-panel flex flex-col justify-between gap-5 rounded-3xl p-7 md:flex-row md:items-center md:p-9">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)]">IN DEVELOPMENT</p><h3 className="mt-2 text-xl font-semibold text-[var(--text-primary)]">KINORA의 출시 소식을 가장 먼저 받아보세요</h3><p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">제품 소개와 출시 알림 등록은 KINORA 공식 페이지에서 확인할 수 있습니다.</p></div>
          <a href="https://www.kinora.date/" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center rounded-full bg-[var(--text-primary)] px-6 py-3.5 text-sm font-semibold text-[var(--text-inverse)]">KINORA 출시 알림 등록 ↗</a>
        </div>
      </section>
      <section className="glass-panel rounded-3xl p-7 md:p-9">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-primary)]">RECENT LAUNCH · 2026</p>
            <h2 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">maccrey.com — 모두의 박물관</h2>
            <p className="mt-3 leading-7 text-[var(--text-secondary)]">3D 마을을 걸으며 블록체인, 금융, 성수 등 여러 주제의 디지털 박물관을 둘러보는 공개 웹 프로젝트입니다. 지식 콘텐츠를 전시처럼 발견하고 탐험하는 경험으로 바꾸는 데 집중했습니다.</p>
          </div>
          <a href="https://maccrey.com" target="_blank" rel="noreferrer" className="rounded-full bg-[var(--text-primary)] px-5 py-3 text-sm font-semibold text-[var(--text-inverse)]">박물관 둘러보기 ↗</a>
        </div>
      </section>
      <div className="flex flex-wrap gap-3">
        <Link href="/projects" className="rounded-full border border-[var(--glass-border)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)]">프로젝트 사례 보기 →</Link>
        <Link href="/contact" className="rounded-full border border-[var(--glass-border)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)]">채용·개발 의뢰 문의 →</Link>
      </div>
    </div>
  );
}
