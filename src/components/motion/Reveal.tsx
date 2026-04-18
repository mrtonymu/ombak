"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: "div" | "p" | "span" | "h2" | "h3" | "li";
  once?: boolean;
};

const baseVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: i,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function Reveal({
  children,
  delay = 0,
  duration = 0.9,
  y = 32,
  className,
  as = "div",
  once = true,
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.3 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export const staggerChildren: Variants = baseVariants;
