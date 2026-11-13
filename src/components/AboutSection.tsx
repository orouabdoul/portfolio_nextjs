"use client";

import { FadeUp } from "@/components/ui/motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutSection() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <section
      id="a-propos"
      className="w-full bg-slate-100 px-5 py-16 sm:px-8 md:py-20 lg:px-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <FadeUp visibleBeforeInView>
          <p className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-blue-500">
            {isEnglish ? "01 — About" : "01 — À propos"}
          </p>
          <h2 className="mt-5 max-w-xl font-['Sora'] text-3xl font-bold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
            {isEnglish
              ? "Design and development, connected from the start."
              : "Design et développement avancent ensemble."}
          </h2>
        </FadeUp>

        <FadeUp visibleBeforeInView className="flex flex-col justify-end gap-5 md:pb-1">
          <p className="font-['Manrope'] text-base leading-8 text-gray-700">
            {isEnglish
              ? "I’m Amadou Issiaka, a mobile developer and product designer. I connect user needs, interface design, and implementation so the product stays coherent from the first flow to the final screen."
              : "Je suis Amadou Issiaka, développeur mobile et product designer. Je relie les besoins des utilisateurs, le design d’interface et la réalisation pour garder un produit cohérent, du premier parcours au dernier écran."}
          </p>
          <p className="border-l-2 border-blue-500 pl-4 font-['Manrope'] text-sm leading-7 text-gray-600">
            {isEnglish
              ? "My focus: make the next step clear for both the person using the product and the team building it."
              : "Mon objectif : rendre la prochaine étape claire, autant pour la personne qui utilise le produit que pour l’équipe qui le construit."}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
