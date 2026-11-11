import { FadeUp, FadeIn } from "@/components/ui/motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function DesignToAppSection() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  return (
    <section className="w-full bg-gray-900 px-5 py-16 sm:px-8 md:py-20 lg:px-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-12">

        {/* ── Header ── */}
        <FadeUp>
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-blue-400" />
            <span className="text-blue-400 text-xs font-['JetBrains_Mono'] uppercase tracking-widest leading-4">
              {isEnglish ? "From Figma to product" : "De Figma au produit"}
            </span>
            <div className="w-8 h-px bg-blue-400" />
          </div>
          <h2 className="text-center text-slate-100 text-4xl font-bold font-['Sora'] leading-[1.1] tracking-[-0.5px] sm:text-5xl lg:text-[60px]">
            {isEnglish ? "From a Figma design to a" : "De la maquette Figma à"}
            <br />
            {isEnglish ? "real-world application" : "l’application réelle"}
          </h2>
        </div>
        </FadeUp>

        {/* ── Toggle pill ── */}
        <div className="flex justify-center">
          <div className="p-1.5 bg-gray-950 rounded-full border border-gray-800 flex items-center">
            <div className="px-6 py-2.5 bg-blue-500 rounded-full">
              <span className="text-white text-xs font-['JetBrains_Mono'] uppercase tracking-wide">
                Figma
              </span>
            </div>
            <div className="px-6 py-2.5 rounded-full">
              <span className="text-gray-400 text-xs font-['JetBrains_Mono'] uppercase tracking-wide">
                {isEnglish ? "App" : "Application"}
              </span>
            </div>
          </div>
        </div>

        {/* ── Comparison container (1000×560) ── */}
        {/* Annotations extend outside; no overflow-hidden here */}
        <FadeIn delay={0.2} className="hidden xl:block w-[1000px] h-[560px] relative">

          {/* Inner visual — overflow-hidden clips design content */}
          <div className="absolute inset-0 bg-gray-950 rounded-3xl border border-gray-800 overflow-hidden flex">

            {/* ───── LEFT panel: Figma ───── */}
            <div className="flex-1 relative">
              {/* Subtle blue radial glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_40%,rgba(96,165,250,0.10)_0%,transparent_60%)]" />

              {/* Layers panel */}
              <div className="absolute left-4 top-4 w-36 p-3 bg-gray-900 rounded-xl border border-gray-800 flex flex-col gap-1.5 z-10">
                <span className="text-slate-100 text-[10px] font-['JetBrains_Mono'] uppercase tracking-wide leading-4">
                  Layers
                </span>
                <div className="flex items-center gap-1.5 pt-0.5">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-sm shrink-0" />
                  <span className="text-gray-400 text-[10px] font-['JetBrains_Mono'] tracking-tight">Frame / Home</span>
                </div>
                <div className="flex items-center gap-1.5 pl-3 pr-1 py-0.5 bg-blue-500/20 rounded-sm">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-sm shrink-0" />
                  <span className="text-blue-400 text-[10px] font-['JetBrains_Mono'] tracking-tight">Card / Balance</span>
                </div>
                {["Title", "Chart", "CTA Button"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 pl-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-sm shrink-0" />
                    <span className="text-gray-400 text-[10px] font-['JetBrains_Mono'] tracking-tight">{item}</span>
                  </div>
                ))}
              </div>

              {/* Color tokens panel */}
              <div className="absolute left-4 bottom-4 p-3 bg-gray-900 rounded-xl border border-gray-800 flex flex-col gap-2 z-10">
                <span className="text-slate-100 text-[10px] font-['JetBrains_Mono'] uppercase tracking-wide leading-4">
                  Color tokens
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-500 rounded-sm" />
                  <div className="w-5 h-5 bg-blue-400 rounded-sm" />
                  <div className="w-5 h-5 bg-gray-950 rounded-sm border border-gray-800" />
                  <div className="w-5 h-5 bg-slate-100 rounded-sm" />
                </div>
                <span className="text-gray-400 text-[10px] font-['JetBrains_Mono'] tracking-tight">
                  primary / #3478F6
                </span>
              </div>

              {/* Wireframe design — Figma selection state */}
              <div className="absolute left-[200px] top-[70px] w-52 h-96">
                {/* Selection frame with blue border */}
                <div className="absolute inset-0 border-2 border-blue-500 overflow-hidden bg-gray-900">
                  {/* Figma corner handles */}
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-blue-500 z-10" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-blue-500 z-10" />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-blue-500 z-10" />
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-blue-500 z-10" />

                  {/* Wireframe content */}
                  <div className="p-4 flex flex-col gap-2.5 h-full">
                    <div className="w-16 h-2.5 bg-gray-800 rounded-sm" />
                    <span className="text-slate-100 text-base font-bold font-['Sora'] leading-6">€ 12 480</span>
                    <div className="h-24 bg-gradient-to-br from-blue-500/40 to-blue-500/5 rounded-xl border border-blue-500/30" />
                    <div className="flex flex-col gap-2 py-1">
                      <div className="h-9 bg-gray-800 rounded-lg" />
                      <div className="h-9 bg-gray-800 rounded-lg" />
                    </div>
                    <div className="h-9 bg-blue-500 rounded-full" />
                  </div>
                </div>

                {/* Annotation above: "Home / 390" */}
                <div className="absolute -top-6 left-0.5">
                  <span className="text-blue-400 text-[10px] font-['JetBrains_Mono'] tracking-tight">Home / 390</span>
                </div>

                {/* Dimension badge */}
                <div className="absolute -bottom-5 left-[72px] px-1.5 py-0.5 bg-blue-500 rounded-sm">
                  <span className="text-white text-[10px] font-['JetBrains_Mono'] tracking-tight">210 × 420</span>
                </div>

                {/* Measurement line right */}
                <div className="absolute -right-7 top-1/2 -translate-y-4 w-px h-8 bg-blue-500" />
                <span className="absolute -right-5 top-1/2 translate-y-0 text-blue-400 text-[9px] font-['JetBrains_Mono'] tracking-wider">
                  16
                </span>
              </div>
            </div>

            {/* ───── RIGHT panel: Real app ───── */}
            <div className="flex-1 bg-gradient-to-br from-slate-900 to-gray-950 flex justify-center items-center">
              {/* Phone mockup */}
              <div className="w-56 h-[470px] relative bg-zinc-950 rounded-[38px] border-[8px] border-gray-800 overflow-hidden">
                {/* Notch */}
                <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-10" />

                {/* Screen content */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950">
                  {/* Balance label */}
                  <div className="absolute top-11 left-5">
                    <span className="text-gray-400 text-[10px] font-['Manrope'] leading-4 tracking-tight">{isEnglish ? "Total balance" : "Solde total"}</span>
                  </div>
                  {/* Balance amount */}
                  <div className="absolute top-[58px] left-5">
                    <span className="text-slate-100 text-2xl font-bold font-['Sora'] leading-9 tracking-tight">€ 12 480</span>
                  </div>
                  {/* Chart card */}
                  <div className="absolute top-[106px] left-5 w-44 h-28 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl px-3 pt-4 overflow-hidden">
                    <span className="text-white/80 text-[9px] font-['JetBrains_Mono'] tracking-tight">{isEnglish ? "This month" : "Ce mois"}</span>
                    <svg className="absolute bottom-3 left-0 w-full" height="44" viewBox="0 0 176 44" fill="none">
                      <path d="M0 36 L22 30 L44 33 L66 22 L88 26 L110 14 L132 18 L154 7 L176 3" stroke="white" strokeWidth="2" fill="none" />
                      <path d="M0 36 L22 30 L44 33 L66 22 L88 26 L110 14 L132 18 L154 7 L176 3 L176 44 L0 44Z" fill="rgba(255,255,255,0.12)" />
                    </svg>
                  </div>
                  {/* Transactions */}
                  <div className="absolute top-[234px] left-5 w-44 flex flex-col gap-2">
                    <div className="px-3 py-2.5 bg-gray-900 rounded-xl flex justify-between items-center">
                      <span className="text-slate-100 text-[10px] font-['Manrope'] tracking-tight">{isEnglish ? "Groceries" : "Courses"}</span>
                      <span className="text-gray-400 text-[10px] font-['Manrope'] tracking-tight">- 64 €</span>
                    </div>
                    <div className="px-3 py-2.5 bg-gray-900 rounded-xl flex justify-between items-center">
                      <span className="text-slate-100 text-[10px] font-['Manrope'] tracking-tight">{isEnglish ? "Transfer" : "Virement"}</span>
                      <span className="text-emerald-400 text-[10px] font-['Manrope'] tracking-tight">+ 900 €</span>
                    </div>
                  </div>
                  {/* Envoyer button */}
                  <div className="absolute top-[324px] left-5 w-44 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-slate-100 text-xs font-semibold font-['Manrope'] tracking-tight">{isEnglish ? "Send" : "Envoyer"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Blue center divider ── */}
          <div className="absolute left-[498.5px] top-0 w-px h-full bg-blue-500 z-10 pointer-events-none" />

          {/* ── Swap button ── */}
          <div className="absolute left-[471px] top-[251px] w-14 h-14 bg-blue-500 rounded-full border-4 border-gray-900 flex items-center justify-center z-20 shadow-xl">
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <path d="M14 1L18 5H2M6 13L2 9H18" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* ── Cursor: Amadou ── */}
          <div className="absolute left-[250px] top-[295px] w-20 h-12 z-10 pointer-events-none">
            <svg className="absolute left-0 top-0" width="14" height="18" viewBox="0 0 14 18" fill="none">
              <path d="M1.5 1.5L1.5 14L4.8 10.5L6.6 16L8.3 15.4L6.5 9.5L11.5 9.5L1.5 1.5Z" fill="#3B82F6" stroke="white" strokeWidth="0.8" />
            </svg>
            <div className="absolute left-3.5 top-[20px] px-2 py-0.5 bg-blue-500 rounded-tr-md rounded-bl-md rounded-br-md">
              <span className="text-white text-[10px] font-['JetBrains_Mono'] tracking-tight">Amadou</span>
            </div>
          </div>

          {/* ── Annotation 01 — Design tokens (left) ── */}
          <div className="absolute left-[-170px] top-[60px] flex items-center z-10 pointer-events-none">
            <div>
              <span className="text-blue-500 text-xs font-['JetBrains_Mono'] uppercase tracking-wide">01</span>
              <span className="text-blue-400 text-xs font-['JetBrains_Mono'] uppercase tracking-wide">{isEnglish ? " Design tokens" : " Tokens de design"}</span>
            </div>
            <div className="w-14 h-px bg-blue-500 ml-3 shrink-0" />
            <div className="w-2 h-2 bg-blue-500 rounded-full shrink-0" />
          </div>

          {/* ── Annotation 02 — Composants (right) ── */}
          <div className="absolute left-[997px] top-[250px] flex items-center z-10 pointer-events-none">
            <div className="w-2 h-2 bg-blue-500 rounded-full shrink-0" />
            <div className="w-14 h-px bg-blue-500 mx-3 shrink-0" />
            <div>
              <span className="text-blue-500 text-xs font-['JetBrains_Mono'] uppercase tracking-wide">02</span>
              <span className="text-blue-400 text-xs font-['JetBrains_Mono'] uppercase tracking-wide">{isEnglish ? " Components" : " Composants"}</span>
            </div>
          </div>

          {/* ── Annotation 03 — Animations (left) ── */}
          <div className="absolute left-[-170px] top-[463px] flex items-center z-10 pointer-events-none">
            <div>
              <span className="text-blue-500 text-xs font-['JetBrains_Mono'] uppercase tracking-wide">03</span>
              <span className="text-blue-400 text-xs font-['JetBrains_Mono'] uppercase tracking-wide">{isEnglish ? " Animations" : " Animations"}</span>
            </div>
            <div className="w-14 h-px bg-blue-500 ml-3 shrink-0" />
            <div className="w-2 h-2 bg-blue-500 rounded-full shrink-0" />
          </div>

        </FadeIn>

        <div className="grid w-full max-w-3xl grid-cols-1 gap-4 xl:hidden sm:grid-cols-2">
          <div className="rounded-3xl border border-gray-800 bg-gray-950 p-5 sm:p-6">
            <span className="text-xs uppercase tracking-widest text-blue-400">Figma</span>
            <div className="mx-auto mt-5 flex h-56 max-w-44 flex-col gap-3 rounded-[28px] border-4 border-gray-700 bg-gray-900 p-4">
              <div className="h-3 w-16 rounded bg-gray-700" />
              <div className="rounded-xl bg-blue-500/30 p-4">
                <span className="text-xs text-gray-300">{isEnglish ? "Total balance" : "Solde total"}</span>
                <div className="mt-2 h-3 w-24 rounded bg-blue-400" />
              </div>
              <div className="h-10 rounded-lg bg-gray-800" />
              <div className="h-10 rounded-lg bg-gray-800" />
              <div className="mt-auto h-8 rounded-full bg-blue-500" />
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-400">
              {isEnglish ? "Validate the layout and user journey before development." : "Valider l'interface et le parcours avant le développement."}
            </p>
          </div>
          <div className="rounded-3xl border border-gray-800 bg-gray-950 p-5 sm:p-6">
            <span className="text-xs uppercase tracking-widest text-blue-400">{isEnglish ? "Application" : "Application"}</span>
            <div className="mx-auto mt-5 flex h-56 max-w-44 flex-col gap-3 rounded-[28px] border-4 border-gray-700 bg-gray-900 p-4">
              <div className="h-3 w-16 rounded bg-gray-700" />
              <span className="text-xs text-gray-300">{isEnglish ? "Total balance" : "Solde total"}</span>
              <strong className="text-xl text-white">€ 12 480</strong>
              <div className="h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700" />
              <div className="h-8 rounded-lg bg-gray-800" />
              <div className="mt-auto h-8 rounded-full bg-blue-500" />
            </div>
            <p className="mt-4 text-sm leading-6 text-gray-400">
              {isEnglish ? "Build, test, and ship the real mobile experience." : "Développer, tester et livrer l'expérience mobile réelle."}
            </p>
          </div>
        </div>

        {/* ── Bottom legend ── */}
        <div className="flex justify-center items-center gap-10">
          {[
            { label: "Tokens", w: "w-2.5", h: "h-2.5" },
            { label: isEnglish ? "Components" : "Composants", w: "w-3", h: "h-2.5" },
            { label: isEnglish ? "Animations" : "Animations", w: "w-3", h: "h-2.5" },
          ].map(({ label, w, h }) => (
            <div key={label} className="flex items-center gap-2">
              <div className={`${w} ${h} bg-blue-500 rounded-sm`} />
              <span className="text-gray-400 text-xs font-['JetBrains_Mono'] uppercase tracking-wide leading-4">
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
