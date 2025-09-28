"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface AnimateProps {
  children: ReactNode;
  type?:
    | "fadeIn"
    | "fadeUp"
    | "fadeLeft"
    | "fadeRight"
    | "slideUp"
    | "slideLeft"
    | "slideRight";
  delay?: number;
  duration?: number;
  className?: string;
}

const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  fadeUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  },
  fadeRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  },
  slideLeft: {
    initial: { opacity: 0, x: -70 },
    animate: { opacity: 1, x: 0 },
  },
  slideRight: {
    initial: { opacity: 0, x: 70 },
    animate: { opacity: 1, x: 0 },
  },
};

export default function Animate({
  children,
  type = "fadeIn",
  delay = 0,
  duration = 0.5,
  className = "",
}: AnimateProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const animation = animations[type];

  return (
    <motion.div
      ref={ref}
      initial={animation.initial}
      animate={isInView ? animation.animate : animation.initial}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
