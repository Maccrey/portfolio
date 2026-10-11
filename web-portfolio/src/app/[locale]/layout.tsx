import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/site-shell";
import { AnalyticsScript } from "@/components/analytics/analytics-script";
import { locales, type Locale } from "@/i18n/locales";
import "../globals.css";

const siteUrl = "https://portfolio.maccrey.com";
const localizedLocales: Locale[] = locales.filter((locale): boolean => locale !== "ko");

export function generateStaticParams() {
  return localizedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!localizedLocales.includes(locale as Locale)) return {};
  return {
    metadataBase: new URL(siteUrl),
    title: { default: "Maccrey | Flutter & Web Product Developer", template: "%s | Maccrey" },
    description: "Maccrey's product development portfolio.",
    openGraph: { siteName: "Maccrey Dev Portfolio", type: "website" },
  };
}

export default async function LocaleRootLayout({ children, params }: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;
  if (!localizedLocales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen antialiased relative">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <AnalyticsScript />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
