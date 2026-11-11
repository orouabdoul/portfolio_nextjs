const steps = [
  { num: "01", label: "Cadrage" },
  { num: "02", label: "UX & validation" },
  { num: "03", label: "Design système" },
  { num: "04", label: "Développement" },
  { num: "05", label: "Intégrations" },
];

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProcessSection() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  return (
    <section id="processus" className="w-full px-5 py-16 bg-gray-950 border-t border-b border-gray-800 sm:px-8 md:py-20 lg:px-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 items-center md:gap-16 lg:gap-20">
        {/* ── Title ── */}
        <FadeUp className="max-w-[1000px] text-center leading-tight lg:leading-[52.80px]">
          <span className="text-slate-100 text-3xl font-bold font-['Sora'] sm:text-4xl lg:text-5xl">
            {isEnglish
              ? "From idea to a product people trust. "
              : "De l'idée à un produit qui inspire confiance. "}
          </span>
          <span className="text-gray-400 text-3xl font-bold font-['Sora'] sm:text-4xl lg:text-5xl">
            {isEnglish ? "From discovery to launch, " : "Du cadrage au lancement, "}
          </span>{" "}
          <span className="text-blue-500 text-3xl font-bold font-['Sora'] sm:text-4xl lg:text-5xl">
            {isEnglish ? "with clear direction " : "avec une vision claire "}
          </span>
          <span className="text-slate-100 text-3xl font-bold font-['Sora'] sm:text-4xl lg:text-5xl">
            {isEnglish ? "and seamless execution." : "et une exécution sans friction."}
          </span>
        </FadeUp>

        {/* ── Steps timeline ── */}
        <StaggerContainer className="w-full relative grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-5 lg:flex lg:justify-between lg:items-start lg:px-6">
          {/* Connector line — behind the circles */}
          <div className="hidden lg:block absolute left-[80px] right-[80px] top-[22px] h-0.5 bg-blue-500/30" />

          {steps.map((step) => (
            <StaggerItem key={step.num} className="w-full flex flex-col items-center lg:w-40">
              {/* Solid background hides the connector line */}
              <div className="w-11 h-11 bg-gray-950 rounded-full border border-blue-500 flex justify-center items-center z-10 relative">
                <span className="text-blue-400 text-xs font-['JetBrains_Mono'] leading-4 tracking-wide">
                  {step.num}
                </span>
              </div>
              <div className="pt-3.5 text-center">
                <span className="text-slate-100 text-base font-semibold font-['Sora'] leading-6 tracking-tight">
                  {isEnglish
                    ? ["Scoping", "UX & validation", "Design system", "Development", "Integrations"][Number(step.num) - 1]
                    : step.label}
                </span>
              </div>
            </StaggerItem>
          ))}

          {/* Last step — filled blue with checkmark */}
          <StaggerItem className="w-full flex flex-col items-center lg:w-40">
            <div className="w-11 h-11 bg-blue-500 rounded-full flex justify-center items-center z-10 relative shadow-[0_0_16px_rgba(59,130,246,0.5)]">
              <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                <path
                  d="M1.5 5.5L5.5 9.5L12.5 1.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="pt-3.5 text-center">
              <span className="text-slate-100 text-base font-semibold font-['Sora'] leading-6 tracking-tight">
                {isEnglish ? "Launch & optimization" : "Lancement & optimisation"}
              </span>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
