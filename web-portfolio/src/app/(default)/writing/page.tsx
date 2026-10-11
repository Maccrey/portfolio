"use client";

import { BlogSection } from "@/components/home/blog-section";
import { TISTORY_CATEGORY } from "@/lib/tistory";
import { useLocale } from "@/providers/locale-provider";

export default function WritingPage() {
  const { dictionary } = useLocale();
  const page = dictionary.writingPage;
  return (
    <div className="space-y-8 pb-12">
      <header className="glass-panel rounded-3xl px-7 py-10 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-primary)]">{page.badge}</p>
        <h1 className="mt-3 text-3xl font-bold text-[var(--text-primary)] md:text-5xl">{page.title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--text-secondary)]">{page.description}</p>
        <p className="mt-5 inline-flex rounded-full border border-[var(--glass-border)] px-4 py-2 text-sm text-[var(--text-primary)]">{TISTORY_CATEGORY}</p>
      </header>
      <BlogSection initialPosts={[]} limit={40} />
    </div>
  );
}
