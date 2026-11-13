"use client";

import { FadeUp } from "@/components/ui/motion";
import { useLanguage } from "@/components/LanguageProvider";

const services = [
  {
    number: "01",
    title: { fr: "Applications mobiles", en: "Mobile applications" },
    description: {
      fr: "Concevoir et développer des applications iOS et Android adaptées à un besoin précis.",
      en: "Design and build iOS and Android applications around a clear user need.",
    },
    deliverables: {
      fr: ["Parcours et fonctionnalités", "Interface mobile", "Développement multiplateforme"],
      en: ["User flows and features", "Mobile interface", "Cross-platform development"],
    },
  },
  {
    number: "02",
    title: { fr: "UX/UI & Product Design", en: "UX/UI & Product Design" },
    description: {
      fr: "Rendre une idée compréhensible et testable avant d’engager le développement.",
      en: "Make an idea understandable and testable before development begins.",
    },
    deliverables: {
      fr: ["Architecture de l’information", "Wireframes et prototypes", "Système d’interface"],
      en: ["Information architecture", "Wireframes and prototypes", "Interface system"],
    },
  },
  {
    number: "03",
    title: { fr: "Services & intégrations", en: "Services & integrations" },
    description: {
      fr: "Connecter l’application aux données et services dont le produit a réellement besoin.",
      en: "Connect the application to the data and services the product actually needs.",
    },
    deliverables: {
      fr: ["Connexion aux API", "Authentification et données", "Intégrations adaptées au produit"],
      en: ["API connections", "Authentication and data", "Product-fit integrations"],
    },
  },
] as const;

export default function ExpertisesSection() {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "fr";

  return (
    <section
      id="expertises"
      className="w-full bg-white px-5 py-16 sm:px-8 md:py-20 lg:px-20 lg:py-24"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 sm:gap-12">
        <FadeUp visibleBeforeInView>
          <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-blue-500">
            {locale === "en" ? "03 — Expertise" : "03 — Expertises"}
          </p>
          <h2 className="mt-5 max-w-3xl font-['Sora'] text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            {locale === "en"
              ? "What I can help you build."
              : "Ce que je peux construire avec vous."}
          </h2>
        </FadeUp>

        <div className="grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <FadeUp
              visibleBeforeInView
              key={service.number}
              className="flex h-full flex-col rounded-2xl border border-gray-200 bg-slate-50 p-6 sm:p-7"
            >
              <span className="font-['JetBrains_Mono'] text-xs tracking-widest text-blue-500">
                {service.number}
              </span>
              <h3 className="mt-5 font-['Sora'] text-xl font-semibold leading-7 text-gray-950">
                {service.title[locale]}
              </h3>
              <p className="mt-3 font-['Manrope'] text-sm leading-6 text-gray-600">
                {service.description[locale]}
              </p>
              <ul className="mt-6 flex flex-col gap-3 border-t border-gray-200 pt-5">
                {service.deliverables[locale].map((deliverable) => (
                  <li
                    key={deliverable}
                    className="flex items-start gap-2 font-['Manrope'] text-sm leading-5 text-gray-700"
                  >
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-500" />
                    {deliverable}
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
