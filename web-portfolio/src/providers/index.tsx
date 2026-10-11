"use client";

import { LocaleProvider } from "./locale-provider";
import { ThemeProvider } from "./theme-provider";
import type { Locale } from "@/i18n/locales";

export function AppProviders({ children, initialLocale }: { children: React.ReactNode; initialLocale?: Locale }) {
  return (
    <ThemeProvider>
      <LocaleProvider initialLocale={initialLocale}>{children}</LocaleProvider>
    </ThemeProvider>
  );
}
