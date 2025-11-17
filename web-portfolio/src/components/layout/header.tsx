"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/site";
import { useLocale } from "@/providers/locale-provider";
import { LocaleSwitcher } from "./locale-switcher";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  const pathname = usePathname();
  const { dictionary } = useLocale();

  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          Maccrey.dev
        </Link>
        <nav className="hidden gap-6 text-sm text-white/70 md:flex">
          {navigation.map((item) => {
            const key = item.labelKey.split(".")[1] as keyof typeof dictionary.nav;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-white ${
                  pathname === item.href ? "text-white" : "text-white/70"
                }`}
              >
                {dictionary.nav[key]}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
