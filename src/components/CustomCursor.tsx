"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, { damping: 22, stiffness: 380, mass: 0.4 });
  const springY = useSpring(y, { damping: 22, stiffness: 380, mass: 0.4 });

  useEffect(() => {
    setMounted(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setIsHovering(!!el.closest("a, button, [role='button'], label, input, textarea"));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [x, y, isVisible]);

  if (!mounted) return null;

  return (
    <div className="hidden md:block" aria-hidden="true">
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400"
        style={{ left: x, top: y, opacity: isVisible ? 1 : 0 }}
      />
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/70"
        style={{ left: springX, top: springY, opacity: isVisible ? 1 : 0 }}
        animate={{
          width: isHovering ? 42 : 26,
          height: isHovering ? 42 : 26,
          borderColor: isHovering ? "rgba(96,165,250,0.9)" : "rgba(96,165,250,0.5)",
          backgroundColor: isHovering ? "rgba(59,130,246,0.08)" : "transparent",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      />
    </div>
  );
}
