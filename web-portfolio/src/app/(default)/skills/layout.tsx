import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "기술 역량",
  description: "Flutter, Firebase, 웹 제품 개발과 AI 연동 경험 및 현재 학습 중인 기술을 소개합니다.",
  path: "/skills",
});

export default function SkillsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
