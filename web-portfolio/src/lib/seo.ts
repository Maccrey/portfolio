import type { Metadata } from "next";

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Maccrey Portfolio",
      locale: "ko_KR",
      type: "website",
    },
    twitter: { card: "summary", title, description },
    robots: { index: true, follow: true },
  };
}
