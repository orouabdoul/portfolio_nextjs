"use client";

import { FadeUp } from "@/components/ui/motion";
import { useLanguage } from "@/components/LanguageProvider";

const steps = [
  {
    number: "01",
    title: { fr: "Cadrer", en: "Define" },
    description: {
      fr: "Clarifier le besoin, les utilisateurs, les contraintes et la priorité du produit.",
      en: "Clarify the need, users, constraints, and product priorities.",
    },
    output: { fr: "Périmètre & priorités", en: "Scope & priorities" },
  },
  {
    number: "02",
    title: { fr: "Concevoir", en: "Design" },
    description: {
      fr: "Structurer les parcours et valider les écrans clés avant le développement.",
      en: "Shape user flows and validate key screens before development.",
    },
    output: { fr: "Parcours & prototype", en: "Flows & prototype" },
  },
  {
    number: "03",
    title: { fr: "Développer", en: "Build" },
    description: {
      fr: "Construire l’application et ses intégrations, puis vérifier les usages essentiels.",
      en: "Build the application and integrations, then verify the essential flows.",
    },
    output: { fr: "Version testable", en: "Testable release" },
  },
  {
    number: "04",
    title: { fr: "Livrer", en: "Deliver" },
    description: {
      fr: "Préparer la mise en ligne ou la transmission du produit et de ses éléments utiles.",
      en: "Prepare the product for launch or handoff with the documentation it needs.",
    },
    output: { fr: "Livraison & suite", en: "Handoff & next steps" },
  },
] as const;

export default function MethodSection() {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "fr";

  return (
    <section
      id="processus"
      className="w-full bg-slate-100 px-5 py-16 sm:px-8 md:py-20 lg:px-20 lg:py-24"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 sm:gap-12">
        <FadeUp visibleBeforeInView>
          <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-blue-500">
            {locale === "en" ? "04 — How I work" : "04 — Ma méthode"}
          </p>
          <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-2xl font-['Sora'] text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              {locale === "en"
                ? "From a clear need to a usable product."
                : "D’un besoin clair à un produit utilisable."}
            </h2>
            <p className="max-w-md font-['Manrope'] text-sm leading-6 text-gray-600 sm:text-base">
              {locale === "en"
                ? "Each phase has a purpose and a concrete output to keep decisions visible."
                : "Chaque étape a un objectif et un livrable concret pour garder les décisions visibles."}
            </p>
          </div>
        </FadeUp>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <FadeUp
              visibleBeforeInView
              key={step.number}
              className="flex min-h-[220px] flex-col rounded-2xl border border-gray-200 bg-white p-5 sm:p-6"
            >
              <span className="font-['JetBrains_Mono'] text-xs tracking-widest text-blue-500">
                {step.number}
              </span>
              <h3 className="mt-6 font-['Sora'] text-xl font-semibold text-gray-950">
                {step.title[locale]}
              </h3>
              <p className="mt-2 flex-1 font-['Manrope'] text-sm leading-6 text-gray-600">
                {step.description[locale]}
              </p>
              <p className="mt-5 border-t border-gray-200 pt-4 font-['JetBrains_Mono'] text-[10px] uppercase tracking-wide text-blue-600">
                {step.output[locale]}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
