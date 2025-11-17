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
  {
    key: "form",
    href: siteMeta.contact.form,
    labelKey: "form",
  },
] as const;

export function ContactLinks() {
  const { dictionary } = useLocale();

  return (
    <section className="glass-panel rounded-3xl px-6 py-6 text-white">
      <p className="mb-4 text-white/70">{dictionary.contact.description}</p>
      <div className="grid gap-3 sm:grid-cols-3">
        {contactItems.map((item) => (
          <a
            key={item.key}
            href={item.href}
            target={item.key === "github" ? "_blank" : undefined}
            rel={item.key === "github" ? "noreferrer" : undefined}
            className="rounded-2xl border border-white/10 px-4 py-3 text-center text-sm font-semibold text-white transition hover:border-white/60"
          >
            {dictionary.contact[item.labelKey]}
          </a>
        ))}
      </div>
    </section>
  );
}
