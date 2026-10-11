import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { AnalyticsScript } from "@/components/analytics/analytics-script";
import "../globals.css";

const siteUrl = "https://portfolio.maccrey.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Maccrey | Flutter · Web 제품 개발자",
    template: "%s | Maccrey",
  },
  description: "Flutter와 웹 제품을 기획부터 개발, 출시까지 만드는 Maccrey의 포트폴리오. 프로젝트 사례와 개발 과정, 채용 및 협업 문의를 확인하세요.",
  openGraph: {
    title: "Maccrey | Flutter · Web 제품 개발자",
    description: "Flutter와 웹 제품을 기획부터 개발, 출시까지 만드는 Maccrey의 포트폴리오.",
    url: siteUrl,
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
    <html lang="ko" suppressHydrationWarning>
      <body className="min-h-screen antialiased relative">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <AnalyticsScript />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
