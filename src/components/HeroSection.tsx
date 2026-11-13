"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

function ScrambleText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState(text);
  const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  useEffect(() => {
    let frame = 0;
    const totalFrames = text.length * 2.5;
    let intervalId: ReturnType<typeof setInterval>;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        frame++;
        const revealCount = Math.floor((frame / totalFrames) * text.length);
        setDisplayed(
          text
            .split("")
            .map((char, i) => {
              if (char === " " || char === "·" || char === "/" || char === "-") return char;
              if (i < revealCount) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );
        if (frame >= totalFrames) {
          setDisplayed(text);
          clearInterval(intervalId);
        }
      }, 38);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, delay]);

  return <>{displayed}</>;
}

function CountUp({ to, duration = 1600, delay = 0 }: { to: number; duration?: number; delay?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let rafId: number;
    let startTime: number | null = null;

    const timeoutId = setTimeout(() => {
      const animate = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * to));
        if (progress < 1) rafId = requestAnimationFrame(animate);
      };
      rafId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [to, duration, delay]);

  return <span>{count}</span>;
}

export default function HeroSection() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <section
      id="accueil"
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-gray-950 px-5 pb-12 pt-24 sm:px-8 sm:pt-28 xl:justify-center xl:px-20 xl:py-24"
    >
      {/* Mesh gradient blobs */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 left-0 h-[400px] w-[500px] rounded-full bg-indigo-600/8 blur-[100px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-[80px]" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-gray-950/80 via-transparent to-transparent" />

      <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-8 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto flex w-full max-w-[620px] flex-col gap-5 sm:gap-6 xl:mx-0"
        >
          <div className="flex flex-col gap-1">
            <span className="font-['Manrope'] text-[13px] leading-5 tracking-[0.06em] text-gray-400">
              {isEnglish ? "Hello, I'm" : "Bonjour, je suis"}
            </span>
            <span className="font-['Sora'] text-sm font-bold leading-6 tracking-tight text-slate-100 sm:text-base">
              Abdoulaye Amadou Issiaka
            </span>
          </div>

          <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.16em] text-blue-400 sm:text-xs">
            <ScrambleText
              text={isEnglish ? "Mobile developer · Product designer" : "Développeur mobile · Product designer"}
              delay={600}
            />
          </p>

          <h1 className="flex flex-col font-['Sora'] text-[clamp(22px,7vw,26px)] font-bold leading-[1.15] tracking-[-0.5px] text-slate-100 sm:text-4xl xl:text-[44px]">
            <span>{isEnglish ? "I turn ideas" : "Je transforme les idées"}</span>
            <span>{isEnglish ? "into useful, clear" : "en produits utiles,"}</span>
            <span className="text-blue-500">
              {isEnglish ? "and reliable products" : "clairs et fiables"}
            </span>
            <span>{isEnglish ? "from day one." : "dès le premier usage."}</span>
          </h1>

          <p className="max-w-[500px] font-['Manrope'] text-sm leading-7 text-gray-300 sm:text-base sm:leading-[1.85]">
            {isEnglish
              ? "I design and build mobile applications, from user journeys to launch."
              : "Je conçois et développe des applications mobiles, du parcours utilisateur à la mise en ligne."}
          </p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-6 py-1"
          >
            <div className="flex flex-col gap-0.5">
              <span className="font-['Sora'] text-xl font-bold text-white sm:text-2xl">
                <CountUp to={3} delay={950} />+
              </span>
              <span className="font-['Manrope'] text-[11px] text-gray-400">
                {isEnglish ? "Years experience" : "Ans d'expérience"}
              </span>
            </div>
            <div className="h-8 w-px bg-gray-700/60" />
            <div className="flex flex-col gap-0.5">
              <span className="font-['Sora'] text-xl font-bold text-white sm:text-2xl">
                <CountUp to={10} delay={1050} />+
              </span>
              <span className="font-['Manrope'] text-[11px] text-gray-400">
                {isEnglish ? "Projects delivered" : "Projets livrés"}
              </span>
            </div>
            <div className="h-8 w-px bg-gray-700/60" />
            <div className="flex flex-col gap-0.5">
              <span className="font-['Sora'] text-xl font-bold text-white sm:text-2xl">2</span>
              <span className="font-['Manrope'] text-[11px] text-gray-400">
                {isEnglish ? "Mobile stacks" : "Stacks mobiles"}
              </span>
            </div>
          </motion.div>

          <div className="flex flex-col items-stretch gap-3 pt-1 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#realisations"
              className="flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-blue-500 px-5 font-['Sora'] text-sm font-semibold tracking-tight text-white shadow-[0_0_28px_rgba(59,130,246,0.35)] transition-all duration-200 hover:bg-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.55)] sm:px-7 sm:text-[15px]"
            >
              {isEnglish ? "View selected work" : "Voir les projets"}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7H12M8 3L12 7L8 11" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#contact"
              className="flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-gray-700 px-5 font-['Sora'] text-sm font-semibold tracking-tight text-slate-100 transition-colors duration-200 hover:border-gray-500 hover:bg-white/5 sm:px-6 sm:text-[15px]"
            >
              {isEnglish ? "Get in touch" : "Me contacter"}
            </a>
            <a
              href="/cv.pdf"
              download="CV-Amadou-Issiaka.pdf"
              className="flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-gray-800 bg-gray-900/60 px-5 font-['Sora'] text-sm font-semibold tracking-tight text-gray-300 transition-colors duration-200 hover:border-gray-600 hover:text-white sm:px-6 sm:text-[15px]"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 2V9M4 7L7 10L10 7M2 11.5H12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-2 flex w-full max-w-[440px] justify-center xl:mt-0 xl:max-w-none"
        >
          <div className="pointer-events-none absolute inset-x-8 bottom-8 top-8 rounded-full bg-blue-500/18 blur-3xl" />
          <div className="relative aspect-[4/5] w-[min(82vw,320px)] overflow-hidden rounded-t-[45%] rounded-b-3xl border border-white/10 bg-gray-900 shadow-[0_28px_80px_rgba(0,0,0,0.5)] sm:w-[340px] xl:w-[min(100%,430px)]">
            <Image
              src="/amadou-transparent.png"
              alt={
                isEnglish
                  ? "Professional portrait of Amadou Issiaka"
                  : "Portrait professionnel d'Amadou Issiaka"
              }
              fill
              priority
              sizes="(max-width: 639px) 82vw, (max-width: 1279px) 340px, 430px"
              className="object-cover object-[center_18%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
