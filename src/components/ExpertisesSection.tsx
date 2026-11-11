function FlutterIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M2 11L11 2L20 11H14L11 8L8 11H2Z" fill="#54C5F8" />
      <path d="M8 11L11 8L14 11L11 14L8 11Z" fill="#29B6F6" />
      <path d="M2 11H8L11 14L8 18H2V11Z" fill="#0175C2" />
      <path d="M8 18L11 14L14 18H8Z" fill="#54C5F8" />
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
      <ellipse cx="12" cy="11" rx="10.5" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" />
      <ellipse cx="12" cy="11" rx="10.5" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 12 11)" />
      <ellipse cx="12" cy="11" rx="10.5" ry="3.8" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 12 11)" />
      <circle cx="12" cy="11" r="2.2" fill="#61DAFB" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" className="shrink-0">
      <path d="M0 5H15M11 1L15 5L11 9" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function ExpertisesSection() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  return (
    <section id="expertises" className="w-full bg-gray-950 px-5 py-16 sm:px-8 md:py-20 lg:px-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 md:gap-16">

        {/* ── Header ── */}
        <FadeUp>
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-end">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-blue-400" />
              <span className="text-blue-400 text-xs font-['JetBrains_Mono'] uppercase tracking-widest leading-4">
                {isEnglish ? "Expertise" : "Expertises"}
              </span>
            </div>
            <h2 className="text-slate-100 text-4xl font-bold font-['Sora'] leading-[1.1] tracking-[-0.5px] sm:text-5xl lg:text-[60px]">
              {isEnglish ? "Three pillars for a" : "Trois piliers pour un"}
              <br />
              {isEnglish ? "useful, dependable product" : "produit utile et solide"}
            </h2>
          </div>
          <div className="w-full pb-1 lg:w-96">
            <p className="text-gray-400 text-base font-['Manrope'] leading-7">
              {isEnglish
                ? "A strong product is more than its appearance: it must be clear, useful, reliable, and ready to evolve. I connect user needs, experience design, and technical delivery."
                : "Un produit performant ne se limite pas à son apparence : il doit être clair, utile, fiable et prêt à évoluer. J’assure la continuité entre le besoin, l’expérience utilisateur et la livraison technique."}
            </p>
          </div>
        </div>
        </FadeUp>

        {/* ── 2 × 2 cards grid ── */}
        <StaggerContainer className="grid grid-cols-1 gap-4 lg:grid-cols-2">

          {/* ━━━ Card 01 — Mobile Engineering (blue) ━━━ */}
          <StaggerItem>
          <div className="min-h-[400px] p-6 bg-blue-500 rounded-3xl overflow-hidden relative flex flex-col gap-4 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-default sm:min-h-[420px] sm:p-8 lg:h-[460px] lg:p-10">
            <span className="text-white/70 text-xs font-['JetBrains_Mono'] uppercase tracking-widest leading-4">
              01 · Mobile Engineering
            </span>
            <h3 className="max-w-[500px] text-slate-100 text-3xl font-bold font-['Sora'] leading-9 sm:text-4xl sm:leading-10">
              {isEnglish ? "A solid foundation for" : "Une base solide pour"}
              <br />
              {isEnglish ? "mobile apps that are" : "des apps mobiles"}
              <br />
              {isEnglish ? "reliable and fast" : "fiables et rapides"}
            </h3>

            {/* Framework badges */}
            <div className="flex flex-wrap items-center gap-4 pt-4 sm:gap-6">
              {[
                { label: "Flutter", icon: <FlutterIcon /> },
                { label: "React Native", icon: <ReactIcon /> },
              ].map(({ label, icon }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0">
                    {icon}
                  </div>
                  <span className="text-lg font-bold font-['Sora'] leading-7 tracking-tight text-slate-100 sm:text-xl sm:leading-8">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Language tags */}
            <div className="flex items-center gap-2 pt-2">
              {["Dart", "Expo"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-white/20 rounded-full text-slate-100 text-xs font-['JetBrains_Mono'] tracking-tight">
                  {tag}
                </span>
              ))}
            </div>

            {/* Decorative phone mockup */}
            <div className="hidden xl:block absolute left-[500px] top-[36px] w-48 h-96 bg-gray-950 rounded-[32px] border-[6px] border-gray-900 overflow-hidden">
              <div className="absolute top-6 left-4 w-16 h-3 bg-gray-800 rounded" />
              <div className="absolute top-12 left-4 w-36 h-24 bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl" />
              <div className="absolute top-40 left-4 flex gap-2 w-36">
                <div className="flex-1 h-16 bg-gray-800 rounded-xl" />
                <div className="flex-1 h-16 bg-gray-800 rounded-xl" />
              </div>
              <div className="absolute top-60 left-4 w-36 h-8 bg-blue-500 rounded-full" />
              <div className="absolute top-[286px] left-4 w-28 h-3 bg-gray-800 rounded" />
              <div className="absolute top-[302px] left-4 w-20 h-3 bg-gray-800 rounded" />
            </div>
          </div>

          </StaggerItem>

          {/* ━━━ Card 02 — UI/UX & Product Design (white) ━━━ */}
          <StaggerItem>
          <div className="min-h-[400px] p-6 bg-slate-100 rounded-3xl overflow-hidden flex flex-col gap-4 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(0,0,0,0.25)] transition-all duration-300 cursor-default sm:min-h-[420px] sm:p-8 lg:h-[460px] lg:p-10">
            <span className="text-blue-500 text-xs font-['JetBrains_Mono'] uppercase tracking-widest leading-4">
              {isEnglish ? "02 · UI/UX & Product Design" : "02 · UI/UX & Product Design"}
            </span>
            <h3 className="text-gray-950 text-2xl font-bold font-['Sora'] leading-8 sm:text-3xl sm:leading-9">
              {isEnglish ? "Journeys designed to" : "Des parcours pensés pour"}
              <br />
              {isEnglish ? "guide, reassure, and convert" : "guider, rassurer et convertir"}
            </h3>

            {/* Wireframe previews */}
            <div className="hidden items-center gap-3 mt-4 sm:flex">
              {/* Frame 1 — selected */}
              <div className="relative w-24 h-32 bg-white rounded-md border-2 border-blue-500 shrink-0">
                <div className="absolute -top-1.5 -left-1.5 w-2.5 h-2.5 bg-white border border-blue-500" />
                <div className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-white border border-blue-500" />
                <div className="absolute -bottom-1.5 -left-1.5 w-2.5 h-2.5 bg-white border border-blue-500" />
                <div className="absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 bg-white border border-blue-500" />
                <div className="absolute top-2.5 left-2.5 right-2.5 h-10 bg-blue-100 rounded-sm" />
                <div className="absolute top-[58px] left-2.5 right-2.5 h-2 bg-gray-200 rounded-sm" />
                <div className="absolute top-[66px] left-2.5 w-12 h-2 bg-gray-200 rounded-sm" />
                <div className="absolute top-[82px] left-2.5 right-2.5 h-5 bg-blue-500 rounded-full" />
              </div>

              <ArrowRight />

              {/* Frame 2 */}
              <div className="w-24 h-32 bg-white rounded-md border border-gray-300 p-2 flex flex-col gap-1.5 shrink-0">
                <div className="w-10 h-2 bg-gray-300 rounded-sm" />
                <div className="border border-gray-400 h-14 rounded-sm flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-gray-400 rounded-sm" />
                </div>
                <div className="h-2 bg-gray-200 rounded-sm" />
                <div className="w-12 h-2 bg-gray-200 rounded-sm" />
              </div>

              <ArrowRight />

              {/* Frame 3 */}
              <div className="relative w-24 h-32 bg-white rounded-md border border-gray-300 shrink-0">
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1">
                  <div className="w-4 h-4 bg-blue-500/30 rounded-full shrink-0" />
                  <div className="flex-1 h-2 bg-gray-200 rounded-sm" />
                </div>
                <div className="absolute top-9 left-2.5 right-2.5 h-2 bg-gray-200 rounded-sm" />
                <div className="absolute top-[52px] left-2.5 right-2.5 h-2 bg-gray-200 rounded-sm" />
                <div className="absolute top-[66px] left-2.5 w-10 h-2 bg-gray-200 rounded-sm" />
                <div className="absolute top-[82px] left-2.5 right-2.5 h-6 bg-gray-950 rounded-sm" />
              </div>
            </div>

            {/* Tool tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="h-8 px-3 py-1.5 bg-gray-950 rounded-full flex items-center gap-1.5">
                <svg width="8" height="10" viewBox="0 0 8 10" fill="none">
                  <rect x="0" y="0" width="4" height="5" rx="2" fill="white" />
                  <rect x="4" y="0" width="4" height="4" rx="2" fill="white" fillOpacity="0.7" />
                  <rect x="0" y="5" width="4" height="5" rx="2" fill="white" fillOpacity="0.5" />
                </svg>
                <span className="text-white text-xs font-['JetBrains_Mono'] tracking-tight">Figma</span>
              </span>
              {(isEnglish
                ? ["Wireframing", "Prototyping", "User journeys"]
                : ["Wireframing", "Prototypage", "Parcours utilisateurs"]).map((tag) => (
                <span key={tag} className="h-8 px-3 py-1.5 rounded-full border border-gray-950/20 text-gray-950 text-xs font-['JetBrains_Mono'] tracking-tight flex items-center">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          </StaggerItem>

          {/* ━━━ Card 03 — Data & Cloud (gray-900) ━━━ */}
          <StaggerItem className="lg:col-span-2">
          <div className="min-h-80 p-6 bg-gray-900 rounded-3xl border border-gray-800 overflow-hidden relative flex flex-col gap-4 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(0,0,0,0.4)] hover:border-blue-500/30 transition-all duration-300 cursor-default sm:p-8 lg:h-96 lg:p-10">
            <span className="text-blue-400 text-xs font-['JetBrains_Mono'] uppercase tracking-widest leading-4">
              03 · Data &amp; Cloud
            </span>
            <h3 className="text-slate-100 text-2xl font-bold font-['Sora'] leading-8 sm:text-3xl sm:leading-9">
              {isEnglish ? "Authentication," : "Authentification,"}
              <br />
              {isEnglish ? "storage, and real-time data" : "stockage et temps réel"}
              <br />
              {isEnglish ? "ready to use" : "prêts à l’emploi"}
            </h3>

            {/* Service tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {["Firebase", "Supabase", "MySQL"].map((tag) => (
                <span key={tag} className="px-3.5 py-2 bg-blue-500/20 rounded-full border border-blue-500/40 text-blue-400 text-xs font-['JetBrains_Mono'] tracking-tight flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Decorative cloud topology */}
            <div className="hidden sm:block absolute right-0 top-0 w-72 h-full overflow-hidden pointer-events-none">
              <svg width="288" height="384" viewBox="0 0 288 384" fill="none" opacity="0.65">
                {/* Lines from corner nodes to CLOUD center */}
                <line x1="72" y1="90" x2="152" y2="175" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.4" />
                <line x1="228" y1="96" x2="192" y2="175" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.4" />
                <line x1="66" y1="284" x2="152" y2="225" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.4" />
                <line x1="232" y1="278" x2="192" y2="225" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.4" />
                {/* CLOUD center square */}
                <rect x="140" y="162" width="72" height="62" fill="#3B82F6" rx="3" />
                <text x="176" y="198" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace" fontWeight="700">CLOUD</text>
                {/* AUTH node */}
                <rect x="40" y="60" width="52" height="44" fill="#111827" stroke="#60A5FA" strokeWidth="1" rx="2" />
                <text x="66" y="86" textAnchor="middle" fill="#60A5FA" fontSize="10" fontFamily="monospace">AUTH</text>
                {/* DB node */}
                <rect x="204" y="68" width="52" height="44" fill="#111827" stroke="#60A5FA" strokeWidth="1" rx="2" />
                <text x="230" y="94" textAnchor="middle" fill="#60A5FA" fontSize="10" fontFamily="monospace">DB</text>
                {/* FILES node */}
                <rect x="34" y="256" width="52" height="44" fill="#111827" stroke="#60A5FA" strokeWidth="1" rx="2" />
                <text x="60" y="282" textAnchor="middle" fill="#60A5FA" fontSize="10" fontFamily="monospace">FILES</text>
                {/* LIVE node */}
                <rect x="210" y="250" width="52" height="44" fill="#111827" stroke="#60A5FA" strokeWidth="1" rx="2" />
                <text x="236" y="276" textAnchor="middle" fill="#60A5FA" fontSize="10" fontFamily="monospace">LIVE</text>
              </svg>
            </div>
          </div>
          </StaggerItem>

        </StaggerContainer>
      </div>
    </section>
  );
}
