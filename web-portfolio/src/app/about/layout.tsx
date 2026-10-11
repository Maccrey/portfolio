import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "개발자 소개와 KINORA 개발기",
  description: "50세에 개발을 시작한 Maccrey의 제품 개발 방식과 Flutter·Firebase 기반 가족 돌봄 서비스 KINORA의 개발 목표, 출시 알림을 확인하세요.",
  path: "/about",
});

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
