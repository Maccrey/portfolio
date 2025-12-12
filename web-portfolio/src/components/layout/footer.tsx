"use client";

import { siteMeta } from "@/data/site";
import { useLocale } from "@/providers/locale-provider";

export function Footer() {
  const { dictionary } = useLocale();

  return (
    <footer className="mt-20 border-t border-[var(--glass-border)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-8 text-center text-sm text-[var(--text-secondary)]">
        <p>{dictionary.footer}</p>
        <p className="text-[var(--text-muted)]">
          © {new Date().getFullYear()} {siteMeta.name}
        </p>
        <p className="text-[var(--text-muted)]">
          E-Mail : maccrey@naver.com
        </p>
      </div>
    </footer>
  );
}
