"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const ease = [0.22, 1, 0.36, 1] as const;

function FadeInView({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const stepAccents = [
  {
    dot: "border-line-strong bg-surface-2/60 text-muted",
    output: "text-subtle",
    line: "bg-surface-2/50",
  },
  {
    dot: "border-line-strong bg-surface-2/60 text-muted",
    output: "text-subtle",
    line: "bg-surface-2/50",
  },
  {
    dot: "border-blue-500/50 bg-blue-500/10 text-accent-hi",
    output: "text-accent-hi",
    line: "bg-blue-500/25",
  },
  {
    dot: "border-blue-500/50 bg-blue-500/10 text-accent-hi",
    output: "text-accent-hi",
    line: "bg-transparent",
  },
] as const;

const steps = [
  {
    number: "01",
    title: { fr: "Cadrer", en: "Define" },
    description: {
      fr: "Clarifier le besoin, les utilisateurs, les contraintes et la priorité du produit avant de toucher à Figma.",
      en: "Clarify the need, users, constraints, and product priorities before touching Figma.",
    },
    output: { fr: "Périmètre & priorités", en: "Scope & priorities" },
  },
  {
    number: "02",
    title: { fr: "Concevoir", en: "Design" },
    description: {
      fr: "Structurer les parcours, valider les écrans clés en prototype et aligner sur la direction visuelle.",
      en: "Shape user flows, validate key screens in prototype, and align on visual direction.",
    },
    output: { fr: "Parcours & prototype", en: "Flows & prototype" },
  },
  {
    number: "03",
    title: { fr: "Développer", en: "Build" },
    description: {
      fr: "Construire l'application, intégrer les APIs et vérifier les usages essentiels en conditions réelles.",
      en: "Build the app, integrate APIs, and verify essential flows under real conditions.",
    },
    output: { fr: "Version testable", en: "Testable release" },
  },
  {
    number: "04",
    title: { fr: "Livrer", en: "Deliver" },
    description: {
      fr: "Préparer la mise en ligne ou la transmission du produit avec tout ce qu'il faut pour le faire évoluer.",
      en: "Prepare the product for launch or handoff with everything needed to keep evolving it.",
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
      className="relative w-full overflow-hidden bg-bg px-5 py-16 sm:px-8 md:py-20 lg:px-20 lg:py-24"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-[400px] w-[400px] rounded-full bg-emerald-500/8 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-800/6 blur-[80px]" />

      <div className="relative mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

        {/* ── Left — header ── */}
        <FadeInView className="flex flex-col lg:sticky lg:top-24 lg:self-start">
          <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-accent-hi">
            {locale === "en" ? "06 — How I work" : "06 — Ma méthode"}
          </p>
          <h2 className="mt-5 font-['Sora'] text-3xl font-bold leading-tight tracking-tight text-fg sm:text-4xl lg:text-5xl">
            {locale === "en"
              ? "From a clear need to a usable product."
              : "D'un besoin clair à un produit utilisable."}
          </h2>
          <p className="mt-5 font-['Manrope'] text-sm leading-7 text-muted sm:text-base">
            {locale === "en"
              ? "Each phase has a clear purpose and a concrete deliverable — so decisions stay visible and nothing gets lost."
              : "Chaque étape a un objectif précis et un livrable concret — pour que les décisions restent visibles et que rien ne se perde."}
          </p>

          <Link
            href="#contact"
            className="mt-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-line-strong px-5 py-3 font-['Sora'] text-sm font-semibold text-fg-soft transition-colors duration-200 hover:border-line-strong hover:text-fg"
          >
            {locale === "en" ? "Start a project" : "Démarrer un projet"}
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </FadeInView>

        {/* ── Right — timeline ── */}
        <div className="relative flex flex-col">

          {steps.map((step, i) => {
            const accent = stepAccents[i];
            const isLast = i === steps.length - 1;

            return (
              <FadeInView key={step.number} delay={0.1 + i * 0.1} className="relative flex gap-5">

                {/* Dot + connecting line */}
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.1, ease }}
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border font-['JetBrains_Mono'] text-[11px] font-bold ${accent.dot}`}
                  >
                    {step.number}
                  </motion.div>
                  {!isLast && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease }}
                      style={{ originY: 0 }}
                      className={`mt-1 w-px flex-1 ${accent.line}`}
                    />
                  )}
                </div>

                {/* Step content */}
                <div className={`pb-10 pt-2 ${isLast ? "pb-0" : ""}`}>
                  <h3 className="font-['Sora'] text-xl font-bold leading-tight text-fg sm:text-2xl">
                    {step.title[locale]}
                  </h3>
                  <p className="mt-2.5 font-['Manrope'] text-sm leading-7 text-muted">
                    {step.description[locale]}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="font-['JetBrains_Mono'] text-[10px] text-fg-soft">↳</span>
                    <span className={`font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest ${accent.output}`}>
                      {step.output[locale]}
                    </span>
                  </div>
                </div>

              </FadeInView>
            );
          })}
        </div>

      </div>
    </section>
  );
}
