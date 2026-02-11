"use client";

import { cn } from "@/lib/cn";
import { useState, useEffect, useRef } from "react";

type SplineIframeProps = {
  src: string;
  className?: string;
};

export default function SplineIframe({
  src,
  className = "",
}: SplineIframeProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleIframeLoad = () => {
    setIsLoaded(true);
  };

  if (!shouldRender || !isLoaded) {
    return (
      <div
        className={cn(
          "flex h-full w-full items-center justify-center",
          className,
        )}
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="border-t-cyan h-4 w-4 animate-spin rounded-full border-2 border-gray-300 sm:h-8 sm:w-8 sm:border-4" />
          <span className="text-paragraph text-[8px] sm:text-xs">
            Loading 3D Scene...
          </span>
        </div>
        {shouldRender && (
          <iframe
            ref={iframeRef}
            src={src}
            width="100%"
            height="100%"
            className="pointer-events-none absolute inset-0 opacity-0"
            loading="lazy"
            onLoad={handleIframeLoad}
          />
        )}
      </div>
    );
  }

  return (
    <iframe
      src={src}
      width="100%"
      height="100%"
      className={className}
      loading="lazy"
      style={{
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
      }}
    />
  );
}
