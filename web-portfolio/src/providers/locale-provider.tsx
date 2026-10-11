"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CopyDictionary, Locale, dictionaries, locales } from "@/i18n/locales";

type LocaleContextValue = {
  locale: Locale;
  dictionary: CopyDictionary;
  setLocale: (locale: Locale) => void;
  availableLocales: Locale[];
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

const storageKey = "maccrey-locale";

export function LocaleProvider({ children, initialLocale }: { children: React.ReactNode; initialLocale?: Locale }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (initialLocale) return initialLocale;
    if (typeof window === "undefined") return "ko";
    const stored = window.localStorage.getItem(storageKey) as Locale | null;
    return stored && locales.includes(stored) ? stored : "ko";
  });

  const changeLocale = (nextLocale: Locale) => {
    window.localStorage.setItem(storageKey, nextLocale);
    setLocale(nextLocale);
  };

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(storageKey, locale);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      dictionary: dictionaries[locale],
      setLocale: changeLocale,
      availableLocales: locales,
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
