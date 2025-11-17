"use client";

import { useLocale } from "@/providers/locale-provider";

export function LocaleSwitcher() {
  const { locale, availableLocales, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-2 text-sm text-white/80">
      {availableLocales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={`rounded-full px-2 py-1 transition ${
            locale === code
              ? "bg-white text-zinc-900"
              : "border border-white/20 text-white/70 hover:border-white/50"
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
