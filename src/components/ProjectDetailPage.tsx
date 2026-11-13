"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import PortfolioScreen from "@/components/visuals/PortfolioScreen";

const caseStudies = {
  fastgrab: {
    name: "FastGrab",
    category: { fr: "Livraison · concept UI", en: "Food delivery · UI concept" },
    summary: {
      fr: "Un aperçu d’un parcours de commande mobile, de la découverte à la validation.",
      en: "A look at a mobile ordering flow, from discovery through checkout.",
    },
    screens: [
      { name: "fastgrab-home", label: { fr: "Accueil", en: "Home" } },
      { name: "fastgrab-restaurant", label: { fr: "Restaurant", en: "Restaurant" } },
      { name: "fastgrab-item", label: { fr: "Article", en: "Item" } },
      { name: "fastgrab-checkout", label: { fr: "Commande", en: "Checkout" } },
    ],
    decisions: [
      {
        title: { fr: "Une progression lisible", en: "A clear progression" },
        detail: {
          fr: "Séparer la découverte, le choix du restaurant et la commande.",
          en: "Separate discovery, restaurant selection, and checkout.",
        },
      },
      {
        title: { fr: "Le choix avant l’action", en: "Choice before action" },
        detail: {
          fr: "Montrer les informations utiles avant de confirmer l’étape suivante.",
          en: "Show useful information before the next step is confirmed.",
        },
      },
      {
        title: { fr: "Une validation compréhensible", en: "An understandable checkout" },
        detail: {
          fr: "Garder la commande au centre de l’écran de récapitulatif.",
          en: "Keep the order details central in the checkout summary.",
        },
      },
    ],
  },
  "learning-shop": {
    name: "Learning Shop",
    category: { fr: "Commerce mobile · concept UI", en: "Mobile commerce · UI concept" },
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
    decisions: [
      {
        title: { fr: "Parcourir le catalogue", en: "Browse the catalog" },
        detail: {
          fr: "Mettre en avant les produits et les points d’entrée de la boutique.",
          en: "Bring products and the store’s entry points forward.",
        },
      },
      {
        title: { fr: "Décider sur la fiche produit", en: "Decide on the product page" },
        detail: {
          fr: "Regrouper les informations nécessaires avant l’ajout au panier.",
          en: "Group the information needed before adding an item to the cart.",
        },
      },
      {
        title: { fr: "Suivre l’achat jusqu’au bout", en: "Follow the purchase through" },
        detail: {
          fr: "Rendre visibles le panier et l’état de confirmation.",
          en: "Make the cart and confirmation state easy to identify.",
        },
      },
    ],
  },
} as const;

type ProjectSlug = keyof typeof caseStudies;

export default function ProjectDetailPage({ slug }: { slug: ProjectSlug }) {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "fr";
  const project = caseStudies[slug];

  return (
    <main className="min-h-screen overflow-x-clip bg-gray-950">
      <div className="relative">
        <Navbar />
        <section className="px-5 pb-12 pt-32 sm:px-8 sm:pt-36 lg:px-20 lg:pb-16">
          <div className="mx-auto max-w-[1280px]">
            <Link
              href="/#realisations"
              className="inline-flex min-h-10 items-center gap-2 font-['Manrope'] text-sm text-gray-400 transition-colors hover:text-white"
            >
              <span aria-hidden="true">←</span>
              {locale === "en" ? "Back to selected work" : "Retour aux réalisations"}
            </Link>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
              <div>
                <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-blue-400">
                  {project.category[locale]}
                </p>
                <h1 className="mt-4 font-['Sora'] text-4xl font-bold leading-tight tracking-tight text-slate-100 sm:text-5xl lg:text-7xl">
                  {project.name}
                </h1>
                <p className="mt-5 max-w-2xl font-['Manrope'] text-base leading-7 text-gray-300 sm:text-lg">
                  {project.summary[locale]}
                </p>
              </div>

              <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5">
                  <dt className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-gray-500">
                    {locale === "en" ? "Status" : "Statut"}
                  </dt>
                  <dd className="mt-2 font-['Sora'] text-sm font-semibold text-slate-100">
                    {locale === "en" ? "UI concept · supplied screens" : "Concept UI · écrans fournis"}
                  </dd>
                </div>
                <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5">
                  <dt className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-gray-500">
                    {locale === "en" ? "What is shown" : "Contenu présenté"}
                  </dt>
                  <dd className="mt-2 font-['Sora'] text-sm font-semibold text-slate-100">
                    {locale === "en" ? "Four key screens" : "Quatre écrans clés"}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </div>

      <section
        id="project-screens"
        className="bg-gray-900 px-5 py-12 sm:px-8 sm:py-16 lg:px-20 lg:py-20"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-['Sora'] text-2xl font-bold text-slate-100 sm:text-3xl">
              {locale === "en" ? "The screens" : "Les écrans"}
            </h2>
            <p className="font-['Manrope'] text-xs text-gray-400">
              {locale === "en"
                ? "Swipe to view the full sequence on smaller screens."
                : "Faites défiler pour voir tout le parcours sur mobile."}
            </p>
          </div>

          <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 xl:grid-cols-4">
            {project.screens.map((screen) => (
              <figure key={screen.name} className="w-[190px] shrink-0 snap-center sm:w-auto">
                <PortfolioScreen
                  name={screen.name}
                  alt={`${project.name} — ${screen.label[locale]}`}
                  sizes="(max-width: 639px) 190px, (max-width: 1279px) 32vw, 22vw"
                  className="w-full"
                />
                <figcaption className="mt-3 text-center font-['Manrope'] text-sm text-gray-300">
                  {screen.label[locale]}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-5 py-12 sm:px-8 sm:py-16 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-blue-500">
            {locale === "en" ? "Flow notes" : "Lecture du parcours"}
          </p>
          <h2 className="mt-4 max-w-2xl font-['Sora'] text-3xl font-bold leading-tight text-gray-950 sm:text-4xl">
            {locale === "en" ? "What these screens are designed to clarify." : "Ce que ces écrans cherchent à clarifier."}
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {project.decisions.map((decision, index) => (
              <article key={decision.title.fr} className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
                <span className="font-['JetBrains_Mono'] text-xs tracking-widest text-blue-500">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-['Sora'] text-lg font-semibold text-gray-950">
                  {decision.title[locale]}
                </h3>
                <p className="mt-2 font-['Manrope'] text-sm leading-6 text-gray-600">
                  {decision.detail[locale]}
                </p>
              </article>
            ))}
          </div>

          <Link
            href="/#contact"
            className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-gray-950 px-5 font-['Sora'] text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            {locale === "en" ? "Discuss a project" : "Parler d’un projet"}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
