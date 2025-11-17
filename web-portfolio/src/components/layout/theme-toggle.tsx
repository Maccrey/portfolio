"use client";

import { useTheme } from "@/providers/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-full border border-white/20 px-3 py-1 text-sm font-medium text-white transition hover:border-white/60"
    >
      {theme === "dark" ? "Dark" : "Light"}
    </button>
  );
}
