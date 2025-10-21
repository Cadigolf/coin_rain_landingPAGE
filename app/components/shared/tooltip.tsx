"use client";

import React, { useState } from "react";
import { cn } from "@/lib/cn";

type TooltipProps = {
  children: React.ReactNode;
  label?: string;
  className?: string;
};

// Hover-based tooltip with beautiful styling
export default function Tooltip({ children, label = "Coming soon", className }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className={cn("relative inline-block", className)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}

      {/* Beautiful tooltip with fade animation */}
      <div
        style={{ 
          position: 'absolute',
          zIndex: 9999,
          top: '-70px',
          left: '50%',
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap',
          opacity: isVisible ? 1 : 0,
          visibility: isVisible ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
          pointerEvents: 'none'
        }}
      >
        {/* Outer gradient border */}
        <div className="relative rounded-lg bg-gradient-to-br from-cyan/40 to-cyan/10 p-[1px] shadow-[0_0_20px_rgba(54,248,226,0.3)]">
          {/* Inner background with gradient */}
          <div className="bg-radial-linear-center-small flex items-center gap-x-1.5 rounded-lg border border-white/10 px-3.5 py-2 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
            <span className="text-xs font-medium text-white">
              {label}
            </span>
          </div>
          {/* Arrow pointing down */}
          <div 
            style={{
              position: 'absolute',
              left: '50%',
              top: '100%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: '6px solid rgba(54, 248, 226, 0.4)'
            }}
          />
          <div 
            style={{
              position: 'absolute',
              left: '50%',
              top: 'calc(100% - 1px)',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent',
              borderTop: '5px solid #1c1c1c'
            }}
          />
        </div>
      </div>
    </div>
  );
}
