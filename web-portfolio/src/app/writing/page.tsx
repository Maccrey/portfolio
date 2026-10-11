import { BlogSection } from "@/components/home/blog-section";
import { TISTORY_CATEGORY } from "@/lib/tistory";

export default function WritingPage() {
  return (
    <div className="space-y-8 pb-12">
      <header className="glass-panel rounded-3xl px-7 py-10 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-primary)]">BUILD LOG · TISTORY</p>
        <h1 className="mt-3 text-3xl font-bold text-[var(--text-primary)] md:text-5xl">개발 과정과 문제 해결 기록</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--text-secondary)]">완성된 결과뿐 아니라 만들면서 마주친 질문, 선택의 이유, 시행착오와 배운 점을 씁니다. 아래 글은 지정한 개발 도전기 카테고리만 가져옵니다.</p>
        <p className="mt-5 inline-flex rounded-full border border-[var(--glass-border)] px-4 py-2 text-sm text-[var(--text-primary)]">{TISTORY_CATEGORY}</p>
      </header>
      <BlogSection initialPosts={[]} limit={40} />
    </div>
  );
}
