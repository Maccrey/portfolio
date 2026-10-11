import type { Metadata } from "next";
import type { Locale } from "@/i18n/locales";
import { locales } from "@/i18n/locales";
import { getUnlocalizedPath } from "@/lib/localized-route";

const localeToOpenGraph: Record<Locale, string> = {
  ko: "ko_KR",
  en: "en_US",
  ja: "ja_JP",
  zh: "zh_TW",
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  locale = "ko",
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  locale?: Locale;
}): Metadata {
  const languagePath = getUnlocalizedPath(path);
  const languages = Object.fromEntries(
    locales.map((code) => [
      code,
      code === "ko" ? languagePath : languagePath === "/" ? `/${code}` : `/${code}${languagePath}`,
    ]),
  );
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path, languages },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Maccrey Portfolio",
      locale: localeToOpenGraph[locale],
      type: "website",
    },
    twitter: { card: "summary", title, description },
    robots: { index: true, follow: true },
  };
}
