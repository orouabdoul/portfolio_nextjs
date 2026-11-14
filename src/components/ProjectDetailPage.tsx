"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import PortfolioScreen from "@/components/visuals/PortfolioScreen";
import { projects, getProject } from "@/data/projects";

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
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const scopeStyles = {
  design: "border-violet-400/40 bg-violet-500/10 text-violet-300",
  dev:    "border-blue-400/40 bg-blue-500/10 text-blue-300",
  both:   "border-indigo-400/40 bg-gradient-to-r from-violet-500/10 to-blue-500/10 text-slate-200",
} as const;

const scopeLabels = {
  design: { fr: "Design",           en: "Design" },
  dev:    { fr: "Développement",     en: "Development" },
  both:   { fr: "Design · Dev",      en: "Design · Dev" },
} as const;

const linkTypeConfig = {
  prototype: {
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="4" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <rect x="8" y="2" width="4" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6 7H8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    color: "border-violet-500/40 bg-violet-500/10 text-violet-300 hover:bg-violet-500/20",
  },
  demo: {
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5.5 5L8.5 7L5.5 9" fill="currentColor" />
      </svg>
    ),
    color: "border-blue-500/40 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20",
  },
  github: {
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
    color: "border-gray-600 bg-gray-800/60 text-gray-300 hover:bg-gray-700/60",
  },
  behance: {
    icon: (
      <svg width="14" height="10" viewBox="0 0 22 14" fill="currentColor" aria-hidden="true">
        <path d="M14.5 2h6v1.5h-6zM8.07 6.3c.55-.32.93-.9.93-1.8C9 2.8 7.5 2 5.5 2H0v10h5.8c2.2 0 3.7-1.2 3.7-3.1 0-1.1-.5-1.95-1.43-2.6zM2.5 4h2.7c.9 0 1.3.4 1.3 1s-.4 1.1-1.3 1.1H2.5V4zm3.1 6H2.5V7.7h3.1c1 0 1.4.5 1.4 1.1 0 .7-.5 1.2-1.4 1.2zM17.5 4c-2.5 0-4.5 2-4.5 4.5S15 13 17.5 13c1.8 0 3.3-.9 4.1-2.3l-1.9-.9c-.4.7-1.2 1.2-2.2 1.2-1.1 0-2-.7-2.3-1.7h6.6c0-.3.1-.6.1-.8C21.9 6 20 4 17.5 4zm-2.2 3.5c.3-1 1.1-1.5 2.2-1.5s1.9.6 2.1 1.5h-4.3z" />
      </svg>
    ),
    color: "border-blue-500/40 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20",
  },
  "app-store": {
    icon: (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M7 2V9M4 7L7 10L10 7M2 11.5H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "border-blue-500/40 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20",
  },
  website: {
    icon: (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "border-gray-600 bg-gray-800/60 text-gray-300 hover:bg-gray-700/60",
  },
} as const;

export default function ProjectDetailPage({ slug }: { slug: string }) {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "fr";

  const project = getProject(slug);
  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-gray-950">

      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-gray-950">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[700px] w-[700px] rounded-full bg-blue-600/8 blur-[140px]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-600/6 blur-[100px]" />

        <Navbar />

        <section className="relative px-5 pb-16 pt-32 sm:px-8 sm:pt-36 lg:px-20 lg:pb-24">
          <div className="mx-auto max-w-[1280px]">

            {/* Back */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <Link
                href="/#realisations"
                className="inline-flex items-center gap-2 font-['Manrope'] text-sm text-gray-500 transition-colors hover:text-white"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M12 7H2M6 11L2 7L6 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {locale === "en" ? "Back to selected work" : "Retour aux réalisations"}
              </Link>
            </motion.div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start lg:gap-14">

              {/* Left — main */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.1, ease }}
                  className="flex flex-wrap items-center gap-3"
                >
                  <span className={`rounded-full border px-3 py-1 font-['Sora'] text-[11px] font-semibold ${scopeStyles[project.scope]}`}>
                    {scopeLabels[project.scope][locale]}
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[11px] text-gray-600">{project.year}</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.2, ease }}
                  className="mt-5 font-['Sora'] text-[clamp(40px,8vw,80px)] font-bold leading-none tracking-tight text-slate-100"
                >
                  {project.name}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.32, ease }}
                  className="mt-3 font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-blue-400"
                >
                  {project.type[locale]}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease }}
                  className="mt-6 max-w-2xl font-['Manrope'] text-base leading-[1.85] text-gray-300 sm:text-[17px]"
                >
                  {project.description[locale]}
                </motion.p>
              </div>

              {/* Right — meta */}
              <motion.aside
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease }}
                className="flex flex-col gap-3"
              >
                <dl className="flex flex-col gap-3">
                  <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5">
                    <dt className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest text-gray-500">
                      {locale === "en" ? "Role" : "Rôle"}
                    </dt>
                    <dd className="mt-2 font-['Sora'] text-sm font-semibold leading-5 text-slate-100">
                      {project.role[locale]}
                    </dd>
                  </div>
                  <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5">
                    <dt className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest text-gray-500">
                      {locale === "en" ? "Duration" : "Durée"}
                    </dt>
                    <dd className="mt-2 font-['Sora'] text-sm font-semibold text-slate-100">
                      {project.duration[locale]}
                    </dd>
                  </div>
                  <div className="rounded-2xl border border-gray-800 bg-gray-900 p-5">
                    <dt className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest text-gray-500">
                      {locale === "en" ? "Stack" : "Stack"}
                    </dt>
                    <dd className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-gray-700 bg-gray-800 px-2.5 py-1 font-['JetBrains_Mono'] text-[10px] text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>

                {/* Links */}
                {project.links.length > 0 && (
                  <div className="flex flex-col gap-2">
                    {project.links.map((link, i) => {
                      const config = linkTypeConfig[link.type];
                      return (
                        <a
                          key={i}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-between gap-3 rounded-2xl border p-4 font-['Sora'] text-sm font-semibold transition-colors ${config.color}`}
                        >
                          <span>{link.label[locale]}</span>
                          {config.icon}
                        </a>
                      );
                    })}
                  </div>
                )}
              </motion.aside>
            </div>
          </div>
        </section>
      </div>

      {/* ── Screens gallery ── */}
      <section className="bg-gray-900 px-5 py-14 sm:px-8 sm:py-18 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <FadeInView>
            <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-blue-400">
              {locale === "en" ? "Screens" : "Les écrans"}
            </p>
            <h2 className="mt-3 font-['Sora'] text-2xl font-bold text-slate-100 sm:text-3xl">
              {locale === "en" ? "The key screens." : "Les écrans clés."}
            </h2>
          </FadeInView>

          <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-4">
            {project.screens.map((screen, i) => (
              <FadeInView key={screen.name} delay={i * 0.08}>
                <figure className="flex flex-col gap-3">
                  <PortfolioScreen
                    name={screen.name}
                    alt={`${project.name} — ${screen.label[locale]}`}
                    sizes="(max-width: 639px) 44vw, (max-width: 1023px) 44vw, 22vw"
                    className="w-full drop-shadow-2xl"
                  />
                  <figcaption className="text-center font-['Manrope'] text-sm font-medium text-gray-400">
                    {screen.label[locale]}
                  </figcaption>
                </figure>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem / Solution ── */}
      <section className="bg-gray-50 px-5 py-14 sm:px-8 sm:py-18 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <FadeInView>
            <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-blue-500">
              {locale === "en" ? "Context" : "Contexte"}
            </p>
            <h2 className="mt-3 font-['Sora'] text-2xl font-bold leading-tight text-gray-950 sm:text-3xl">
              {locale === "en" ? "Problem. Solution." : "Problème. Solution."}
            </h2>
          </FadeInView>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <FadeInView delay={0.1}>
              <article className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-7 sm:p-8">
                <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-gray-400">
                  {locale === "en" ? "Problem" : "Problème"}
                </span>
                <p className="mt-4 flex-1 font-['Manrope'] text-base leading-[1.85] text-gray-700">
                  {project.problem[locale]}
                </p>
              </article>
            </FadeInView>
            <FadeInView delay={0.18}>
              <article className="flex h-full flex-col rounded-3xl bg-blue-600 p-7 sm:p-8">
                <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-blue-200">
                  {locale === "en" ? "Solution" : "Solution"}
                </span>
                <p className="mt-4 flex-1 font-['Manrope'] text-base leading-[1.85] text-white">
                  {project.solution[locale]}
                </p>
              </article>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* ── Insights ── */}
      <section className="bg-white px-5 py-14 sm:px-8 sm:py-18 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <FadeInView>
            <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-blue-500">
              {locale === "en" ? "Flow notes" : "Lecture du parcours"}
            </p>
            <h2 className="mt-3 max-w-2xl font-['Sora'] text-2xl font-bold leading-tight text-gray-950 sm:text-3xl">
              {locale === "en"
                ? "What these screens are designed to clarify."
                : "Ce que ces écrans cherchent à clarifier."}
            </h2>
          </FadeInView>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {project.insights.map((insight, i) => (
              <FadeInView key={i} delay={i * 0.1}>
                <article className="flex h-full flex-col rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-7">
                  <span className="font-['JetBrains_Mono'] text-[10px] tracking-widest text-blue-500">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-['Sora'] text-base font-semibold leading-5 text-gray-950">
                    {insight.title[locale]}
                  </h3>
                  <p className="mt-3 flex-1 font-['Manrope'] text-sm leading-6 text-gray-600">
                    {insight.detail[locale]}
                  </p>
                </article>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer CTA + next project ── */}
      <section className="relative overflow-hidden bg-gray-950 px-5 py-14 sm:px-8 sm:py-18 lg:px-20 lg:py-24">
        <div className="pointer-events-none absolute -left-20 top-0 h-[400px] w-[400px] rounded-full bg-blue-600/8 blur-[100px]" />

        <div className="relative mx-auto max-w-[1280px]">
          <div className="flex flex-col gap-14 lg:flex-row lg:items-end lg:justify-between">

            {/* Contact CTA */}
            <FadeInView>
              <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-blue-400">
                {locale === "en" ? "Let's work together" : "Travaillons ensemble"}
              </p>
              <p className="mt-3 max-w-sm font-['Sora'] text-2xl font-bold text-slate-100 sm:text-3xl">
                {locale === "en"
                  ? "Have a project? Let's talk."
                  : "Vous avez un projet ? Parlons-en."}
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex min-h-11 items-center gap-2.5 rounded-full bg-blue-500 px-6 font-['Sora'] text-sm font-semibold text-white shadow-[0_0_24px_rgba(59,130,246,0.35)] transition-all duration-200 hover:bg-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.55)]"
              >
                {locale === "en" ? "Get in touch" : "Me contacter"}
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7H12M8 3L12 7L8 11" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </FadeInView>

            {/* Next project */}
            <FadeInView delay={0.1}>
              <Link
                href={`/realisations/${nextProject.slug}`}
                className="group flex flex-col items-start gap-2 lg:items-end"
              >
                <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-gray-500 transition-colors group-hover:text-gray-400">
                  {locale === "en" ? "Next project" : "Projet suivant"}
                </span>
                <span className="flex items-center gap-3 font-['Sora'] text-3xl font-bold leading-tight text-slate-100 transition-colors group-hover:text-blue-400 sm:text-4xl">
                  {nextProject.name}
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true" className="shrink-0 transition-transform group-hover:translate-x-2">
                    <path d="M4 14H24M16 6L24 14L16 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </FadeInView>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
