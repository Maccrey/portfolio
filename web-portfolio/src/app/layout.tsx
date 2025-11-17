import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AppProviders } from "@/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maccrey Dev Portfolio",
  description: "50세에 개발을 시작한 Maccrey의 소셜 임팩트 중심 포트폴리오",
  openGraph: {
    title: "Maccrey Dev Portfolio",
    description: "사람들의 삶을 더 나은 방향으로 바꾸는 프로젝트와 스킬을 소개합니다.",
    url: "https://maccrey.dev",
    siteName: "Maccrey Dev Portfolio",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen antialiased">
        <AppProviders>
          <Header />
          <main className="mx-auto mt-10 max-w-6xl px-6">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
