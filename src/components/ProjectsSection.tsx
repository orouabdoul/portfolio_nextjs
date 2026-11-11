function ArrowRight({ color = "white" }: { color?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7H12M8 3L12 7L8 11" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CursorAmadou() {
  const { language } = useLanguage();
  return (
    <div className="absolute left-[481px] top-[491px] flex items-start z-10">
      <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
        <path d="M1.5 1.5L1.5 14L4.8 10.5L6.6 16L8.3 15.4L6.5 9.5L11.5 9.5L1.5 1.5Z" fill="#3B82F6" stroke="white" strokeWidth="0.8" />
      </svg>
      <div className="ml-1 mt-5 px-3 py-1.5 bg-blue-500 rounded-full flex items-center gap-2">
        <div className="w-3 h-2.5 bg-white rounded-sm opacity-90" />
        <span className="text-white text-xs font-['JetBrains_Mono'] tracking-tight">{language === "en" ? "View project" : "Voir le projet"}</span>
      </div>
    </div>
  );
}

function CtaButton({ label }: { label: string }) {
  const { language } = useLanguage();
  return (
    <button className="w-full h-14 bg-blue-500 rounded-full flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-400 transition-colors duration-200 shrink-0 sm:w-56">
      <span className="text-white text-base font-semibold font-['Sora'] tracking-tight">
        {language === "en"
          ? label === "Décrire mon projet" ? "Describe your project" : "Read the case study"
          : label}
      </span>
      <ArrowRight />
    </button>
  );
}

function ProjectInfo({
  num,
  category,
  title,
  problem,
  solution,
  role,
  tags,
  result,
}: {
  num: string;
  category: string;
  title: string;
  problem: string;
  solution: string;
  role: string;
  tags: string[];
  result: string;
}) {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  return (
    <div className="w-full min-w-0 flex-1 pt-2 flex flex-col gap-2">
      <span className="text-blue-500/30 text-8xl font-bold font-['Sora'] leading-[96px]">{num}</span>
      <span className="text-blue-400 text-xs font-['JetBrains_Mono'] uppercase tracking-widest leading-4">{category}</span>
      <h3 className="text-slate-100 text-3xl font-bold font-['Sora'] leading-9 mt-1.5 sm:text-4xl sm:leading-10">{title}</h3>

      <div className="mt-2 rounded-2xl border border-blue-500/20 bg-blue-500/5 px-4 py-3">
        <span className="text-blue-400 text-[10px] font-['JetBrains_Mono'] uppercase tracking-[0.18em] leading-4">{isEnglish ? "Outcome" : "Impact"}</span>
        <p className="mt-2 text-slate-100 text-lg font-semibold font-['Sora'] leading-6">{result}</p>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="pl-4 border-l-2 border-blue-500 flex flex-col gap-0.5">
          <span className="text-blue-400 text-xs font-['JetBrains_Mono'] uppercase tracking-wide leading-4">{isEnglish ? "Challenge" : "Problème"}</span>
          <p className="text-gray-400 text-base font-['Manrope'] leading-6">{problem}</p>
        </div>
        <div className="pl-4 border-l-2 border-blue-500 flex flex-col gap-0.5">
          <span className="text-blue-400 text-xs font-['JetBrains_Mono'] uppercase tracking-wide leading-4">{isEnglish ? "Approach" : "Solution"}</span>
          <p className="text-gray-400 text-base font-['Manrope'] leading-6">{solution}</p>
        </div>
      </div>

      <div className="flex flex-col gap-1 mt-4">
        <span className="text-gray-400 text-xs font-['JetBrains_Mono'] uppercase tracking-wide leading-4">{isEnglish ? "My role" : "Mon rôle"}</span>
        <span className="text-slate-100 text-sm font-semibold font-['Sora'] leading-5">{role}</span>
      </div>

      <div className="flex items-center gap-2 mt-3 pb-6 flex-wrap">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1.5 rounded-full border border-gray-800 text-gray-400 text-xs font-['JetBrains_Mono'] tracking-tight">
            {tag}
          </span>
        ))}
      </div>

      <CtaButton label="Lire l'étude de cas" />
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CARD 01 — FinanceFlow (dark, 3 phones)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function FinanceFlowCard() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  return (
    <div className="relative h-[270px] w-full shrink-0 overflow-hidden rounded-3xl sm:h-[500px] md:h-[610px] lg:h-[640px]">
    <div className="absolute left-0 top-0 origin-top-left scale-[0.37] sm:scale-[0.78] md:scale-[0.95] lg:scale-100">
    <div className="w-[700px] h-[640px] relative bg-gradient-to-br from-slate-800 via-gray-900 to-gray-900 rounded-3xl border border-gray-800 overflow-hidden shrink-0">
      {/* Subtle left-side blue tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-transparent pointer-events-none" />

      {/* Scene label */}
      <span className="absolute left-[25px] top-[25px] text-blue-400/80 text-xs font-['JetBrains_Mono'] uppercase tracking-wide leading-4">
        Scene / FinanceFlow
      </span>

      {/* ── Phone 01 — Savings (left, faded) ── */}
      <div className="absolute left-3 top-[128px] w-52 h-96 bg-zinc-950 rounded-[34px] shadow-2xl border-[6px] border-gray-800 overflow-hidden opacity-80 flex flex-col">
        <div className="absolute top-[14px] left-[66px] w-16 h-3.5 bg-black rounded-full" />
        <div className="flex-1 px-4 pt-9 pb-4 bg-gradient-to-b from-gray-900 to-gray-950 flex flex-col gap-3">
          <span className="text-slate-100 text-xs font-bold font-['Sora'] leading-5">{isEnglish ? "Savings" : "Épargne"}</span>
          <div className="h-24 bg-gradient-to-br from-blue-500/50 to-blue-500/10 rounded-2xl" />
          <div className="flex flex-col gap-2">
            <div className="h-9 bg-gray-900 rounded-xl" />
            <div className="h-9 bg-gray-900 rounded-xl" />
            <div className="h-9 bg-gray-900 rounded-xl" />
          </div>
        </div>
      </div>

      {/* ── Phone 02 — Balance (center, main) ── */}
      <div className="absolute left-[226px] top-[61px] w-64 h-[510px] bg-zinc-950 rounded-[40px] shadow-2xl border-[8px] border-gray-800 overflow-hidden flex flex-col">
        <div className="absolute top-[17px] left-[85px] w-20 h-5 bg-black rounded-full" />
        <div className="flex-1 px-5 pt-12 pb-5 bg-gradient-to-b from-gray-900 to-gray-950 flex flex-col">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-[10px] font-['Manrope'] tracking-tight leading-4">{isEnglish ? "Total balance" : "Solde total"}</span>
            <div className="w-2 h-2.5 bg-gray-400 rounded-sm opacity-60" />
          </div>
          <span className="text-slate-100 text-3xl font-bold font-['Sora'] leading-10 pt-1">€ 12 480,00</span>
          <span className="text-emerald-400 text-[10px] font-['Manrope'] leading-4">{isEnglish ? "+ 4.2% this month" : "+ 4,2 % ce mois"}</span>

          {/* Chart */}
          <div className="h-24 relative overflow-hidden mt-1">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 192 96" fill="none">
              <path d="M0 72 L24 60 L48 65 L72 44 L96 50 L120 30 L144 36 L168 18 L192 14" stroke="#3B82F6" strokeWidth="2.8" fill="none" />
              <path d="M0 72 L24 60 L48 65 L72 44 L96 50 L120 30 L144 36 L168 18 L192 14 L192 96 L0 96Z" fill="rgba(59,130,246,0.18)" />
            </svg>
          </div>

          {/* Transactions */}
          <div className="flex flex-col gap-2 mt-3">
            {[
              { label: isEnglish ? "Groceries" : "Courses", amount: "- 64 €", color: "text-slate-100", iconBg: "bg-blue-500/20", iconColor: "bg-blue-400" },
              { label: isEnglish ? "Transfer" : "Virement", amount: "+ 900 €", color: "text-emerald-400", iconBg: "bg-emerald-500/20", iconColor: "bg-emerald-400" },
              { label: isEnglish ? "Utilities" : "Énergie", amount: "- 48 €", color: "text-slate-100", iconBg: "bg-blue-500/20", iconColor: "bg-blue-400" },
            ].map((tx) => (
              <div key={tx.label} className="px-3 py-2.5 bg-gray-900 rounded-xl flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className={`w-7 h-7 ${tx.iconBg} rounded-lg flex items-center justify-center`}>
                    <div className={`w-3 h-2.5 ${tx.iconColor} rounded-sm`} />
                  </div>
                  <span className="text-slate-100 text-[10px] font-['Manrope'] tracking-tight">{tx.label}</span>
                </div>
                <span className={`${tx.color} text-[10px] font-['Manrope'] tracking-tight`}>{tx.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Phone 03 — Budget (right, faded) ── */}
      <div className="absolute left-[480px] top-[140px] w-48 h-96 bg-zinc-950 rounded-[32px] shadow-2xl border-[6px] border-gray-800 overflow-hidden flex flex-col">
        <div className="absolute top-[14px] left-[64px] w-16 h-3.5 bg-black rounded-full" />
        <div className="flex-1 px-4 pt-9 pb-4 bg-gradient-to-b from-gray-900 to-gray-950 flex flex-col items-center gap-3">
          <span className="text-slate-100 text-xs font-bold font-['Sora'] self-start leading-4">Budget</span>
          <div className="w-24 h-24 rounded-full border-[10px] border-blue-500" />
          <div className="w-full flex flex-col gap-2 py-1">
            <div className="h-2.5 bg-gray-900 rounded-sm" />
            <div className="w-28 h-2.5 bg-gray-900 rounded-sm" />
            <div className="w-20 h-2.5 bg-gray-900 rounded-sm" />
          </div>
          <div className="w-full h-8 bg-blue-500 rounded-full" />
        </div>
      </div>

      {/* Cursor + "Voir le projet" */}
      <CursorAmadou />
    </div>
    </div>
    </div>
  );
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CARD 02 — QuickBite (blue, comparison + phone)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
function QuickBiteCard() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  return (
    <div className="relative h-[270px] w-full shrink-0 overflow-hidden rounded-3xl sm:h-[500px] md:h-[610px] lg:h-[640px]">
    <div className="absolute left-0 top-0 origin-top-left scale-[0.37] sm:scale-[0.78] md:scale-[0.95] lg:scale-100">
    <div className="w-[700px] h-[640px] relative bg-blue-500 rounded-3xl overflow-hidden shrink-0">
      {/* Subtle white left tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />

      {/* Scene label */}
      <span className="absolute left-6 top-6 text-white/80 text-xs font-['JetBrains_Mono'] uppercase tracking-wide leading-4">
        Scene / QuickBite
      </span>

      {/* "Avant / Après" badge */}
      <div className="absolute right-6 top-6 px-2 py-1 bg-white rounded-sm">
        <span className="text-blue-500 text-[10px] font-['JetBrains_Mono'] tracking-tight">Avant / Après</span>
      </div>

      {/* ── Before/After comparison card ── */}
      <div className="absolute left-[30px] top-[110px] w-72 h-96 bg-white/95 rounded-2xl overflow-hidden">
        <span className="absolute left-3 top-3 text-gray-950/60 text-[10px] font-['JetBrains_Mono'] uppercase tracking-wide leading-4">
          {isEnglish ? "Before / After" : "Avant / Après"}
        </span>

        {/* LEFT: Wireframe */}
        <div className="absolute left-0 top-0 w-36 h-96 bg-slate-200 px-3 pt-10 pb-3 flex flex-col gap-2">
          <div className="h-16 border border-gray-400 rounded-sm flex items-center justify-center">
            <div className="w-4 h-3.5 bg-gray-400 rounded-sm opacity-80" />
          </div>
          <div className="h-2.5 bg-gray-300 rounded-sm" />
          <div className="w-20 h-2.5 bg-gray-300 rounded-sm" />
          <div className="h-12 border border-gray-400 rounded-sm" />
          <div className="h-12 border border-gray-400 rounded-sm" />
          <div className="h-7 bg-gray-400 rounded-sm" />
        </div>

        {/* RIGHT: Final screen */}
        <div className="absolute left-[145px] top-0 w-36 h-96 bg-gray-950 px-3 pt-10 pb-3 flex flex-col gap-2">
          <div className="h-16 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl" />
          <div className="h-2.5 bg-gray-900 rounded-sm" />
          <div className="w-20 h-2.5 bg-gray-900 rounded-sm" />
          <div className="h-12 bg-gray-900 rounded-xl" />
          <div className="h-12 bg-gray-900 rounded-xl" />
          <div className="h-7 bg-blue-500 rounded-full" />
        </div>

        {/* Blue vertical divider */}
        <div className="absolute left-[145px] top-0 w-0.5 h-full bg-blue-500 z-10" />

        {/* Swap button */}
        <div className="absolute left-[127px] top-[192px] w-9 h-9 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center z-20">
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M9 1L12 4.5H2M5 9L2 5.5H12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Labels */}
        <div className="absolute left-2 bottom-1.5 px-1.5 py-0.5 bg-gray-950/70 rounded-sm">
          <span className="text-white text-[9px] font-['JetBrains_Mono'] tracking-tight">Wireframe</span>
        </div>
        <div className="absolute right-2 bottom-1.5 px-1.5 py-0.5 bg-blue-500 rounded-sm">
          <span className="text-white text-[9px] font-['JetBrains_Mono'] tracking-tight">{isEnglish ? "Final screen" : "Écran final"}</span>
        </div>
      </div>

      {/* ── Delivery phone (white) ── */}
      <div className="absolute left-[392px] top-[57px] w-64 h-[510px] bg-white rounded-[40px] shadow-2xl border-[8px] border-zinc-200 overflow-hidden flex flex-col">
        <div className="absolute top-[17px] left-[85px] w-20 h-5 bg-black rounded-full z-10" />

        <div className="flex-1 bg-slate-100 flex flex-col">
          {/* Map area */}
          <div className="h-44 relative bg-slate-200 overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent" />
            {/* Route outline */}
            <div className="absolute left-[25px] top-[48px] w-44 h-24 border-[3px] border-blue-500 rounded-sm" />
            {/* Location pin */}
            <div className="absolute right-[16px] top-[28px] w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2.5 bg-white rounded-sm" />
            </div>
            {/* Previous location */}
            <div className="absolute left-[16px] top-[132px] w-4 h-4 bg-gray-950 rounded-full border-2 border-white" />
          </div>

          {/* Cart */}
          <div className="px-4 pt-3 flex flex-col gap-3">
            <span className="text-gray-950 text-sm font-bold font-['Sora'] leading-5">{isEnglish ? "Your cart" : "Votre panier"}</span>
            <div className="flex flex-col gap-2">
              {[
                { label: isEnglish ? "House burger" : "Burger maison", qty: "× 1" },
                { label: "Pizza margherita", qty: "× 1" },
              ].map((item) => (
                <div key={item.label} className="p-2 bg-white rounded-xl shadow-sm flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <div className="w-3 h-3 bg-blue-500 rounded-sm" />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <span className="text-gray-950 text-[10px] font-semibold font-['Manrope'] leading-4">{item.label}</span>
                    <span className="text-gray-500 text-[8px] font-['Manrope'] leading-3">{item.qty}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Progress bar */}
            <div className="h-1.5 bg-gray-200 rounded-full relative">
              <div className="absolute left-0 top-0 h-full w-1/2 bg-blue-500 rounded-full" />
            </div>
            {/* Commander button */}
            <div className="h-9 bg-gray-950 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-semibold font-['Manrope'] tracking-tight">{isEnglish ? "Place order" : "Commander"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

import { FadeUp, FadeIn, SlideIn } from "@/components/ui/motion";
import { useLanguage } from "@/components/LanguageProvider";

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   MAIN SECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export default function ProjectsSection() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  return (
    <section id="realisations" className="w-full bg-gray-950 px-5 py-16 sm:px-8 md:py-20 lg:px-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-6">

        {/* ── Header ── */}
        <FadeUp>
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-blue-400" />
          <span className="text-blue-400 text-xs font-['JetBrains_Mono'] uppercase tracking-widest leading-4">
            {isEnglish ? "01 — Case studies" : "01 — Études de cas"}
          </span>
        </div>
        <h2 className="text-slate-100 text-4xl font-bold font-['Sora'] leading-[1.1] tracking-[-0.5px] sm:text-5xl lg:text-[60px]">
          {isEnglish ? "Selected work, built for impact" : "Réalisations orientées impact"}
        </h2>
        </FadeUp>

        {/* ── Project 01 — FinanceFlow ── */}
        <div className="mt-8 flex flex-col items-stretch gap-8 xl:mt-14 2xl:flex-row 2xl:items-start 2xl:gap-12">
          <SlideIn from="left" className="w-full 2xl:w-auto">
            <FinanceFlowCard />
          </SlideIn>
          <SlideIn from="right" delay={0.15} className="w-full min-w-0 flex-1">
            <ProjectInfo
              num="01"
              category={isEnglish ? "Mobile app · Finance" : "Application mobile · Finance"}
              title="FinanceFlow App"
              result={isEnglish ? "Clearer financial insights and a faster everyday review flow." : "Une meilleure lisibilité financière et un parcours d'analyse plus rapide au quotidien."}
              problem={isEnglish ? "Users struggled to track spending and understand their financial position quickly without a clear dashboard." : "Les utilisateurs avaient du mal à suivre leurs dépenses et à comprendre rapidement leur situation financière sans un tableau de bord clair."}
              solution={isEnglish ? "I redesigned the tracking experience with a clearer dashboard, better information hierarchy, and reassuring feedback to help users act sooner." : "J'ai repensé le parcours de suivi avec un dashboard plus lisible, des informations hiérarchisées et un feedback rassurant pour aider les utilisateurs à agir plus vite."}
              role={isEnglish ? "UX/UI design + mobile development" : "UX/UI + Développement mobile"}
              tags={["Flutter", "Firebase", "Figma"]}
            />
          </SlideIn>
        </div>

        {/* ── Project 02 — QuickBite ── */}
        <div className="mt-14 flex flex-col items-stretch gap-8 xl:mt-24 2xl:flex-row 2xl:items-start 2xl:gap-12">
          <SlideIn from="left" className="w-full min-w-0 flex-1">
            <ProjectInfo
              num="02"
              category={isEnglish ? "Mobile app · Food delivery" : "Application mobile · Livraison de repas"}
              title="QuickBite Delivery"
              result={isEnglish ? "A faster, smoother, more reassuring ordering experience." : "Un parcours de commande plus rapide, plus fluide et plus rassurant pour les utilisateurs."}
              problem={isEnglish ? "The checkout flow was too long and unclear, adding friction and discouraging mobile conversions." : "Le parcours de commande était trop long et peu lisible, ce qui créait de la friction et freinait la conversion sur mobile."}
              solution={isEnglish ? "I streamlined the ordering flow, clarified order status, and strengthened trust to make the experience faster and easier." : "J'ai simplifié la structure du funnel, clarifié l'état de commande et amélioré la perception de confiance pour rendre l'expérience plus rapide et plus agréable."}
              role={isEnglish ? "UX/UI design + mobile development" : "UX/UI + Développement mobile"}
              tags={["React Native", "Expo", "Node.js"]}
            />
          </SlideIn>
          <SlideIn from="right" delay={0.15} className="w-full 2xl:w-auto">
            <QuickBiteCard />
          </SlideIn>
        </div>

        {/* ── Project 03 — CTA placeholder ── */}
        <FadeUp delay={0.1}>
        <div className="mt-14 relative rounded-3xl border border-blue-500/40 bg-gray-900/30 px-5 py-8 overflow-hidden sm:px-8 sm:py-10 xl:mt-24 xl:px-16 xl:py-16">
          <div className="flex flex-col items-start gap-8 xl:flex-row xl:items-center xl:gap-20">

            {/* Left: text content */}
            <div className="w-full flex flex-col gap-0 xl:w-[560px] xl:shrink-0">
              <span className="text-blue-500/30 text-8xl font-bold font-['Sora'] leading-[96px]">03</span>
              <h3 className="text-slate-100 text-3xl font-bold font-['Sora'] leading-[1.2] tracking-[-0.5px] mt-2 sm:text-4xl xl:text-5xl">
                {isEnglish ? "Your project, our" : "Votre projet, notre"}
                <br />
                {isEnglish ? "next case study" : "prochaine réalisation"}
              </h3>
              <p className="text-gray-400 text-base font-['Manrope'] leading-7 mt-6 max-w-[514px]">
                {isEnglish
                  ? "Have an idea, a customer friction to solve, or a product to grow? I can help clarify the need, shape the solution, and turn it into a useful, coherent mobile product ready for real users."
                  : "Vous avez une idée, une friction à résoudre ou un produit à faire grandir ? Je vous aide à clarifier le besoin, à définir la solution et à la transformer en produit mobile utile, cohérent et prêt à être utilisé."}
              </p>
              <div className="mt-10">
                <CtaButton label="Décrire mon projet" />
              </div>
            </div>

            {/* Right: empty phone placeholder */}
            <div className="flex-1 flex justify-center items-center">
              <div className="hidden w-64 h-96 rounded-[40px] border-[3px] border-blue-400/40 items-center justify-center xl:flex">
                <div className="w-16 h-16 rounded-full border-2 border-blue-400/50 flex items-center justify-center">
                  <div className="w-5 h-6 bg-blue-400/60 rounded-sm" />
                </div>
              </div>
            </div>

          </div>
        </div>
        </FadeUp>

        {/* ── Bottom caption ── */}
        <FadeIn delay={0.2}>
        <div className="flex justify-center mt-6">
          <p className="text-center">
            <span className="text-gray-400 text-xs font-['JetBrains_Mono'] uppercase tracking-widest">
              {isEnglish ? "Every case study: " : "Chaque étude de cas : "}
            </span>
            <span className="text-blue-400 text-xs font-['JetBrains_Mono'] uppercase tracking-widest">
              {isEnglish ? "Challenge → Insight → Design → Development → Outcome" : "Problème → Réflexion → Conception → Développement → Résultat"}
            </span>
          </p>
        </div>
        </FadeIn>

      </div>
    </section>
  );
}
