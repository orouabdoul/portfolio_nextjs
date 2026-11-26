"use client";

import { FadeUp } from "@/components/ui/motion";
import { useLanguage } from "@/components/LanguageProvider";

const stackGroups = [
  {
    title: { fr: "Mobile", en: "Mobile" },
    tools: ["Flutter", "GetX", "Dart", "React Native", "Expo"],
  },
  {
    title: { fr: "Backend & web", en: "Backend & web" },
    tools: ["Laravel", "PHP", "Vue 3", "Inertia", "Tailwind CSS"],
  },
  {
    title: { fr: "Design produit", en: "Product design" },
    tools: ["Figma"],
  },
  {
    title: { fr: "Données & services", en: "Data & services" },
    tools: ["Firebase", "Supabase", "MySQL"],
  },
  {
    title: { fr: "Collaboration", en: "Collaboration" },
    tools: ["Git", "GitHub"],
  },
  {
    title: { fr: "Outils IA", en: "AI Tools" },
    tools: [
      "Claude",
      "GitHub Copilot",
      "Cursor",
      "Bolt.new",
      "Figma AI",
      "v0",
      "Midjourney",
      "ChatGPT",
      "Gemini",
      "Perplexity",
    ],
  },
];

export default function TechStackSection() {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "fr";

  return (
    <section
      id="stack"
      className="relative w-full overflow-hidden border-t border-line bg-bg px-5 py-16 sm:px-8 md:py-20 lg:px-20 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-20 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-blue-600/8 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-600/6 blur-[80px]" />
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 sm:gap-10 relative">
        <FadeUp visibleBeforeInView>
          <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-accent-hi">
            {locale === "en" ? "04 — Tools" : "04 — Outils"}
          </p>
          <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-['Sora'] text-3xl font-bold leading-tight tracking-tight text-fg sm:text-4xl lg:text-5xl">
              {locale === "en"
                ? "Tools selected for the work."
                : "Des outils choisis selon le besoin."}
            </h2>
            <p className="max-w-md font-['Manrope'] text-base leading-7 text-muted">
              {locale === "en"
                ? "A selection of technologies and tools I work with—not a fixed recipe for every product."
                : "Une sélection des technologies et outils que j’utilise, pas une recette imposée à chaque produit."}
            </p>
          </div>
        </FadeUp>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((group, index) => (
            <FadeUp
              visibleBeforeInView
              key={group.title.fr}
              className="rounded-2xl border border-line bg-bg/70 p-5 sm:p-6"
            >
              <span className="font-['JetBrains_Mono'] text-xs tracking-widest text-accent-hi">
                0{index + 1}
              </span>
              <h3 className="mt-4 font-['Sora'] text-base font-semibold text-fg">
                {group.title[locale]}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-line-strong px-3 py-1.5 font-['Manrope'] text-xs text-fg-soft"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
