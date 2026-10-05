"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
  as?: "div" | "section" | "li" | "article";
}

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

/**
 * Purposeful fade-up reveal. Becomes a static wrapper when the user
 * prefers reduced motion.
 */
export function Reveal({ children, delay = 0, className, y = 24, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Comp
      className={className}
      variants={{ ...variants, hidden: { opacity: 0, y } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={delay}
    >
      {children}
    </Comp>
  );
}
