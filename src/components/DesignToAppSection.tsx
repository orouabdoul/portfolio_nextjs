"use client";

import { FadeIn, FadeUp } from "@/components/ui/motion";
import { useLanguage } from "@/components/LanguageProvider";
import PortfolioScreen from "@/components/visuals/PortfolioScreen";

const screens = [
  { name: "fastgrab-home", step: "01", label: { fr: "Découvrir", en: "Discover" } },
  { name: "fastgrab-restaurant", step: "02", label: { fr: "Choisir", en: "Choose" } },
  { name: "fastgrab-item", step: "03", label: { fr: "Composer", en: "Customize" } },
  { name: "fastgrab-checkout", step: "04", label: { fr: "Commander", en: "Checkout" } },
] as const;

export default function DesignToAppSection() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <section id="figma-au-produit" className="relative w-full overflow-hidden bg-gray-900 px-5 py-16 sm:px-8 md:py-20 lg:px-20 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/7 blur-[100px]" />
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 relative">
        <FadeUp>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-blue-400" />
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-blue-400">
                {isEnglish ? "From Figma to product" : "De Figma au produit"}
              </span>
              <div className="h-px w-8 bg-blue-400" />
            </div>
            <h2 className="max-w-[850px] font-['Sora'] text-3xl font-bold leading-[1.1] tracking-[-0.5px] text-slate-100 sm:text-5xl lg:text-[60px]">
              {isEnglish
                ? "A mobile journey that guides every decision"
                : "Un parcours mobile qui guide chaque décision"}
            </h2>
            <p className="max-w-[700px] font-['Manrope'] text-sm leading-7 text-gray-400 sm:text-base">
              {isEnglish
                ? "A guided food-ordering journey, from discovering a restaurant to reviewing the order."
                : "Un parcours de commande guidé, de la découverte d’un restaurant à la vérification de la commande."}
            </p>
          </div>
        </FadeUp>

        <FadeIn delay={0.15}>
          <div>
            <div className="mb-6 flex flex-col gap-3 border-b border-gray-800 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.18em] text-indigo-300">
                  FastGrab
                </p>
                <h3 className="mt-1 font-['Sora'] text-lg font-semibold text-slate-100">
                  {isEnglish ? "A clear ordering flow" : "Un parcours de commande clair"}
                </h3>
              </div>
              <span className="w-fit rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1.5 font-['JetBrains_Mono'] text-[9px] uppercase tracking-wide text-blue-200">
                {isEnglish ? "Screens provided for portfolio showcase" : "Écrans fournis pour le portfolio"}
              </span>
            </div>

            <p className="mb-3 font-['Manrope'] text-xs text-gray-500 sm:hidden">
              {isEnglish ? "Swipe to see the full flow →" : "Faites défiler pour voir tout le parcours →"}
            </p>

            <div className="-mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-3 sm:gap-5 lg:grid lg:grid-cols-4 lg:overflow-visible">
              {screens.map(({ name, step, label }) => (
                <article
                  key={name}
                  className="flex w-[220px] shrink-0 snap-center flex-col items-center p-3 sm:p-4 lg:w-auto"
                >
                  <div className="mb-3 flex w-full items-center gap-2">
                    <span className="font-['JetBrains_Mono'] text-[10px] text-blue-300">
                      {step}
                    </span>
                    <span className="truncate font-['Sora'] text-xs font-semibold text-slate-100 sm:text-sm">
                      {label[language]}
                    </span>
                  </div>
                  <PortfolioScreen
                    name={name}
                    alt={`${label[language]} — FastGrab`}
                    sizes="(max-width: 1023px) 190px, 20vw"
                    className="w-full max-w-[200px] drop-shadow-xl"
                  />
                </article>
              ))}
            </div>

            <p className="mt-5 text-center font-['Manrope'] text-xs leading-5 text-gray-500">
              {isEnglish
                ? "Portfolio presentation of the supplied screens; this does not imply the app has been released."
                : "Présentation des écrans fournis ; cela ne signifie pas que l’application a été publiée."}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
