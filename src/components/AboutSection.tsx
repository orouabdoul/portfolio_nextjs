const principles = [
  {
    num: "01",
    title: "Le produit avant la technique",
    desc: "Chaque choix technique sert un objectif concret pour votre activité.",
  },
  {
    num: "02",
    title: "Un langage clair, sans jargon",
    desc: "Des explications simples pour que vous compreniez et décidiez sereinement.",
  },
  {
    num: "03",
    title: "Du design à la mise en ligne, sans rupture",
    desc: "Une continuité totale entre maquettes, code et publication sur les stores.",
  },
];

import { FadeUp, SlideIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutSection() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  return (
    <section id="a-propos" className="w-full bg-slate-100 px-5 py-16 sm:px-8 md:py-20 lg:px-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">

        {/* ── Section label ── */}
        <FadeUp>
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-blue-500" />
          <span className="text-blue-500 text-xs font-['JetBrains_Mono'] uppercase tracking-widest leading-4">
            {isEnglish ? "About me" : "À propos"}
          </span>
        </div>
        </FadeUp>

        {/* ── Two-column : title + paragraphs ── */}
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-20">

          {/* Left — large title */}
          <SlideIn from="left" className="w-full shrink-0 lg:w-[min(56%,700px)]">
            <h2 className="text-gray-950 text-4xl font-bold font-['Sora'] leading-[1.1] tracking-[-0.5px] sm:text-5xl lg:text-[60px]">
              {isEnglish ? "I do more than create polished interfaces. " : "Je ne me contente pas de faire de beaux écrans. "}
              <span className="text-blue-500">
                {isEnglish ? "I build clear, useful products." : "Je crée des produits clairs et utiles."}
              </span>
            </h2>
          </SlideIn>

          {/* Right — paragraphs */}
          <SlideIn from="right" delay={0.15} className="w-full flex-1 pt-0 flex flex-col gap-5 lg:pt-3 lg:gap-6">
            <p className="text-gray-700 text-base font-['Manrope'] leading-8">
              {isEnglish
                ? "Before writing a line of code, I work to understand the real need: who the users are, what problem they face, and what will create value for your business. A digital product earns trust when it solves a real problem, makes decisions easier, and reassures people at the right moment."
                : "Avant d'écrire une ligne de code, je cherche à comprendre le vrai besoin : qui sont les utilisateurs, quel problème ils rencontrent et ce qui va créer de la valeur pour votre activité. Une solution numérique ne devient crédible que lorsqu'elle répond à un besoin réel, simplifie la décision et rassure l'utilisateur au bon moment."}
            </p>
            <p className="text-gray-700 text-base font-['Manrope'] leading-8">
              {isEnglish
                ? "I work with entrepreneurs, founders, and small businesses through a clear, outcome-focused process—from design to delivery—with a shared product vision, sensible priorities, and execution without unnecessary friction."
                : "J'accompagne les entrepreneurs, fondateurs et PME avec une méthode simple, précise et orientée résultat : du design à la livraison, avec une vision claire du produit, des priorités business et une exécution sans friction inutile."}
            </p>
          </SlideIn>
        </div>

        {/* ── Principles list ── */}
        <StaggerContainer className="pt-10 border-t border-gray-950/20 flex flex-col">
          {principles.map((p) => (
            <StaggerItem key={p.num}>
            <div
              className="grid min-w-0 grid-cols-[2.5rem_minmax(0,1fr)] items-start gap-x-3 gap-y-2 py-6 border-b border-gray-950/20 group hover:bg-blue-500/5 rounded-2xl px-3 -mx-3 transition-colors duration-200 sm:grid-cols-[4rem_minmax(0,1fr)] sm:py-7 sm:gap-x-5 lg:flex lg:flex-nowrap lg:items-center lg:gap-10 lg:px-4 lg:-mx-4"
            >
              {/* Number */}
              <span className="text-blue-500 text-xs font-['JetBrains_Mono'] tracking-wider leading-5 sm:text-sm lg:w-16 lg:shrink-0">
                {p.num}
              </span>

              {/* Title */}
              <span className="min-w-0 text-xl font-bold font-['Sora'] leading-7 sm:text-2xl sm:leading-8 lg:w-[520px] lg:shrink-0 lg:text-3xl lg:leading-10">
                {isEnglish
                  ? ["Product before technology", "Clear communication, no jargon", "From design to launch, seamlessly"][Number(p.num) - 1]
                  : p.title}
              </span>

              {/* Description */}
              <span className="col-start-2 min-w-0 text-sm text-gray-700 font-['Manrope'] leading-6 sm:text-base lg:flex-1">
                {isEnglish
                  ? [
                      "Every technical choice serves a clear business goal.",
                      "Straightforward explanations help you make informed decisions.",
                      "A consistent handoff from design through development and store release.",
                    ][Number(p.num) - 1]
                  : p.desc}
              </span>

              {/* Arrow */}
              <div className="hidden shrink-0 w-9 h-9 rounded-full border border-blue-500/30 items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-200 sm:flex">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11"
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white transition-all duration-200"
                  />
                </svg>
              </div>
            </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ── CV download ── */}
        <div className="pt-2">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-gray-950 text-base font-semibold font-['Sora'] tracking-tight border-b-2 border-blue-500 pb-0.5 hover:text-blue-500 transition-colors duration-200"
          >
            {isEnglish ? "Let's discuss your project" : "Discuter de votre projet"}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 2V9M7 9L4.5 6.5M7 9L9.5 6.5M2 12H12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
