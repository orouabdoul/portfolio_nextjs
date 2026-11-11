"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

export default function HeroSection() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const greeting = isEnglish ? "Hello" : "Bonjour";

  return (
    <section id="accueil" className="relative w-full min-h-screen bg-gray-950 overflow-hidden px-5 pt-24 pb-10 sm:px-8 sm:pt-28 xl:h-[920px] xl:min-h-0 xl:px-0 xl:pt-0 xl:pb-0">
      {/* Subtle left-side vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 via-transparent to-transparent pointer-events-none" />

      {/* ── Greeting ── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative left-auto top-auto mb-7 flex translate-x-0 flex-col items-center gap-1 text-center sm:mb-9 xl:absolute xl:left-1/2 xl:top-[108px] xl:mb-0 xl:-translate-x-1/2 xl:gap-2"
      >
        <span className="text-gray-400 text-[13px] font-['Manrope'] leading-5 tracking-[0.06em]">
          {greeting}, {isEnglish ? "I'm" : "je suis"}
        </span>
        <span className="text-slate-100 text-[18px] font-bold font-['Sora'] leading-6 tracking-[0.04em]">
          Abdoulaye AMADOU ISSIAKA
        </span>
      </motion.div>

      {/* ──────────────────────────────────────────
          LEFT COLUMN — 560px, starts at 160px top
          Centré visuellement dans la section
      ────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: -32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative left-auto top-auto mx-auto flex w-full max-w-[620px] flex-col gap-5 sm:gap-6 xl:absolute xl:left-20 xl:top-[185px] xl:mx-0 xl:w-[560px]"
      >

        {/* ── Titre principal ── */}
        <div className="flex flex-col">
          <span className="text-slate-100 text-3xl font-bold font-['Sora'] leading-tight tracking-[-0.5px] sm:text-4xl xl:text-[48px] xl:leading-[58px]">
            {isEnglish ? "I turn ambitious ideas" : "Je transforme les idées"}
            <br />
            {isEnglish ? "into useful products" : "en produits utiles,"}
          </span>
          <div className="relative min-h-9 sm:min-h-11 xl:h-[60px]">
            <span className="relative left-0 top-0 text-blue-500 text-3xl font-bold font-['Sora'] leading-tight tracking-[-0.5px] sm:text-4xl xl:absolute xl:text-[48px] xl:leading-[58px]">
              {isEnglish ? "that are clear and" : "clairs et fiables"}
            </span>
          </div>
          <span className="text-slate-100 text-3xl font-bold font-['Sora'] leading-tight tracking-[-0.5px] sm:text-4xl xl:text-[48px] xl:leading-[58px]">
            {isEnglish ? "reliable from day one." : "dès le premier usage."}
          </span>
        </div>

        {/* ── Description ── */}
        <p className="max-w-[500px] text-sm text-gray-300 font-['Manrope'] leading-7 sm:text-base sm:leading-[1.85]">
          {isEnglish
            ? "I design and build mobile apps and digital products for startups and small businesses seeking a clear, reliable solution—with an experience that builds trust, converts, and keeps users coming back."
            : "Je conçois et développe des applications mobiles et produits numériques pour les startups et PME qui veulent un service clair, fiable et orienté résultats, avec une expérience qui rassure, convertit et fidélise."}
        </p>

        {/* ── CTA Buttons ── */}
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a
            href="#realisations"
            className="min-h-[52px] justify-center px-5 bg-blue-500 rounded-full text-white text-sm font-semibold font-['Sora'] tracking-tight flex items-center gap-2.5 hover:bg-blue-400 transition-all duration-200 shadow-[0_0_22px_rgba(59,130,246,0.28)] hover:shadow-[0_0_32px_rgba(59,130,246,0.48)] sm:px-7 sm:text-[15px]"
          >
            {isEnglish ? "View my work" : "Voir mes réalisations"}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7H12M8 3L12 7L8 11"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="min-h-[52px] justify-center px-5 rounded-full border border-gray-500/40 text-slate-100 text-sm font-semibold font-['Sora'] tracking-tight hover:border-gray-400/60 hover:bg-white/5 transition-all duration-200 flex items-center sm:px-7 sm:text-[15px]"
          >
            {isEnglish ? "Tell me about your project" : "Décrivez votre projet"}
          </a>
        </div>

        {/* ── Stats ── */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-4 pt-1 sm:gap-x-8">
          <div className="flex flex-col gap-1.5">
            <span className="text-slate-100 text-[22px] font-bold font-['Sora'] leading-none tracking-tight">
              15+
            </span>
            <span className="text-gray-500 text-[11px] font-['Manrope'] leading-none tracking-[0.04em]">
              {isEnglish ? "Apps delivered" : "Apps livrées"}
            </span>
          </div>
          <div className="w-px h-10 bg-gray-700/50" />
          <div className="flex flex-col gap-1.5">
            <span className="text-slate-100 text-[22px] font-bold font-['Sora'] leading-none tracking-tight">
              {isEnglish ? "3 years" : "3 ans"}
            </span>
            <span className="text-gray-500 text-[11px] font-['Manrope'] leading-none tracking-[0.04em]">
              {isEnglish ? "Mobile experience" : "Expérience mobile"}
            </span>
          </div>
          <div className="w-px h-10 bg-gray-700/50" />
          <div className="flex flex-col gap-1.5">
            <span className="text-slate-100 text-[22px] font-bold font-['Sora'] leading-none tracking-tight">
              100%
            </span>
            <span className="text-gray-500 text-[11px] font-['Manrope'] leading-none tracking-[0.04em]">
              {isEnglish ? "Client satisfaction" : "Satisfaction client"}
            </span>
          </div>
        </div>
      </motion.div>

      {/* ──────────────────────────────────────────
          RIGHT COLUMN — 560px, starts at 100px top
          Centré autour du milieu de la section
      ────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="hidden absolute left-[calc(50%_+_80px)] top-[185px] h-[720px] w-[560px] xl:block"
      >

        {/* ── Photo ── */}
        <div className="absolute left-[20px] top-0 w-[480px] h-[600px] rounded-tl-[240px] rounded-tr-[240px] rounded-bl-2xl rounded-br-2xl overflow-hidden">
          <Image
            src="/amadou.jpg"
            alt="Amadou Issiaka"
            fill
            priority
            sizes="480px"
            className="object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent pointer-events-none" />
        </div>

        {/* ── Dark fintech phone ── */}
        <div className="absolute left-[-28px] top-[315px] w-52 h-96 bg-zinc-950 rounded-[34px] shadow-2xl border-[6px] border-gray-800 overflow-hidden flex flex-col">
          <div className="absolute left-[73px] top-[14px] w-16 h-4 bg-black rounded-full z-10" />
          <div className="flex-1 px-4 pt-9 pb-4 bg-gradient-to-b from-gray-900 to-gray-950 flex flex-col gap-0.5">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-[9px] font-['Manrope'] leading-3 tracking-tight">
                {isEnglish ? "Total balance" : "Solde total"}
              </span>
              <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                <ellipse cx="4" cy="3" rx="4" ry="3" fill="#9CA3AF" />
                <ellipse cx="4" cy="3" rx="1.5" ry="1.5" fill="#111827" />
              </svg>
            </div>
            <span className="text-slate-100 text-xl font-bold font-['Sora'] leading-8 pt-0.5">
              € 12 480,00
            </span>
            <span className="text-emerald-400 text-[9px] font-['Manrope'] leading-3">
              {isEnglish ? "+ 4.2% this month" : "+ 4,2 % ce mois"}
            </span>
            <div className="relative h-20 mt-1 overflow-hidden">
              <svg viewBox="0 0 160 48" fill="none" className="absolute left-0 top-3 w-40">
                <defs>
                  <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 42 L20 36 L40 38 L60 24 L80 28 L100 16 L120 20 L140 8 L160 4" stroke="#3B82F6" strokeWidth="2.4" fill="none" />
                <path d="M0 42 L20 36 L40 38 L60 24 L80 28 L100 16 L120 20 L140 8 L160 4 L160 48 L0 48Z" fill="url(#cg)" />
              </svg>
            </div>
            <div className="flex flex-col gap-2 pt-2.5">
              {[
                { icon: "bg-blue-500/20", dot: "bg-blue-400", label: isEnglish ? "Groceries" : "Courses", amount: "- 64 €", color: "text-slate-100" },
                { icon: "bg-emerald-500/20", dot: "bg-emerald-400", label: isEnglish ? "Transfer" : "Virement", amount: "+ 900 €", color: "text-emerald-400" },
                { icon: "bg-blue-500/20", dot: "bg-blue-400", label: isEnglish ? "Utilities" : "Énergie", amount: "- 48 €", color: "text-slate-100" },
              ].map((tx) => (
                <div key={tx.label} className="flex justify-between items-center px-2.5 py-2 bg-gray-900 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 ${tx.icon} rounded-lg flex items-center justify-center`}>
                      <div className={`w-2.5 h-2 ${tx.dot} rounded-sm`} />
                    </div>
                    <span className="text-slate-100 text-[9px] font-['Manrope'] leading-3 tracking-tight">{tx.label}</span>
                  </div>
                  <span className={`${tx.color} text-[9px] font-['Manrope'] leading-3 tracking-tight`}>{tx.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── White delivery phone ── */}
        <div className="absolute left-[348px] top-[320px] w-48 h-96 bg-white rounded-[34px] shadow-2xl border-[6px] border-zinc-200 overflow-hidden flex flex-col">
          <div className="absolute left-[72px] top-[14px] w-14 h-4 bg-black rounded-full z-10" />
          <div className="relative h-32 bg-slate-200 overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent" />
            <div className="absolute left-[20px] top-[35px] w-36 h-16 border-[3px] border-blue-500" />
            <div className="absolute right-[2px] top-[22px] w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
                <path d="M4 0C1.8 0 0 1.8 0 4c0 2.5 4 6 4 6s4-3.5 4-6c0-2.2-1.8-4-4-4zm0 5.5c-.8 0-1.5-.7-1.5-1.5S3.2 2.5 4 2.5 5.5 3.2 5.5 4 4.8 5.5 4 5.5z" fill="white" />
              </svg>
            </div>
            <div className="absolute left-[12px] top-[98px] w-4 h-4 bg-gray-950 rounded-full border-2 border-white" />
          </div>
          <div className="flex-1 bg-slate-100 px-3.5 py-3 flex flex-col">
            <span className="text-gray-950 text-xs font-bold font-['Sora'] leading-5 tracking-tight">{isEnglish ? "Out for delivery" : "Livraison en cours"}</span>
            <span className="text-gray-500 text-[9px] font-['Manrope'] leading-3 tracking-tight mb-3">{isEnglish ? "Estimated arrival · 12 min" : "Arrivée estimée · 12 min"}</span>
            <div className="w-full h-1.5 bg-gray-200 rounded-full mb-3">
              <div className="w-[70%] h-1.5 bg-blue-500 rounded-full" />
            </div>
            <div className="p-2.5 bg-white rounded-xl shadow-sm flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-gray-950 text-[10px] font-semibold font-['Manrope'] leading-4">{isEnglish ? "Karim, courier" : "Karim, livreur"}</div>
                <div className="text-gray-500 text-[8px] font-['Manrope'] leading-3 mt-0.5">{isEnglish ? "Motorbike · 4.9 ★" : "Moto · 4,9 ★"}</div>
              </div>
              <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6H10M7 3L10 6L7 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="w-full py-2 bg-gray-950 rounded-full flex items-center justify-center">
              <span className="text-white text-[10px] font-semibold font-['Manrope'] leading-4">{isEnglish ? "Track order" : "Suivre la commande"}</span>
            </div>
          </div>
        </div>

        {/* ── Floating tech badges ── */}
        {[
          {
            pos: "left-[-10px] top-[86px]",
            icon: <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1L11 6L6 11L1 6L6 1Z" fill="#60A5FA" /></svg>,
            label: "Flutter",
          },
          {
            pos: "left-[390px] top-[8px]",
            icon: <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="#60A5FA" strokeWidth="1.5" /><circle cx="6" cy="6" r="1.5" fill="#60A5FA" /></svg>,
            label: "React Native",
          },
          {
            pos: "left-[408px] top-[244px]",
            icon: (
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                <rect x="0" y="0" width="5" height="6" rx="2.5" fill="#60A5FA" />
                <rect x="5" y="0" width="5" height="5" rx="2.5" fill="#60A5FA" opacity="0.6" />
                <rect x="0" y="6" width="5" height="6" rx="2.5" fill="#60A5FA" opacity="0.4" />
              </svg>
            ),
            label: "Figma",
          },
          {
            pos: "left-[190px] top-[636px]",
            icon: <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1L10 4L8 11L6 9L4 11L2 4L6 1Z" fill="#60A5FA" /></svg>,
            label: "Firebase",
          },
        ].map(({ pos, icon, label }) => (
          <div
            key={label}
            className={`absolute ${pos} h-10 px-4 bg-gray-900/75 rounded-full border border-white/10 backdrop-blur-md flex items-center gap-2`}
          >
            {icon}
            <span className="text-slate-100 text-xs font-semibold font-['Manrope'] tracking-tight">
              {label}
            </span>
          </div>
        ))}

        {/* ── Curseur Amadou ── */}
        <div className="absolute left-[320px] top-[536px] w-20 h-12">
          <svg className="absolute left-0 top-0" width="16" height="20" viewBox="0 0 16 20" fill="none">
            <path d="M2 2L2 16L6 12L8 18L10 17L8 11L14 11L2 2Z" fill="#3B82F6" stroke="white" strokeWidth="1" />
          </svg>
          <div className="absolute left-[16px] top-[22px] px-2 py-1 bg-blue-500 rounded-tr-md rounded-bl-md rounded-br-md">
            <span className="text-white text-xs font-['JetBrains_Mono'] leading-4 tracking-tight">Amadou</span>
          </div>
        </div>
      </motion.div>

      <div className="relative mx-auto mt-10 h-[320px] w-full max-w-[380px] overflow-hidden rounded-t-[180px] rounded-b-2xl sm:mt-12 sm:h-[400px] xl:hidden">
        <Image
          src="/amadou.jpg"
          alt="Amadou Issiaka"
          fill
          priority
          sizes="(max-width: 640px) 100vw, 380px"
          className="object-cover object-top"
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-gray-950 to-transparent" />
      </div>

    </section>
  );
}
