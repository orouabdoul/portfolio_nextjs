"use client";

import { useLanguage } from "@/components/LanguageProvider";

const itemsByLocale = {
  fr: [
    "De l'idée au produit",
    "Du design au développement",
    "Un seul interlocuteur",
    "Pour tout le cycle",
    "Flutter · React Native",
    "Laravel · Vue 3",
    "Figma · Firebase · MySQL",
    "Mobile iOS & Android",
  ],
  en: [
    "From idea to product",
    "From design to code",
    "One single contact",
    "For the whole cycle",
    "Flutter · React Native",
    "Laravel · Vue 3",
    "Figma · Firebase · MySQL",
    "Mobile iOS & Android",
  ],
};

export default function MarqueeStrip() {
  const { language } = useLanguage();
  const items = itemsByLocale[language === "en" ? "en" : "fr"];
  const doubled = [...items, ...items];

  return (
    <div
      className="w-full overflow-hidden border-y border-blue-900/50 bg-blue-950 py-4"
      aria-hidden="true"
    >
      <div
        className="flex animate-marquee"
        style={{ width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-8 px-8 font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.14em] text-gray-400"
          >
            {item}
            <span className="text-blue-500 opacity-60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
