"use client";

import { siteMeta } from "@/data/site";
import { useLocale } from "@/providers/locale-provider";

const contactItems = [
  {
    key: "email",
    href: `mailto:${siteMeta.contact.email}`,
    labelKey: "email",
  },
  {
    key: "github",
    href: siteMeta.contact.github,
    labelKey: "github",
  },
] as const;

export function ContactLinks() {
  const { dictionary } = useLocale();

  return (
    <section className="glass-card rounded-3xl px-8 py-8 text-[var(--text-primary)]">
      <p className="mb-6 text-lg text-[var(--text-secondary)] text-center max-w-2xl mx-auto">{dictionary.contact.description}</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {contactItems.map((item) => (
          <a
            key={item.key}
            href={item.href}
            target={item.key === "github" ? "_blank" : undefined}
            rel={item.key === "github" ? "noreferrer" : undefined}
            className="glass rounded-2xl px-6 py-4 text-center text-sm font-bold text-[var(--text-primary)] transition hover:bg-[var(--glass-highlight)] hover:scale-105 hover:shadow-lg"
          >
            {dictionary.contact[item.labelKey]}
          </a>
        ))}
      </div>
    </section>
  );
}
