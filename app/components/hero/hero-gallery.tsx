"use client";

import { cn } from "@/lib/cn";
import Image from "next/image";
import { useEffect, useState } from "react";

type HeroGalleryProps = {
  className?: string;
  interval?: number;
};

const galleryImages = [
  {
    src: "/images/gallery/gallery-phone.jpg",
    alt: "gallery-placeholder-1",
  },
  {
    src: "/images/gallery/gallery-tokens.jpg",
    alt: "gallery-placeholder-2",
  },
  {
    src: "/images/gallery/airport.png",
    alt: "gallery-placeholder-3",
  },
];

function getSlideStyle(index: number, activeIndex: number, prevIndex: number) {
  switch (true) {
    case index === activeIndex:
      return { transform: "translateY(0%)", zIndex: 2 };
    case index === prevIndex:
      return { transform: "translateY(100%)", zIndex: 1 };
    default:
      return { transform: "translateY(-100%)", zIndex: 0 };
  }
}

export default function HeroGallery({
  className,
  interval = 3000,
}: HeroGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(activeIndex);
      setActiveIndex((current) => (current + 1) % galleryImages.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval, activeIndex]);

  return (
    <div className={cn("relative", className)}>
      <Image
        src="/images/hero/hero-image-container.png"
        className="h-auto w-full"
        width={140}
        height={140}
        alt="hero-image-container"
      />

      <div className="xs:rounded-xl xs:inset-1.5 absolute inset-[6px] overflow-hidden rounded-lg bg-black sm:rounded-lg lg:rounded-xl xl:inset-x-2 xl:inset-y-[9px] xl:rounded-2xl">
        {galleryImages.map((image, index) => {
          const style = getSlideStyle(index, activeIndex, prevIndex);
          return (
            <div
              key={index}
              className="absolute inset-0 transition-transform duration-1000 ease-in-out"
              style={style}
            >
              <Image
                src={image.src}
                fill
                className="object-cover"
                alt={image.alt}
              />
            </div>
          );
        })}
      </div>

      {/* Enhanced glow effects */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[60px] w-[140px] -translate-x-1/2 rounded-full bg-cyan-500/60 blur-[80px]" />
      <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-500/20 blur-xl" />
    </div>
  );
}
