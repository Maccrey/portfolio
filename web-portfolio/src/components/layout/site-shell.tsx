"use client";

import { usePathname } from "next/navigation";
import { getLocaleFromPath } from "@/lib/localized-route";
import { AppProviders } from "@/providers";
import { Header } from "./header";
import { Footer } from "./footer";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "/";
  const routeLocale = getLocaleFromPath(pathname);
  const initialLocale = routeLocale ?? "ko";

  return (
    <AppProviders key={initialLocale} initialLocale={initialLocale}>
      <Header />
      <main className="mx-auto mt-10 max-w-6xl px-6 relative z-10">{children}</main>
      <Footer />
    </AppProviders>
  );
}
