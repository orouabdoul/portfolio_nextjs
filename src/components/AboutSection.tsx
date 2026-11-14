"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { type ReactNode } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const techStack = ["Flutter", "React Native", "Figma", "Firebase", "TypeScript", "Supabase"];

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

export default function AboutSection() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <section
      id="a-propos"
      className="w-full bg-white px-5 py-20 sm:px-8 md:py-28 lg:px-20"
    >
      <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-stretch lg:gap-16 xl:gap-24">

        {/* ── Left — photo + facts ── */}
        <FadeInView delay={0.1} className="flex h-full flex-col gap-4">

          {/* Photo — mobile: ratio fixe / desktop: s'étire avec la colonne droite */}
          <div className="relative flex-1 overflow-hidden rounded-3xl bg-gray-950">
            <div className="aspect-[3/4] w-full lg:aspect-auto lg:h-full">
              <Image
                src="/amadou-transparent.png"
                alt={isEnglish ? "Portrait of Amadou Issiaka" : "Portrait d'Amadou Issiaka"}
                fill
                sizes="(max-width: 1023px) 90vw, 42vw"
                className="object-cover object-[center_15%]"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-950/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 rounded-xl bg-white/90 px-4 py-2.5 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                <span className="font-['Manrope'] text-[12px] font-semibold text-gray-900">
                  {isEnglish ? "Available for projects" : "Disponible pour de nouveaux projets"}
                </span>
              </div>
              <span className="shrink-0 font-['JetBrains_Mono'] text-[10px] text-gray-500">
                🇧🇯 Bénin
              </span>
            </div>
          </div>

        </FadeInView>

        {/* ── Right — story ── */}
        <div className="flex flex-col">

          <FadeInView>
            <p className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-blue-500">
              {isEnglish ? "01 — About" : "01 — À propos"}
            </p>
          </FadeInView>

          <FadeInView delay={0.1}>
            <h2 className="mt-5 font-['Sora'] text-[clamp(26px,4.5vw,42px)] font-bold leading-[1.1] tracking-tight text-gray-950">
              {isEnglish ? (
                <>
                  I&apos;m Amadou —<br />
                  designer, developer,{" "}
                  <span className="text-blue-600">both at once.</span>
                </>
              ) : (
                <>
                  Je suis Amadou —<br />
                  designer, développeur,{" "}
                  <span className="text-blue-600">les deux à la fois.</span>
                </>
              )}
            </h2>
          </FadeInView>

          {/* Bio — 1 paragraphe fort */}
          <FadeInView delay={0.2}>
            <p className="mt-6 font-['Manrope'] text-base leading-[1.9] text-gray-600">
              {isEnglish
                ? "Based in Benin, I design and build mobile apps end-to-end — from the first Figma frame to production. What sets me apart: I speak both design and code fluently, so nothing is lost between the mockup and the final app."
                : "Basé au Bénin, je conçois et développe des applications mobiles de bout en bout — de la première maquette Figma à la mise en production. Ce qui me différencie : je parle aussi bien design que code, sans rien perdre en chemin."}
            </p>
          </FadeInView>

          {/* Facts grid — avant le CTA */}
          <FadeInView delay={0.3}>
            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                <span className="font-['Sora'] text-3xl font-bold leading-none text-blue-600">3+</span>
                <span className="font-['Manrope'] text-[12px] leading-5 text-gray-600">
                  {isEnglish ? "Years of experience" : "Ans d'expérience"}
                </span>
              </div>
              <div className="flex flex-col gap-1.5 rounded-2xl border border-gray-200 bg-white p-4">
                <span className="font-['Sora'] text-3xl font-bold leading-none text-gray-900">10+</span>
                <span className="font-['Manrope'] text-[12px] leading-5 text-gray-600">
                  {isEnglish ? "Projects delivered" : "Projets livrés"}
                </span>
              </div>
              <div className="col-span-2 flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-950">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <rect x="2" y="2" width="5" height="5" rx="1.5" fill="white" />
                    <rect x="9" y="2" width="5" height="5" rx="1.5" fill="white" opacity="0.5" />
                    <rect x="2" y="9" width="5" height="5" rx="1.5" fill="white" opacity="0.5" />
                    <rect x="9" y="9" width="5" height="5" rx="1.5" fill="white" />
                  </svg>
                </div>
                <div>
                  <p className="font-['Sora'] text-[13px] font-semibold leading-5 text-gray-900">
                    {isEnglish ? "Design → Code, solo" : "Design → Code, en solo"}
                  </p>
                  <p className="font-['Manrope'] text-[11px] text-gray-500">
                    {isEnglish ? "One person, full product ownership" : "Un seul interlocuteur, tout le produit"}
                  </p>
                </div>
              </div>
            </div>
          </FadeInView>

          {/* Tech stack */}
          <FadeInView delay={0.38}>
            <div className="mt-6 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-gray-200 bg-white px-3.5 py-1.5 font-['JetBrains_Mono'] text-[11px] tracking-wide text-gray-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </FadeInView>

          {/* CTA — toujours en dernier */}
          <FadeInView delay={0.46}>
            <a
              href="#realisations"
              className="mt-8 inline-flex w-fit items-center gap-2.5 rounded-full bg-blue-600 px-6 py-3.5 font-['Sora'] text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-500 hover:shadow-[0_0_24px_rgba(37,99,235,0.4)]"
            >
              {isEnglish ? "See my work" : "Voir mes projets"}
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </FadeInView>
        </div>

      </div>
    </section>
  );
}
