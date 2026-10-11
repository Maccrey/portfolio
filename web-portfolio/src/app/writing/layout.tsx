import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "개발 기록과 문제 해결 과정",
  description: "50 year old flutter developer challenge 카테고리에서 Flutter, Firebase, AI 제품을 만들며 겪은 고민과 해결 과정을 읽어보세요.",
  path: "/writing",
});

export default function WritingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
