"use client";

import { ContactLinks } from "@/components/contact/contact-links";
import { siteMeta } from "@/data/site";
import { useLocale } from "@/providers/locale-provider";

export default function ContactPage() {
  const { dictionary } = useLocale();

  return (
    <div className="space-y-6 text-[var(--text-primary)]">
      <div className="glass-panel rounded-3xl px-8 py-10">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">
          {dictionary.pages.contact.badge}
        </p>
        <h1 className="mt-2 text-4xl font-semibold">{dictionary.sections.contact}</h1>
        <p className="mt-3 text-[var(--text-secondary)]">{dictionary.contact.description}</p>
      </div>
      <ContactLinks />
      <div className="rounded-3xl border border-[var(--glass-border)] px-6 py-4 text-sm text-[var(--text-secondary)]">
        <p>
          {dictionary.contact.directEmail}: {siteMeta.contact.email}
        </p>
      </div>
    </div>
  );
}
