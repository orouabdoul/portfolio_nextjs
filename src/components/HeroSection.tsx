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

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease },
});

export default function HeroSection() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <section
      id="accueil"
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-bg px-5 pb-16 pt-28 sm:px-8 sm:pt-32 xl:justify-center xl:px-20 xl:py-24"
    >
      {/* Mesh gradient blobs */}
      <motion.div
        className="pointer-events-none absolute -right-32 -top-32 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]"
        animate={{ x: [0, 28, -18, 0], y: [0, -22, 28, 0] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute -bottom-20 left-0 h-[400px] w-[500px] rounded-full bg-indigo-600/8 blur-[100px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-[80px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg/80 via-transparent to-transparent" />

      <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-12 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:gap-16">

        {/* ── Left column ── */}
        <div className="relative z-10 mx-auto w-full max-w-[620px] xl:mx-0">

          {/* 1 · Identity */}
          <motion.div {...fadeUp(0.15)} className="flex flex-col gap-2">
            <span className="font-['Manrope'] text-[13px] tracking-[0.05em] text-muted">
              Amadou Issiaka Abdoulaye
            </span>
            <p className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.18em] text-accent-hi sm:text-[11px]">
              <ScrambleText
                text={isEnglish ? "Mobile & backend developer · Flutter · Laravel" : "Développeur mobile & backend · Flutter · Laravel"}
                delay={700}
              />
            </p>
          </motion.div>

          {/* 2 · H1 */}
          <motion.h1
            {...fadeUp(0.35)}
            className="mt-7 flex flex-col font-['Sora'] text-[clamp(30px,7vw,50px)] font-bold leading-[1.08] tracking-[-0.5px] text-fg sm:mt-9"
          >
            <span>{isEnglish ? "I design" : "Je conçois"}</span>
            <span>{isEnglish ? "and build apps" : "et développe des apps"}</span>
            <span className="text-accent-hi">
              {isEnglish ? "people actually use." : "qu'on adopte vraiment."}
            </span>
          </motion.h1>

          {/* 3 · Stats */}
          <motion.div
            {...fadeUp(0.58)}
            className="mt-9 flex items-stretch gap-0 sm:mt-11"
          >
            {[
              { value: 3, suffix: "+", label: isEnglish ? "Years exp." : "Ans d'expérience", delay: 650 },
              { value: 10, suffix: "+", label: isEnglish ? "Projects delivered" : "Projets livrés", delay: 780 },
              { value: 2, suffix: "", label: isEnglish ? "Mobile stacks" : "Stacks mobiles", delay: 0 },
            ].map((stat, i) => (
              <div key={i} className="flex items-stretch">
                <div className="flex flex-col gap-1 pr-6 sm:pr-8">
                  <span className="font-['Sora'] text-2xl font-bold leading-none text-fg sm:text-3xl">
                    {stat.delay > 0 ? <CountUp to={stat.value} delay={stat.delay} /> : stat.value}
                    {stat.suffix}
                  </span>
                  <span className="font-['Manrope'] text-[11px] leading-4 text-subtle sm:text-xs">
                    {stat.label}
                  </span>
                </div>
                {i < 2 && (
                  <div className="mr-6 w-px self-stretch bg-surface-2 sm:mr-8" />
                )}
              </div>
            ))}
          </motion.div>

          {/* 4 · CTA */}
          <motion.div
            {...fadeUp(0.78)}
            className="mt-9 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3"
          >
            <a
              href="#realisations"
              className="flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-blue-500 px-7 font-['Sora'] text-sm font-semibold tracking-tight text-white shadow-[0_0_28px_rgba(59,130,246,0.35)] transition-all duration-200 hover:bg-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.55)] sm:text-[15px]"
            >
              {isEnglish ? "View selected work" : "Voir les projets"}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7H12M8 3L12 7L8 11" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://calendly.com/orouabdoulayeissiaka/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[52px] items-center justify-center gap-2.5 rounded-full border border-line-strong px-6 font-['Sora'] text-sm font-semibold tracking-tight text-fg transition-colors duration-200 hover:border-line-strong hover:bg-fg/5 sm:text-[15px]"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <rect x="1.5" y="2.5" width="11" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
                <path d="M1.5 5.5H12.5M4.5 1.2V3.5M9.5 1.2V3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              {isEnglish ? "Book a call" : "Réserver un appel"}
            </a>
            <a
              href={isEnglish ? "/cv-en.pdf" : "/cv-fr.pdf"}
              download={isEnglish ? "CV-Amadou-Issiaka-EN.pdf" : "CV-Amadou-Issiaka-FR.pdf"}
              className="flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-dashed border-line-strong px-5 font-['Sora'] text-sm font-medium tracking-tight text-muted transition-all duration-200 hover:border-line-strong hover:text-fg sm:text-[15px]"
            >
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 2V9M4 7L7 10L10 7M2 11.5H12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {isEnglish ? "Download CV" : "Télécharger le CV"}
            </a>
          </motion.div>
        </div>

        {/* ── Right column · Photo ── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease }}
          className="relative mx-auto mt-4 flex w-full max-w-[440px] justify-center xl:mt-16 xl:max-w-none"
        >
          <div className="pointer-events-none absolute inset-x-8 bottom-8 top-8 rounded-full bg-blue-500/18 blur-3xl" />
          <div className="relative aspect-[4/5] w-[min(82vw,320px)] overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_28px_80px_rgba(0,0,0,0.5)] sm:w-[340px] xl:w-[min(100%,430px)]">
            <Image
              src="/amadou-transparent.png"
              alt={isEnglish ? "Professional portrait of Amadou Issiaka" : "Portrait professionnel d'Amadou Issiaka"}
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
