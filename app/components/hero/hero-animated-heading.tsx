"use client";

import { cn } from "@/lib/cn";
import { CSSProperties, useEffect, useState } from "react";

const LINE_BREAK = "\n";
const phrases = [
  "Post-sale Activations",
  `Programmable Rewards${LINE_BREAK}in Every Product`,
  "A New Digital Economy",
  `Performance-Driven${LINE_BREAK}Commerce Metrics`,
];

const phrasesWithBreaks = [
  `Post-sale${LINE_BREAK}Activations`,
  `Programmable Rewards${LINE_BREAK}in Every Product`,
  `A New${LINE_BREAK}Digital Economy`,
  `Performance-Driven${LINE_BREAK}Commerce Metrics`,
];

type HeroAnimatedHeadingProps = {
  isMobile?: boolean;
};

export default function HeroAnimatedHeading({
  isMobile = false,
}: HeroAnimatedHeadingProps) {
  const currentPhrases = isMobile ? phrasesWithBreaks : phrases;

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = currentPhrases[currentPhraseIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayedText.length < currentPhrase.length) {
            setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
          } else {
            // Pause when phrase is complete
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Deleting
          if (displayedText.length > 0) {
            setDisplayedText(currentPhrase.slice(0, displayedText.length - 1));
          } else {
            // Move to next phrase
            setIsDeleting(false);
            setCurrentPhraseIndex((prev) => (prev + 1) % currentPhrases.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentPhraseIndex, currentPhrases]);

  return (
    <span
      className="relative"
      style={
        {
          color: "#ffffff",
          WebkitTextFillColor: "#ffffff",
        } as CSSProperties
      }
    >
      {displayedText.split("").map((char, index) => (
        <span
          key={index}
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
        </span>
      ))}
      <span className="animate-blink inline-block">|</span>
    </span>
  );
}
