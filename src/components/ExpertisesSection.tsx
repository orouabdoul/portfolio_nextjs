"use client";

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

const DesignIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2" y="2" width="9" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <rect x="2" y="15" width="9" height="7" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <rect x="13" y="2" width="9" height="7" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="17.5" cy="16" r="4.5" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const SoloIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M5 20a7 7 0 0 1 14 0" />
    <path d="M16 3.5l2 2-4 4" />
  </svg>
);

const MobileIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="6" y="1" width="12" height="21" rx="3" />
    <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2.5" />
  </svg>
);

const APIIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
    <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
  </svg>
);

export default function ExpertisesSection() {
  const { language } = useLanguage();
  const locale = language === "en" ? "en" : "fr";

  return (
    <section
      id="expertises"
      className="w-full border-t border-line bg-bg px-5 py-16 sm:px-8 md:py-20 lg:px-20 lg:py-24"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 sm:gap-12">

        {/* Header */}
        <FadeInView>
          <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-accent-hi">
            {locale === "en" ? "03 — Expertise" : "03 — Expertises"}
          </p>
          <h2 className="mt-5 max-w-2xl font-['Sora'] text-3xl font-bold leading-tight tracking-tight text-fg sm:text-4xl lg:text-5xl">
            {locale === "en"
              ? "Two expertises. One person."
              : "Deux expertises. Un seul interlocuteur."}
          </h2>
          <p className="mt-4 max-w-xl font-['Manrope'] text-base leading-7 text-subtle">
            {locale === "en"
              ? "From the first Figma wireframe to the deployed app — without switching contacts."
              : "Du premier wireframe Figma à l'app déployée, sans changer d'interlocuteur."}
          </p>
        </FadeInView>

        {/* Bento grid */}
        <div className="grid gap-4 lg:grid-cols-3">

          {/* ── Card 1 : Design UI/UX — large (violet) ── */}
          <FadeInView delay={0.1} className="h-full lg:col-span-2">
            <motion.article
              whileHover={{ y: -3 }}
              transition={{ duration: 0.22, ease }}
              className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-surface p-7 sm:p-8"
            >
              {/* Decorative Figma-frame shapes */}
              <div className="pointer-events-none absolute right-0 top-0 text-violet-400 opacity-[0.07]">
                <svg width="220" height="220" viewBox="0 0 220 220" fill="none" aria-hidden="true">
                  <rect x="20" y="20" width="70" height="90" rx="10" stroke="currentColor" strokeWidth="4" />
                  <rect x="110" y="20" width="70" height="40" rx="10" stroke="currentColor" strokeWidth="4" />
                  <rect x="110" y="70" width="70" height="40" rx="10" stroke="currentColor" strokeWidth="4" />
                  <rect x="20" y="125" width="160" height="55" rx="10" stroke="currentColor" strokeWidth="4" />
                </svg>
              </div>

              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-500/30 bg-violet-500/15 text-violet-500">
                  <DesignIcon />
                </div>
                <span className="font-['JetBrains_Mono'] text-[11px] tracking-widest text-violet-400">01</span>
              </div>

              <h3 className="mt-6 font-['Sora'] text-2xl font-bold leading-tight text-fg sm:text-3xl">
                {locale === "en" ? "UI/UX Design" : "Design UI/UX"}
              </h3>
              <p className="mt-3 max-w-lg flex-1 font-['Manrope'] text-base leading-7 text-muted">
                {locale === "en"
                  ? "User journeys, wireframes and high-fidelity mockups — all validated in Figma before writing a single line of code. UX structured, flows tested, prototype delivered."
                  : "Parcours utilisateurs, wireframes et maquettes haute-fidélité — tout validé dans Figma avant d'écrire une ligne de code. UX structurée, parcours testés, prototype livré."}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-violet-500/20 pt-5">
                {["Figma", "Prototype", "Design System", "User Flows", "UX Research"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 font-['JetBrains_Mono'] text-[11px] tracking-wide text-violet-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          </FadeInView>

          {/* ── Card 2 : Solo de bout en bout — small ── */}
          <FadeInView delay={0.16} className="h-full">
            <motion.article
              whileHover={{ y: -3 }}
              transition={{ duration: 0.22, ease }}
              className="flex h-full flex-col rounded-3xl border border-line bg-surface p-6 sm:p-7"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-bg text-muted">
                  <SoloIcon />
                </div>
                <span className="font-['JetBrains_Mono'] text-[11px] tracking-widest text-muted">02</span>
              </div>

              <h3 className="mt-6 font-['Sora'] text-xl font-bold leading-tight text-fg">
                {locale === "en" ? "Solo, end-to-end" : "Solo, de bout en bout"}
              </h3>
              <p className="mt-3 flex-1 font-['Manrope'] text-[15px] leading-7 text-subtle">
                {locale === "en"
                  ? "One person for the whole product. No information lost between mockup and code — the designer and the developer are the same."
                  : "Une seule personne pour tout le produit. Aucune information perdue entre la maquette et le code — le designer et le développeur, c'est la même personne."}
              </p>

              <div className="mt-5 border-t border-line pt-4">
                <span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-widest text-muted">
                  {locale === "en" ? "1 contact · Full ownership" : "1 interlocuteur · Produit complet"}
                </span>
              </div>
            </motion.article>
          </FadeInView>

          {/* ── Card 3 : Dev Mobile — small (blue) ── */}
          <FadeInView delay={0.22} className="h-full">
            <motion.article
              whileHover={{ y: -3 }}
              transition={{ duration: 0.22, ease }}
              className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 to-surface p-6 sm:p-7"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/30 bg-accent/15 text-accent">
                  <MobileIcon />
                </div>
                <span className="font-['JetBrains_Mono'] text-[11px] tracking-widest text-accent-hi">03</span>
              </div>

              <h3 className="mt-6 font-['Sora'] text-xl font-bold leading-tight text-fg">
                {locale === "en" ? "Mobile Development" : "Développement Mobile"}
              </h3>
              <p className="mt-3 flex-1 font-['Manrope'] text-[15px] leading-7 text-muted">
                {locale === "en"
                  ? "Flutter (GetX architecture) and React Native for native iOS and Android apps. Structured, maintainable code, pixel-perfect."
                  : "Flutter (architecture GetX) et React Native pour des apps natives iOS et Android. Code structuré, facile à maintenir, fidèle à la maquette."}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5 border-t border-blue-100 pt-4">
                {["Flutter", "GetX", "React Native", "iOS", "Android"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 font-['JetBrains_Mono'] text-[11px] tracking-wide text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          </FadeInView>

          {/* ── Card 4 : Backend & API — large (dark) ── */}
          <FadeInView delay={0.28} className="h-full lg:col-span-2">
            <motion.article
              whileHover={{ y: -3 }}
              transition={{ duration: 0.22, ease }}
              className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface p-7 sm:p-8"
            >
              {/* Decorative code hint */}
              <div className="pointer-events-none absolute bottom-6 right-7 text-right font-['JetBrains_Mono'] text-[11px] leading-6 text-muted opacity-60 select-none">
                <div>Route::middleware(&apos;auth:sanctum&apos;)</div>
                <div>&nbsp;&nbsp;-&gt;get(&apos;/orders&apos;, [OrderController::class, &apos;index&apos;]);</div>
              </div>

              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-line-strong bg-surface-2 text-fg-soft">
                  <APIIcon />
                </div>
                <span className="font-['JetBrains_Mono'] text-[11px] tracking-widest text-muted">04</span>
              </div>

              <h3 className="mt-6 font-['Sora'] text-2xl font-bold leading-tight text-fg sm:text-3xl">
                {locale === "en" ? "Backend & Integrations" : "Backend & Intégrations"}
              </h3>
              <p className="mt-3 max-w-lg flex-1 font-['Manrope'] text-base leading-7 text-muted">
                {locale === "en"
                  ? "REST APIs with Laravel, Vue 3 admin panels, authentication, databases and real-time sync. The app connects cleanly to your existing ecosystem."
                  : "API REST avec Laravel, back-offices Vue 3, authentification, bases de données et synchronisation temps réel. L'application s'intègre dans votre écosystème existant sans friction."}
              </p>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
                {["Laravel", "PHP", "Vue 3", "MySQL", "REST API", "Firebase", "Supabase", "Git"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line-strong bg-surface-2/60 px-3 py-1 font-['JetBrains_Mono'] text-[11px] tracking-wide text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          </FadeInView>

        </div>
      </div>
    </section>
  );
}
