"use client";

import { siteMeta } from "@/data/site";
import { useLocale } from "@/providers/locale-provider";

export function Footer() {
  const { dictionary } = useLocale();

  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-8 text-center text-sm text-white/60">
        <p>{dictionary.footer}</p>
        <p className="text-white/40">
          © {new Date().getFullYear()} {siteMeta.name}
        </p>
      </div>
    </footer>
  );
}
