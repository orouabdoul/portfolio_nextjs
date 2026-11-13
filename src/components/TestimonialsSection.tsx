"use client";

function ProofCard({
  number,
  title,
  text,
  tag,
}: {
  number: string;
  title: string;
  text: string;
  tag: string;
}) {
  return (
    <div className="h-56 p-7 relative bg-gray-950 rounded-3xl border border-gray-800 flex flex-col gap-5">
      <div className="flex items-center justify-between gap-4">
        <div className="w-12 h-12 bg-blue-500/10 rounded-full border border-blue-500/30 flex items-center justify-center shrink-0">
          <span className="text-blue-400 text-xs font-['JetBrains_Mono']">{number}</span>
        </div>
        <span className="px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/30 text-blue-400 text-[10px] font-['JetBrains_Mono'] leading-4 tracking-tight">
          {tag}
        </span>
      </div>

      <div className="flex flex-col gap-2.5">
        <h3 className="text-slate-100 text-xl font-bold font-['Sora'] leading-6">{title}</h3>
        <p className="text-gray-400 text-sm font-['Manrope'] leading-6">{text}</p>
      </div>
    </div>
  );
}

import { FadeUp, SlideIn } from "@/components/ui/motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  return (
    <section className="relative w-full overflow-hidden bg-gray-900 px-5 py-16 sm:px-8 md:py-20 lg:px-20 lg:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-600/8 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-10 left-1/4 h-[300px] w-[300px] rounded-full bg-indigo-500/6 blur-[80px]" />
      <div className="max-w-[1280px] mx-auto flex flex-col gap-6 relative">

        <FadeUp visibleBeforeInView>
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-blue-400" />
          <span className="text-blue-400 text-xs font-['JetBrains_Mono'] uppercase tracking-widest leading-4">
            {isEnglish ? "05 — What I bring" : "05 — Ce que j'apporte"}
          </span>
        </div>
        <h2 className="text-slate-100 text-4xl font-bold font-['Sora'] leading-[1.1] tracking-[-0.5px] sm:text-5xl lg:text-[60px]">
          {isEnglish ? "Clear collaboration," : "Une collaboration claire,"}
          <br />{isEnglish ? "focused on outcomes." : "orientée résultat."}
        </h2>
        </FadeUp>

        <div className="mt-8 flex flex-col gap-5 items-stretch lg:mt-10 lg:flex-row lg:items-start">
          <SlideIn visibleBeforeInView from="left" delay={0.1} className="min-h-[360px] flex-1 relative bg-gray-950/40 rounded-3xl border-2 border-blue-500/60 overflow-hidden sm:min-h-[400px] lg:h-[480px]">
            <span className="absolute left-6 top-4 text-blue-500 text-[140px] font-bold font-['Sora'] leading-[140px] select-none sm:left-10 sm:top-6 sm:text-[180px] lg:left-[50px] lg:top-[30px] lg:text-[220px] lg:leading-[176px]">
              &ldquo;
            </span>

            <h3 className="absolute left-6 top-[155px] right-5 text-slate-100 text-2xl font-bold font-['Sora'] leading-8 sm:left-10 sm:top-[190px] sm:text-3xl lg:left-[50px] lg:right-auto lg:top-[233px] lg:text-4xl lg:leading-10">
              {isEnglish ? "The goal isn't just" : "Le vrai objectif n'est pas"}
              <br />{isEnglish ? "to build a beautiful app." : "d'avoir une belle app."}
            </h3>

            <p className="absolute left-6 top-[245px] right-5 text-gray-400 text-sm font-['Manrope'] leading-6 sm:left-10 sm:top-[285px] sm:text-base lg:left-[50px] lg:right-auto lg:top-[335px]">
              {isEnglish
                ? "It's to solve a real need with a smooth experience and clear"
                : "C'est de résoudre un besoin réel, avec une expérience fluide et une"}
              {isEnglish ? "direction, from concept to product." : "direction claire, du concept au produit."}
            </p>

            <a
              href="#contact"
              className="absolute left-6 bottom-6 h-12 px-5 bg-blue-500 rounded-full flex items-center gap-2 cursor-pointer hover:bg-blue-400 transition-colors duration-200 sm:left-10 lg:left-[50px] lg:top-[400px] lg:bottom-auto lg:h-14 lg:px-7"
            >
              <span className="text-white text-base font-semibold font-['Sora'] leading-6 tracking-tight whitespace-nowrap">
                {isEnglish ? "Start your project" : "Démarrer votre projet"}
              </span>
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className="shrink-0">
                <path d="M1 5H11M7 1L11 5L7 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </SlideIn>

          <SlideIn visibleBeforeInView from="right" delay={0.2} className="w-full flex-1 flex flex-col gap-5 lg:w-auto">
            <ProofCard
              number="01"
              tag="Produit"
              title={isEnglish ? "Clear product direction" : "Direction produit claire"}
              text={isEnglish ? "I put user needs and business value first, so the result is useful—not just attractive." : "Je mets le besoin utilisateur et la valeur business au centre, pour éviter les produits beaux mais inutiles."}
            />
            <ProofCard
              number="02"
              tag="UX"
              title={isEnglish ? "Designed around real use" : "Expérience pensée pour l’usage"}
              text={isEnglish ? "Interfaces that guide, reassure, and simplify—without unnecessary friction." : "Les écrans sont pensés pour guider, rassurer et simplifier, sans friction inutile."}
            />
            <ProofCard
              number="03"
              tag="Livraison"
              title={isEnglish ? "From prototype to product" : "De la maquette au produit"}
              text={isEnglish ? "I cover the full journey: structure, design, prototyping, development, and launch refinements." : "Je couvre le chemin complet : structure, design, prototype, développement et ajustements de mise en production."}
            />
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
