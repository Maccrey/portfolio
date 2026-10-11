import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "프로젝트 사례",
  description: "Flutter 앱과 웹 제품을 기획하고 개발해 출시한 프로젝트 사례, 해결한 문제와 기술적 기여를 확인하세요.",
  path: "/projects",
});

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
