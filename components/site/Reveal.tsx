"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** "scroll" reveals when the block enters the viewport; "load" reveals on mount. */
  mode?: "scroll" | "load";
  delay?: number;
  className?: string;
};

const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  mode = "scroll",
  delay = 0,
  className,
}: RevealProps) {
  const reduced = useReducedMotion();

  const variants: Variants = {
    hidden: reduced
      ? { opacity: 1 }
      : { opacity: 0, y: 18, scale: 0.985, filter: "blur(8px)" },
    shown: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: reduced ? 0 : 0.82, ease: EASE, delay },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      {...(mode === "load"
        ? { animate: "shown" }
        : { whileInView: "shown", viewport: { once: true, amount: 0.3 } })}
    >
      {children}
    </motion.div>
  );
}
