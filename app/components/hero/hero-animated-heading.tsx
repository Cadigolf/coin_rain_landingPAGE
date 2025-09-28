"use client";

import { cn } from "@/lib/cn";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { CSSProperties, useEffect, useState } from "react";

const phrases = [
  "Future Of Retail",
  "Innovating Logistics",
  "Programmable Rewards",
];

const LINE_BREAK = "\n";
const phrasesWithBreaks = [
  "Future Of Retail",
  `Innovating${LINE_BREAK}Logistics`,
  `Programmable${LINE_BREAK}Rewards`,
];

type HeroAnimatedHeadingProps = {
  isMobile?: boolean;
};

export default function HeroAnimatedHeading({
  isMobile = false,
}: HeroAnimatedHeadingProps) {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  const currentPhrases = isMobile ? phrasesWithBreaks : phrases;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 4,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: "blur(20px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: "linear",
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentPhrase}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={
          {
            color: "#ffffff",
            WebkitTextFillColor: "#ffffff",
          } as CSSProperties
        }
      >
        {currentPhrases[currentPhrase].split("").map((char, index) => (
          <motion.span
            key={`${currentPhrase}-${index}`}
            variants={letterVariants}
            className={cn({
              "block w-full": char === LINE_BREAK,
              "inline-block": char !== LINE_BREAK,
            })}
            style={
              {
                color: "#ffffff",
                WebkitTextFillColor: "#ffffff",
              } as CSSProperties
            }
          >
            {char === " " ? "\u00A0" : char === LINE_BREAK ? null : char}
          </motion.span>
        ))}
      </motion.span>
    </AnimatePresence>
  );
}
