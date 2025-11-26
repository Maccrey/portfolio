"use client";

import { useLocale } from "@/providers/locale-provider";

export function LocaleSwitcher() {
  const { locale, availableLocales, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
      {availableLocales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={`rounded-full px-2 py-1 transition ${
            locale === code
              ? "bg-[var(--text-primary)] text-[var(--text-inverse)] shadow-sm"
              : "border border-[var(--glass-border)] text-[var(--text-secondary)] hover:border-[var(--text-muted)]"
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
