"use client";

import { cn } from "@/lib/cn";
import Image from "next/image";
import { useEffect, useState } from "react";

type HeroGalleryProps = {
  className?: string;
  interval?: number;
};

const galleryVideos = [
  {
    src: "/images/gallery/Animated_Coin_GIF_Creation.mp4",
    alt: "Animated Coin GIF Creation",
  },
  {
    src: "/images/gallery/Animation-3.mp4",
    alt: "Animated Tokens",
  },
  {
    src: "/images/gallery/Logo_and_Rolex_NFT_Inquiry.mp4",
    alt: "Logo and Rolex NFT Inquiry",
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
  interval = 8000,
}: HeroGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(-1);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(activeIndex);
      setActiveIndex((current) => (current + 1) % galleryVideos.length);
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
        {galleryVideos.map((video, index) => {
          const style = getSlideStyle(index, activeIndex, prevIndex);
          return (
            <div
              key={index}
              className="absolute inset-0 transition-transform duration-1000 ease-in-out"
              style={style}
            >
              <video
                src={video.src}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                aria-label={video.alt}
              />
            </div>
          );
        })}
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[60px] w-[140px] -translate-x-1/2 rounded-full bg-cyan-500/60 blur-[80px]" />
      <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-transparent to-purple-500/20 blur-xl" />
    </div>
  );
}
