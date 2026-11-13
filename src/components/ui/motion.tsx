"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "-80px" } as const;

interface AnimProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  visibleBeforeInView?: boolean;
}

export function FadeUp({
  children,
  delay = 0,
  className,
  visibleBeforeInView = false,
}: AnimProps) {
  return (
    <motion.div
      initial={{
        opacity: visibleBeforeInView ? 1 : 0,
        y: visibleBeforeInView ? 20 : 28,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.65, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  delay = 0,
  className,
  visibleBeforeInView = false,
}: AnimProps) {
  return (
    <motion.div
      initial={{ opacity: visibleBeforeInView ? 1 : 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewport}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export function StaggerContainer({
  children,
  className,
  visibleBeforeInView = false,
}: Omit<AnimProps, "delay">) {
  return (
    <motion.div
      variants={containerVariants}
      initial={visibleBeforeInView ? "visible" : "hidden"}
      whileInView="visible"
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: Omit<AnimProps, "delay" | "visibleBeforeInView">) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

export function SlideIn({
  children,
  delay = 0,
  className,
  from = "left",
  visibleBeforeInView = false,
}: AnimProps & { from?: "left" | "right" }) {
  return (
    <motion.div
      initial={{
        opacity: visibleBeforeInView ? 1 : 0,
        x: from === "left" ? -16 : 16,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
