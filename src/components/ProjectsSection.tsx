"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { type ReactNode, useMemo, useState } from "react";
// useMemo kept for filtered list
import { useLanguage } from "@/components/LanguageProvider";
import PortfolioScreen from "@/components/visuals/PortfolioScreen";
import { projects } from "@/data/projects";

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

const scopeStyles = {
  design: "border-violet-400/40 bg-violet-500/10 text-violet-300",
  dev:    "border-blue-400/40 bg-blue-500/10 text-accent-hi",
  both:   "border-indigo-400/40 bg-gradient-to-r from-violet-500/10 to-blue-500/10 text-fg-soft",
} as const;

const scopeLabels = {
  design: { fr: "Design",           en: "Design" },
  dev:    { fr: "Développement",     en: "Development" },
  both:   { fr: "Design · Dev",      en: "Design · Dev" },
} as const;

// Fixed list — always visible even if no project matches yet
const FILTERS = [
  { key: "all",    label: { fr: "Tous",   en: "All" } },
  { key: "design", label: { fr: "Design", en: "Design" } },
  { key: "mobile", label: { fr: "Mobile", en: "Mobile" } },
  { key: "web",    label: { fr: "Web",    en: "Web" } },
] as const;

const MotionLink = motion(Link);

export default function ProjectsSection() {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "fr";

  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((p) => p.categories.includes(activeFilter)),
    [activeFilter],
  );

  const INITIAL_VISIBLE = 6;
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE);
  const hasMore = filtered.length > INITIAL_VISIBLE && !showAll;

  function handleFilterChange(key: string) {
    setActiveFilter(key);
    setShowAll(false);
  }

  return (
    <section
      id="realisations"
      className="relative w-full overflow-hidden bg-bg px-5 py-16 sm:px-8 md:py-20 lg:px-20 lg:py-24"
    >
      <div className="pointer-events-none absolute -right-20 top-20 h-[500px] w-[500px] rounded-full bg-violet-600/8 blur-[120px]" />
      <div className="pointer-events-none absolute -left-10 bottom-20 h-[350px] w-[350px] rounded-full bg-violet-500/5 blur-[90px]" />

      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-10 sm:gap-12">

        {/* Header + filters */}
        <FadeInView>
          <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-accent-hi">
            {locale === "en" ? "02 — Selected work" : "02 — Réalisations"}
          </p>
          <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="max-w-2xl font-['Sora'] text-3xl font-bold leading-tight tracking-tight text-fg sm:text-4xl lg:text-5xl">
              {locale === "en" ? "What I design and deliver." : "Ce que je conçois et livre."}
            </h2>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((filter) => {
                const isActive = activeFilter === filter.key;
                return (
                  <button
                    key={filter.key}
                    type="button"
                    onClick={() => handleFilterChange(filter.key)}
                    className={`relative rounded-full px-4 py-2 font-['Sora'] text-[13px] font-semibold transition-colors duration-200 ${
                      isActive
                        ? "bg-surface text-fg"
                        : "border border-line-strong text-muted hover:border-line-strong hover:text-fg-soft"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="filter-pill"
                        className="absolute inset-0 rounded-full bg-surface"
                        transition={{ duration: 0.25, ease }}
                      />
                    )}
                    <span className="relative">{filter.label[locale]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </FadeInView>

        {/* Project grid */}
        <div className="grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="wait" initial={false}>
            {visible.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, delay: index * 0.06, ease }}
                className="h-full"
              >
                <MotionLink
                  href={`/realisations/${project.slug}`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25, ease }}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-shadow duration-300 hover:border-line-strong hover:shadow-[0_8px_40px_rgba(59,130,246,0.1)]"
                  aria-label={`${locale === "en" ? "View project" : "Voir le projet"} ${project.name}`}
                >
                  {/* Screens preview */}
                  <div className="relative overflow-hidden bg-bg px-5 pt-7">
                    {project.screens.length === 0 ? (
                      <div className="flex h-44 items-center justify-center">
                        <div className="flex flex-col items-center gap-3">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line-strong/50 bg-surface-2/60">
                            <span className="select-none font-['Sora'] text-2xl font-bold text-muted">
                              {project.name.charAt(0)}
                            </span>
                          </div>
                          <span className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest text-fg-soft">
                            {locale === "en" ? "Screenshots coming" : "Captures à venir"}
                          </span>
                        </div>
                      </div>
                    ) : project.screens[0]?.frame === "web" ? (
                      <div className="mx-auto w-[90%] transition-transform duration-500 group-hover:-translate-y-2">
                        <PortfolioScreen
                          name={project.screens[0].name}
                          alt={`${project.name} — ${project.screens[0].label[locale]}`}
                          sizes="(max-width: 767px) 80vw, 40vw"
                          frame="web"
                          chromeLabel={project.screens[0].chromeLabel}
                          objectFit={project.screens[0].objectFit}
                          className="w-full drop-shadow-xl"
                        />
                      </div>
                    ) : (
                      <div className="flex items-end justify-center gap-2.5">
                        {project.screens.slice(0, 3).map((screen, i) => (
                          <div
                            key={screen.name}
                            className={`w-[30%] shrink-0 transition-transform duration-500 ${
                              i === 1 ? "-translate-y-3 group-hover:-translate-y-5" : "group-hover:-translate-y-1"
                            }`}
                          >
                            <PortfolioScreen
                              name={screen.name}
                              alt={`${project.name} — ${screen.label[locale]}`}
                              sizes="20vw"
                              objectFit={screen.objectFit}
                              className="w-full drop-shadow-xl"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-surface to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-accent-hi">
                        {project.type[locale]}
                      </span>
                      <div className="flex items-center gap-2">
                        {(project.links.some((l) => l.type === "website") || project.links.some((l) => l.type === "app-store")) && (
                          <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-['JetBrains_Mono'] text-[9px] font-semibold uppercase tracking-wider text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            {project.links.some((l) => l.type === "website") ? "Live" : "Play Store"}
                          </span>
                        )}
                        <span className="font-['JetBrains_Mono'] text-[10px] text-muted">{project.year}</span>
                      </div>
                    </div>

                    <h3 className="mt-3 font-['Sora'] text-2xl font-bold leading-tight text-fg sm:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 font-['Manrope'] text-sm leading-6 text-muted">
                      {project.summary[locale]}
                    </p>

                    {/* Scope badge + tech tags */}
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className={`rounded-full border px-3 py-1 font-['Sora'] text-[11px] font-semibold ${scopeStyles[project.scope]}`}>
                        {scopeLabels[project.scope][locale]}
                      </span>
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-line-strong bg-surface-2/60 px-3 py-1 font-['JetBrains_Mono'] text-[10px] tracking-wide text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Click hint */}
                    <div className="mt-auto flex items-center gap-1.5 pt-5 font-['Sora'] text-sm font-semibold text-subtle transition-colors group-hover:text-accent-hi">
                      {locale === "en" ? "View project" : "Voir le projet"}
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                        <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </MotionLink>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show more */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
            className="flex justify-center"
          >
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2.5 rounded-full border border-line-strong px-6 py-3 font-['Sora'] text-sm font-semibold text-fg-soft transition-all duration-200 hover:border-line-strong hover:text-fg"
            >
              {locale === "en"
                ? `View all projects (${filtered.length})`
                : `Voir tous les projets (${filtered.length})`}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 2v10M2 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </motion.div>
        )}

        {/* Empty state */}
        <AnimatePresence>
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="py-16 text-center font-['Manrope'] text-sm text-muted"
            >
              {locale === "en" ? "No projects in this category yet." : "Aucun projet dans cette catégorie pour l'instant."}
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA card */}
        <FadeInView delay={0.2}>
          <article className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-600/15 via-blue-500/8 to-indigo-600/10 p-5 sm:p-7 lg:p-9">
            <div className="pointer-events-none absolute -right-10 -top-10 h-[200px] w-[200px] rounded-full bg-blue-500/15 blur-[60px]" />
            <div className="relative flex flex-col gap-5">
              <span className="font-['JetBrains_Mono'] text-xs tracking-widest text-accent-hi">
                {String(projects.length + 1).padStart(2, "0")} · {locale === "en" ? "Your project" : "Votre projet"}
              </span>
              <h3 className="font-['Sora'] text-3xl font-bold leading-tight text-fg sm:text-4xl">
                {locale === "en" ? "Your project, my next realisation." : "Votre projet, ma prochaine réalisation."}
              </h3>
              <p className="max-w-xl font-['Manrope'] text-sm leading-6 text-fg-soft sm:text-base">
                {locale === "en"
                  ? "You have an idea or a need to structure. Let's talk and see how to turn it into a usable product."
                  : "Vous avez une idée ou un besoin à structurer. Parlons-en et voyons comment le transformer en produit utilisable."}
              </p>
              <a
                href="#contact"
                className="mt-1 inline-flex w-fit min-h-11 items-center gap-2.5 rounded-full bg-blue-500 px-6 font-['Sora'] text-sm font-semibold text-white shadow-[0_0_24px_rgba(59,130,246,0.4)] transition-all duration-200 hover:bg-blue-400 hover:shadow-[0_0_36px_rgba(59,130,246,0.6)]"
              >
                {locale === "en" ? "Start a conversation" : "Démarrer une conversation"}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7H12M8 3L12 7L8 11" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </article>
        </FadeInView>
      </div>
    </section>
  );
}
