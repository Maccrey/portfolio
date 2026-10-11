import HomePageClient from "./page-client";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Flutter · 웹 제품 개발자 Maccrey 포트폴리오",
  description: "아이디어를 제품으로 만드는 개발자 Maccrey의 프로젝트, 기술 역량, KINORA 개발 이야기와 채용·협업 문의를 확인하세요.",
  path: "/",
});

export default function Page() {
  return <HomePageClient />;
}
