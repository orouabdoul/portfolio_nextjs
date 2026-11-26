import { useId } from "react";

// Drapeaux en SVG : les émojis drapeaux ne s'affichent pas sur Windows
// (ils y apparaissent sous forme de lettres « FR », « GB »…).
const base = "inline-block h-3 w-[18px] shrink-0 rounded-[2px] ring-1 ring-black/10";

export function FlagFR({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 3 2" className={`${base} ${className}`} aria-hidden="true">
      <rect width="1" height="2" fill="#0055A4" />
      <rect x="1" width="1" height="2" fill="#FFFFFF" />
      <rect x="2" width="1" height="2" fill="#EF4135" />
    </svg>
  );
}

export function FlagGB({ className = "" }: { className?: string }) {
  const clipId = useId();
  return (
    <svg viewBox="0 0 60 30" className={`${base} ${className}`} aria-hidden="true">
      <clipPath id={clipId}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#${clipId})`} stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

export function FlagBJ({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 15 10" className={`${base} ${className}`} aria-hidden="true">
      <rect width="15" height="10" fill="#E8112D" />
      <rect width="15" height="5" fill="#FCD116" />
      <rect width="6" height="10" fill="#008751" />
    </svg>
  );
}

export function LanguageFlag({ lang, className = "" }: { lang: "fr" | "en"; className?: string }) {
  return lang === "fr" ? <FlagFR className={className} /> : <FlagGB className={className} />;
}
