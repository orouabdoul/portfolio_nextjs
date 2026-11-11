function TechRow({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="h-11 px-4 bg-gray-950 rounded-xl border border-gray-800 flex items-center gap-3">
      {icon}
      <span className="text-slate-100 text-sm font-['Manrope'] leading-5 tracking-tight">
        {label}
      </span>
    </div>
  );
}

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function TechStackSection() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  return (
    <section className="w-full bg-gray-900 px-5 py-16 sm:px-8 md:py-20 lg:px-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-6">

        {/* ── Header ── */}
        <FadeUp>
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-blue-400" />
          <span className="text-blue-400 text-xs font-['JetBrains_Mono'] uppercase tracking-widest leading-4">
            {isEnglish ? "03 — Technology stack" : "03 — Stack technique"}
          </span>
        </div>
        <h2 className="text-slate-100 text-4xl font-bold font-['Sora'] leading-[1.1] tracking-[-0.5px] sm:text-5xl lg:text-[60px]">
          {isEnglish ? "A stack chosen for a product" : "Une stack choisie pour un produit"}
          <br />
          {isEnglish ? "built to last" : "qui dure"}
        </h2>
        </FadeUp>

        {/* ── 5 columns ── */}
        <StaggerContainer className="grid grid-cols-1 gap-8 items-start pt-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 lg:gap-5 lg:pt-10">

          {/* ━━━ Column 1 — Mobile Engineering ━━━ */}
          <StaggerItem className="flex-1 flex flex-col">
            <span className="text-blue-400 text-xs font-['JetBrains_Mono'] uppercase tracking-widest leading-4">
              Mobile Engineering
            </span>
            <p className="text-gray-400 text-sm font-['Manrope'] leading-6 mt-3">
              {isEnglish ? "Why: one codebase to ship" : "Pourquoi : une seule base de code"}
              <br />{isEnglish ? "iOS and Android faster." : "pour livrer iOS et Android plus vite."}
            </p>

            {/* Flutter card — active */}
            <div className="relative h-44 p-5 mt-6 bg-slate-900 rounded-3xl border-2 border-blue-500 shadow-[0_20px_40px_rgba(52,120,246,0.35)] overflow-hidden flex flex-col gap-3 shrink-0">
              {/* Flutter simplified logo */}
              <div className="w-11 h-11 relative overflow-hidden shrink-0">
                <div className="absolute w-8 h-6 left-1.5 top-0.5 bg-sky-400" />
                <div className="absolute w-5 h-4 left-[18px] top-[22px] bg-sky-700" />
                <div className="absolute w-3.5 h-3.5 left-3 top-[22px] bg-sky-400" />
              </div>
              <span className="text-slate-100 text-xl font-bold font-['Sora'] leading-8">Flutter</span>
              {/* "Utilisé pour" banner */}
              <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 bg-blue-500 flex flex-col gap-0.5">
                <span className="text-white/80 text-[10px] font-medium font-['JetBrains_Mono'] uppercase leading-3 tracking-wide">
                  {isEnglish ? "Used for" : "Utilisé pour"}
                </span>
                <span className="text-white text-xs font-medium font-['Manrope'] leading-4">
                  {isEnglish ? "Fluid iOS & Android interfaces" : "Interfaces fluides iOS & Android"}
                </span>
              </div>
            </div>

            {/* React Native card */}
            <div className="h-44 p-5 mt-4 bg-gray-950 rounded-3xl border border-gray-800 flex flex-col gap-3 shrink-0">
              <div className="w-11 h-11 rounded-full border-[3px] border-cyan-300 flex items-center justify-center shrink-0">
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
                  <ellipse cx="11" cy="10" rx="9.5" ry="3.4" stroke="#67E8F9" strokeWidth="1.3" />
                  <ellipse cx="11" cy="10" rx="9.5" ry="3.4" stroke="#67E8F9" strokeWidth="1.3" transform="rotate(60 11 10)" />
                  <ellipse cx="11" cy="10" rx="9.5" ry="3.4" stroke="#67E8F9" strokeWidth="1.3" transform="rotate(120 11 10)" />
                  <circle cx="11" cy="10" r="2" fill="#67E8F9" />
                </svg>
              </div>
              <span className="text-slate-100 text-xl font-bold font-['Sora'] leading-8">React Native</span>
            </div>

            {/* Language pills */}
            <div className="flex flex-col gap-2 mt-4">
              <TechRow
                label="Dart"
                icon={
                  <div className="w-5 h-5 bg-sky-600 rounded-sm flex items-center justify-center shrink-0">
                    <span className="text-slate-100 text-[10px] font-bold font-['Manrope'] leading-4">D</span>
                  </div>
                }
              />
              <TechRow
                label="Expo"
                icon={
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shrink-0">
                    <span className="text-gray-950 text-[10px] font-bold font-['Manrope'] leading-4">E</span>
                  </div>
                }
              />
            </div>

          </StaggerItem>
          {/* ━━━ Column 2 — Product Design ━━━ */}
          <StaggerItem className="flex-1 flex flex-col">
            <span className="text-blue-400 text-xs font-['JetBrains_Mono'] uppercase tracking-widest leading-4">
              Product Design
            </span>
            <p className="text-gray-400 text-sm font-['Manrope'] leading-6 mt-3">
              {isEnglish ? "Why: validate user journeys" : "Pourquoi : valider les parcours"}
              <br />{isEnglish ? "before expensive development." : "avant d'écrire du code coûteux."}
            </p>

            {/* Figma card */}
            <div className="h-44 p-5 mt-6 bg-gray-950 rounded-3xl border border-gray-800 flex flex-col gap-3 shrink-0">
              {/* Figma logo — 5 colored shapes */}
              <div className="w-6 flex flex-col shrink-0">
                <div className="flex">
                  <div className="w-3 h-3 bg-orange-600 rounded-tl-full" />
                  <div className="w-3 h-3 bg-red-400 rounded-tr-full" />
                </div>
                <div className="flex">
                  <div className="w-3 h-3 bg-purple-500 rounded-l-full" />
                  <div className="w-3 h-3 bg-cyan-400 rounded-r-full" />
                </div>
                <div className="w-3 h-3 bg-emerald-500 rounded-tl-full rounded-bl-full rounded-br-full" />
              </div>
              <span className="text-slate-100 text-xl font-bold font-['Sora'] leading-8">Figma</span>
            </div>

          </StaggerItem>
          {/* ━━━ Column 3 — Data & Cloud ━━━ */}
          <StaggerItem className="flex-1 flex flex-col">
            <span className="text-blue-400 text-xs font-['JetBrains_Mono'] uppercase tracking-widest leading-4">
              Data &amp; Cloud
            </span>
            <p className="text-gray-400 text-sm font-['Manrope'] leading-6 mt-3">
              {isEnglish ? "Why: authentication, storage," : "Pourquoi : authentification, stockage"}
              <br />{isEnglish ? "and real-time features, without reinventing the wheel." : "et temps réel sans réinventer la roue."}
            </p>

            <div className="flex flex-col gap-2 mt-6">
              <TechRow
                label="Firebase"
                icon={<div className="w-4 h-4 bg-amber-400 rounded-sm shrink-0" />}
              />
              <TechRow
                label="Supabase"
                icon={<div className="w-3.5 h-4 bg-emerald-400 rounded-sm shrink-0" />}
              />
              <TechRow
                label="MySQL"
                icon={<div className="w-3.5 h-4 bg-cyan-700 rounded-sm shrink-0" />}
              />
            </div>

          </StaggerItem>
          {/* ━━━ Column 5 — Outils ━━━ */}
          <StaggerItem className="flex-1 flex flex-col">
            <span className="text-blue-400 text-xs font-['JetBrains_Mono'] uppercase tracking-widest leading-4">
              {isEnglish ? "Tools" : "Outils"}
            </span>
            <p className="text-gray-400 text-sm font-['Manrope'] leading-6 mt-3">
              {isEnglish ? "Why: version-controlled code" : "Pourquoi : un code versionné et"}
              <br />{isEnglish ? "that's collaborative and easy to maintain." : "collaboratif, simple à reprendre."}
            </p>

            <div className="flex flex-col gap-2 mt-6">
              <TechRow
                label="Git"
                icon={<div className="w-4 h-4 bg-red-500 rounded-sm shrink-0" />}
              />
              <TechRow
                label="GitHub"
                icon={<div className="w-4 h-4 bg-white rounded-sm shrink-0" />}
              />
            </div>

          </StaggerItem>

        </StaggerContainer>
      </div>
    </section>
  );
}
