import type { Locale } from "@/i18n/locales";
import { locales } from "@/i18n/locales";

export function getLocaleFromPath(pathname: string): Locale | undefined {
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  return locales.includes(firstSegment as Locale) ? (firstSegment as Locale) : undefined;
}

export function getUnlocalizedPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length && locales.includes(segments[0] as Locale)) {
    segments.shift();
  }
  return segments.length ? `/${segments.join("/")}` : "/";
}

export function localizedPath(locale: Locale, pathname: string): string {
  const path = getUnlocalizedPath(pathname);
  if (locale === "ko") return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}
