function CardComprendre() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  return (
    <div className="h-44 relative bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Sticky note amber */}
      <div className="absolute left-3 top-6 w-20 h-20 bg-amber-200 p-2 shadow-sm flex flex-col gap-0.5">
        <span className="text-gray-950 text-[9px] font-['JetBrains_Mono'] leading-3">{isEnglish ? "Who are" : "Qui sont"}</span>
        <span className="text-gray-950 text-[9px] font-['JetBrains_Mono'] leading-3">{isEnglish ? "the" : "les"}</span>
        <span className="text-gray-950 text-[9px] font-['JetBrains_Mono'] leading-3">{isEnglish ? "users?" : "utilisateurs ?"}</span>
      </div>
      {/* Sticky note blue */}
      <div className="absolute left-[103px] top-12 w-20 h-20 bg-blue-200 p-2 shadow-sm flex flex-col gap-0.5">
        <span className="text-gray-950 text-[9px] font-['JetBrains_Mono'] leading-3">{isEnglish ? "What real" : "Quel besoin"}</span>
        <span className="text-gray-950 text-[9px] font-['JetBrains_Mono'] leading-3">{isEnglish ? "need?" : "réel ?"}</span>
      </div>
      {/* Sticky note rose */}
      <div className="absolute left-[190px] top-4 w-20 h-20 bg-rose-200 p-2 shadow-sm flex flex-col gap-0.5">
        <span className="text-gray-950 text-[9px] font-['JetBrains_Mono'] leading-3">{isEnglish ? "What are the" : "Quelles"}</span>
        <span className="text-gray-950 text-[9px] font-['JetBrains_Mono'] leading-3">{isEnglish ? "constraints?" : "contraintes ?"}</span>
      </div>
      {/* Blue "?" icon */}
      <div className="absolute right-4 bottom-4 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
        <span className="text-white text-xs font-bold font-['Manrope']">?</span>
      </div>
    </div>
  );
}

function CardConcevoir() {
  return (
    <div className="h-44 relative bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Frame 1 — Selected (blue) */}
      <div className="absolute left-5 top-5 w-16 h-28 border-2 border-blue-500 bg-blue-500/5 rounded-sm overflow-hidden">
        <div className="m-1.5 h-8 bg-blue-500/20 rounded-sm" />
        <div className="mx-1.5 mt-1.5 h-2 bg-gray-200 rounded-sm" />
        <div className="mx-1.5 mt-1 w-8 h-2 bg-gray-200 rounded-sm" />
        <div className="mx-1.5 mt-2 h-4 bg-blue-500 rounded-full" />
      </div>

      {/* Arrow 1 */}
      <div className="absolute left-[77px] top-[76px]">
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4H8.5M6 1.5L8.5 4L6 6.5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Frame 2 — Wireframe */}
      <div className="absolute left-[106px] top-5 w-16 h-28 border border-gray-300 bg-white rounded-sm overflow-hidden p-1.5 flex flex-col gap-1.5">
        <div className="w-8 h-2 bg-gray-300 rounded-sm shrink-0" />
        <div className="flex-1 border border-gray-400 rounded-sm flex items-center justify-center">
          <div className="w-3 h-3 bg-gray-300 rounded-sm" />
        </div>
        <div className="h-2 bg-gray-200 rounded-sm shrink-0" />
      </div>

      {/* Arrow 2 */}
      <div className="absolute left-[177px] top-[76px]">
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4H8.5M6 1.5L8.5 4L6 6.5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Frame 3 — Final */}
      <div className="absolute left-[191px] top-5 w-16 h-28 border border-gray-300 bg-white rounded-sm overflow-hidden">
        <div className="absolute top-2 left-1.5 right-1.5 flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-400/40 rounded-full shrink-0" />
          <div className="flex-1 h-2 bg-gray-200 rounded-sm" />
        </div>
        <div className="absolute top-7 left-1.5 right-1.5 h-2 bg-gray-200 rounded-sm" />
        <div className="absolute top-11 left-1.5 right-1.5 h-2 bg-gray-200 rounded-sm" />
        <div className="absolute top-[58px] left-1.5 w-8 h-2 bg-gray-200 rounded-sm" />
        <div className="absolute bottom-3 left-1.5 right-1.5 h-5 bg-gray-950 rounded-sm" />
      </div>
    </div>
  );
}

function CardDevelopper() {
  const { language } = useLanguage();
  return (
    <div className="relative">
      {/* "Étape active" badge floats above the card */}
      <div className="absolute right-2 -top-3 px-2 py-0.5 bg-blue-500 rounded-sm z-10">
        <span className="text-white text-[10px] font-['JetBrains_Mono'] tracking-tight">{language === "en" ? "Current step" : "Étape active"}</span>
      </div>
      <div className="h-44 relative bg-gray-950 rounded-xl border-2 border-blue-500 overflow-hidden">
        {/* Code snippet */}
        <div className="absolute left-4 top-4 font-['JetBrains_Mono'] text-[10px] leading-5">
          <span className="text-blue-400">Widget </span>
          <span className="text-slate-100">build</span>
          <span className="text-gray-500">{"(ctx) {"}</span>
          <br />
          <span className="text-gray-500">{"  "}</span>
          <span className="text-blue-400">return </span>
          <span className="text-slate-100">Scaffold</span>
          <span className="text-gray-500">{"("}</span>
          <br />
          <span className="text-gray-500">{"    body: "}</span>
          <span className="text-slate-100">Home</span>
          <span className="text-gray-500">{"(),"}</span>
          <br />
          <span className="text-gray-500">{"  });"}</span>
          <br />
          <span className="text-gray-500">{"}"}</span>
        </div>
        {/* Phone mini mockup */}
        <div className="absolute right-4 top-4 w-16 h-32 bg-gray-900 rounded-2xl border-[3px] border-gray-800 overflow-hidden">
          <div className="m-2 h-8 bg-blue-500 rounded-sm" />
          <div className="mx-2 mt-2 h-2 bg-gray-800 rounded-sm" />
          <div className="mx-2 mt-1 w-8 h-2 bg-gray-800 rounded-sm" />
          <div className="mx-2 mt-2 h-4 bg-blue-500/60 rounded-full" />
        </div>
      </div>
    </div>
  );
}

function CardLivrer() {
  return (
    <div className="h-44 relative bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* App icons */}
      <div className="absolute left-6 top-5 flex items-start gap-2">
        <div className="w-14 h-14 bg-gray-950 rounded-2xl flex items-center justify-center shrink-0">
          <div className="w-5 h-6 bg-white rounded-sm" />
        </div>
        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shrink-0">
          <div className="w-3.5 h-4 bg-white rounded-sm" />
        </div>
        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shrink-0">
          <div className="w-4 h-4 bg-white rounded-sm" />
        </div>
      </div>
      {/* Deployment progress indicator */}
      <div className="absolute left-5 bottom-5 right-5 h-14 overflow-hidden rounded-sm">
        <div className="absolute inset-0 border-[3px] border-blue-500 rounded-sm" />
        <div className="absolute inset-0 bg-blue-500/10" />
      </div>
    </div>
  );
}

type StepTag = { label: string; filled?: boolean };

type Step = {
  num: string;
  label: string;
  tags: StepTag[];
  isActive: boolean;
};

const steps: Step[] = [
  {
    num: "01",
    label: "Comprendre",
    tags: [{ label: "Besoin réel" }, { label: "Utilisateurs + contexte" }],
    isActive: false,
  },
  {
    num: "02",
    label: "Clarifier",
    tags: [{ label: "UX solide" }, { label: "Prototype + validation" }],
    isActive: false,
  },
  {
    num: "03",
    label: "Développer",
    tags: [
      { label: "Produit + API", filled: true },
      { label: "Tests sur appareils", filled: false },
    ],
    isActive: true,
  },
  {
    num: "04",
    label: "Livrer et optimiser",
    tags: [{ label: "Mise en ligne" }, { label: "Améliorations continues" }],
    isActive: false,
  },
];

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function MethodSection() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const englishStepLabels = ["Understand", "Define", "Build", "Launch and improve"];
  const englishStepTags = [
    ["Real user need", "Users + context"],
    ["Strong UX", "Prototype + validation"],
    ["Product + API", "Device testing"],
    ["Go live", "Continuous improvement"],
  ];

  return (
    <section className="w-full bg-slate-100 px-5 py-16 sm:px-8 md:py-20 lg:px-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-6">

        {/* ── Header ── */}
        <FadeUp>
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-blue-500" />
          <span className="text-blue-500 text-xs font-['JetBrains_Mono'] uppercase tracking-widest leading-4">
            {isEnglish ? "02 — My approach" : "02 — Ma méthode"}
          </span>
        </div>
        <h2 className="text-gray-950 text-4xl font-bold font-['Sora'] leading-[1.1] tracking-[-0.5px] sm:text-5xl lg:text-[60px]">
          {isEnglish ? "How an idea becomes" : "Comment une idée devient"}
          <br />
          {isEnglish ? "a useful product" : "un produit utile"}
        </h2>
        </FadeUp>

        {/* ── Timeline area ── */}
        {/*
          Node center from column top:
            number (72px) + mt-3 (12px) + card (176px) + mt-8 (32px) + h-10/2 (20px) = 312px
          Track: top-[298px] h-7 → center at 312px ✓
        */}
        <div className="relative mt-8">

          {/* Timeline channel — two horizontal lines */}
          <div className="hidden lg:block absolute left-0 right-0 top-[298px] h-7 border-y-[3px] border-blue-500/40 pointer-events-none" />

          {/* 4 columns */}
          <StaggerContainer className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:flex lg:gap-10">
            {steps.map((step, index) => (
              <StaggerItem key={step.num} className="min-w-0 flex flex-col lg:flex-1">

                {/* Ghost number */}
                <span
                  className={`text-7xl font-bold font-['Sora'] leading-[72px] ${
                    step.isActive ? "text-blue-500" : "text-gray-950/20"
                  }`}
                >
                  {step.num}
                </span>

                {/* Visual card */}
                <div className="mt-3">
                  {index === 0 && <CardComprendre />}
                  {index === 1 && <CardConcevoir />}
                  {index === 2 && <CardDevelopper />}
                  {index === 3 && <CardLivrer />}
                </div>

                {/* Timeline node — centered in h-10, sits on the channel */}
                <div className="mt-8 h-10 flex justify-center items-center relative z-10">
                  {step.isActive ? (
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-[4px] border-slate-100 shadow-[0_0_0_3px_#3B82F6]" />
                  ) : (
                    <div className="w-5 h-5 bg-white rounded-full border-[3px] border-blue-500" />
                  )}
                </div>

                {/* Label + tags */}
                <div className="mt-10 flex flex-col gap-3">
                  <span
                    className={`text-2xl font-bold font-['Sora'] leading-9 ${
                      step.isActive ? "text-blue-500" : "text-gray-950"
                    }`}
                  >
                    {isEnglish ? englishStepLabels[index] : step.label}
                  </span>
                  <div className="flex flex-col gap-2">
                    {step.tags.map((tag, tagIndex) =>
                      step.isActive ? (
                        <span
                          key={tag.label}
                          className={`px-3 py-1.5 rounded-full text-xs font-['JetBrains_Mono'] leading-4 tracking-tight ${
                            tag.filled
                              ? "bg-blue-500 text-white"
                              : "bg-blue-500/10 border border-blue-500/40 text-blue-500"
                          }`}
                        >
                          {isEnglish ? englishStepTags[index][tagIndex] : tag.label}
                        </span>
                      ) : (
                        <span
                          key={tag.label}
                          className="px-3 py-1.5 rounded-full border border-gray-950/20 text-gray-950 text-xs font-['JetBrains_Mono'] leading-4 tracking-tight"
                        >
                          {isEnglish ? englishStepTags[index][tagIndex] : tag.label}
                        </span>
                      )
                    )}
                  </div>
                </div>

            </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
}
