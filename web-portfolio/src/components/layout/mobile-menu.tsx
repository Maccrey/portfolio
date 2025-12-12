"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/site";
import { useLocale } from "@/providers/locale-provider";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { dictionary } = useLocale();

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--glass-surface)] text-[var(--text-primary)] transition hover:bg-[var(--glass-highlight)]"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <div className="relative h-4 w-5">
          <span
            className={`absolute left-0 top-0 h-0.5 w-full bg-current transition-all duration-300 ${
              isOpen ? "top-1.5 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 top-1.5 h-0.5 w-full bg-current transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-3 h-0.5 w-full bg-current transition-all duration-300 ${
              isOpen ? "top-1.5 -rotate-45" : "top-3"
            }`}
          />
        </div>
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Panel */}
      <div
        className={`fixed right-0 top-0 z-40 h-full w-64 transform bg-[var(--page-bg)] p-6 shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="mt-20 flex flex-col gap-6">
          {navigation.map((item) => {
            const key = item.labelKey.split(".")[1] as keyof typeof dictionary.nav;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg transition hover:text-[var(--text-primary)] ${
                  isActive
                    ? "font-bold text-[var(--text-primary)]"
                    : "font-medium text-[var(--text-secondary)]"
                }`}
              >
                {dictionary.nav[key]}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
