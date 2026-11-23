import { useId } from "react";

/** Logo « Caret A » : un A en forme de curseur ^ avec une barre de saisie. */
export default function BrandMark({ size = 40, className = "" }: { size?: number; className?: string }) {
  const gradientId = `brand-gradient-${useId().replace(/:/g, "")}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3B82F6" />
          <stop offset="1" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill={`url(#${gradientId})`} />
      <path
        d="M11 28.5 L20 11 L29 28.5"
        fill="none"
        stroke="#fff"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="17" y="24" width="6" height="3.4" rx="1.2" fill="#fff" opacity="0.9" />
    </svg>
  );
}
