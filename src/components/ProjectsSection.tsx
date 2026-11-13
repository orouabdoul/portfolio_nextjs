"use client";

import Link from "next/link";
import { FadeUp } from "@/components/ui/motion";
import { useLanguage } from "@/components/LanguageProvider";
import PortfolioScreen from "@/components/visuals/PortfolioScreen";

const projects = [
  {
    slug: "fastgrab",
    name: "FastGrab",
    type: { fr: "Livraison · concept UI", en: "Food delivery · UI concept" },
    summary: {
      fr: "Un parcours de commande mobile, de la découverte à la validation.",
      en: "A mobile ordering flow, from discovery through checkout.",
    },
    screens: [
      { name: "fastgrab-home", label: { fr: "Accueil", en: "Home" } },
      { name: "fastgrab-restaurant", label: { fr: "Restaurant", en: "Restaurant" } },
      { name: "fastgrab-item", label: { fr: "Article", en: "Item" } },
      { name: "fastgrab-checkout", label: { fr: "Commande", en: "Checkout" } },
    ],
  },
  {
    slug: "learning-shop",
    name: "Learning Shop",
    type: { fr: "Commerce mobile · concept UI", en: "Mobile commerce · UI concept" },
    summary: {
      fr: "Un parcours d’achat de chaussures, du catalogue à la confirmation.",
      en: "A shoe-shopping flow, from product discovery through confirmation.",
    },
    screens: [
      { name: "shoes-home", label: { fr: "Catalogue", en: "Catalog" } },
      { name: "shoes-product", label: { fr: "Produit", en: "Product" } },
      { name: "shoes-cart", label: { fr: "Panier", en: "Cart" } },
      { name: "shoes-confirmed", label: { fr: "Confirmation", en: "Confirmation" } },
    ],
  },
] as const;

export default function ProjectsSection() {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "fr";

  return (
    <section
      id="realisations"
      className="relative w-full overflow-hidden bg-gray-950 px-5 py-16 sm:px-8 md:py-20 lg:px-20 lg:py-24"
    >
      <div className="pointer-events-none absolute -right-20 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/7 blur-[120px]" />
      <div className="pointer-events-none absolute -left-10 bottom-20 h-[350px] w-[350px] rounded-full bg-indigo-600/6 blur-[90px]" />
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 sm:gap-12 relative">
        <FadeUp visibleBeforeInView>
          <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-blue-400">
            {locale === "en" ? "02 — Selected work" : "02 — Réalisations"}
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-10">
            <h2 className="max-w-3xl font-['Sora'] text-3xl font-bold leading-tight tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
              {locale === "en"
                ? "Real screens. Clear product journeys."
                : "Des écrans concrets, des parcours lisibles."}
            </h2>
            <p className="font-['Manrope'] text-sm leading-6 text-gray-400 sm:text-base">
              {locale === "en"
                ? "These supplied UI concepts are shown as concepts, not as released products."
                : "Les interfaces fournies sont présentées comme des concepts, pas comme des produits publiés."}
            </p>
          </div>
        </FadeUp>

        <div className="flex flex-col gap-5">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="grid gap-7 rounded-3xl border border-gray-800 bg-gray-900 p-5 sm:p-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-10 lg:p-9"
            >
              <FadeUp visibleBeforeInView className="flex flex-col items-start">
                <span className="font-['JetBrains_Mono'] text-xs tracking-widest text-blue-400">
                  0{index + 1} · {project.type[locale]}
                </span>
                <h3 className="mt-4 font-['Sora'] text-3xl font-bold leading-tight text-slate-100 sm:text-4xl">
                  {project.name}
                </h3>
                <p className="mt-3 max-w-md font-['Manrope'] text-sm leading-6 text-gray-300 sm:text-base">
                  {project.summary[locale]}
                </p>
                <Link
                  href={`/realisations/${project.slug}`}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-gray-700 px-5 font-['Sora'] text-sm font-semibold text-slate-100 transition-colors hover:border-blue-400 hover:bg-blue-500/10"
                >
                  {locale === "en" ? "Explore the screens" : "Explorer les écrans"}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </FadeUp>

              <div>
                <p className="mb-3 font-['Manrope'] text-xs text-gray-500 sm:hidden">
                  {locale === "en" ? "Swipe to view the screens →" : "Faites défiler pour voir les écrans →"}
                </p>
                <div className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 sm:mx-0 sm:grid sm:grid-cols-4 sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0">
                  {project.screens.map((screen) => (
                    <figure
                      key={screen.name}
                      className="w-[150px] shrink-0 snap-center sm:w-auto"
                    >
                      <PortfolioScreen
                        name={screen.name}
                        alt={`${project.name} — ${screen.label[locale]}`}
                        sizes="(max-width: 639px) 150px, (max-width: 1023px) 20vw, 15vw"
                        className="w-full"
                      />
                      <figcaption className="mt-2 text-center font-['Manrope'] text-[10px] text-gray-400">
                        {screen.label[locale]}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
