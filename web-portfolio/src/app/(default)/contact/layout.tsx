import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "채용 · 개발 의뢰 · 협업 문의",
  description: "Maccrey와 정규직 채용, Flutter·웹 제품 개발, 기술 협업을 논의해보세요. 이메일과 문의 방법을 안내합니다.",
  path: "/contact",
});

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
