"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorFollower() {
  const circleRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const circlePosition = useRef({ x: 0, y: 0 });
  const animationId = useRef<number | null>(null);
  const [showCursor, setShowCursor] = useState(false);
  const [hasFinePointer, setHasFinePointer] = useState(false);

  const easing = 0.075;
  const threshold = 0.1;

  useEffect(() => {
    // Check if device has fine pointer control (mouse/touchpad)
    const checkPointerCapability = () => {
      const hasHover = window.matchMedia("(hover: hover)").matches;
      const hasFine = window.matchMedia("(pointer: fine)").matches;

      // Only show cursor follower if device has both hover and fine pointer
      setHasFinePointer(hasHover && hasFine);
    };

    // Check initially
    checkPointerCapability();

    // Listen for changes (rare, but possible when switching input devices)
    const hoverQuery = window.matchMedia("(hover: hover)");
    const pointerQuery = window.matchMedia("(pointer: fine)");

    hoverQuery.addEventListener("change", checkPointerCapability);
    pointerQuery.addEventListener("change", checkPointerCapability);

    return () => {
      hoverQuery.removeEventListener("change", checkPointerCapability);
      pointerQuery.removeEventListener("change", checkPointerCapability);
    };
  }, []);

  useEffect(() => {
    // Don't set up mouse tracking if device doesn't have fine pointer
    if (!hasFinePointer) {
      setShowCursor(false);
      return;
    }

    let isAnimating = false;

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current.x = e.clientX;
      mousePosition.current.y = e.clientY;

      // Show cursor and initialize position on first mouse move
      if (!showCursor) {
        circlePosition.current.x = e.clientX;
        circlePosition.current.y = e.clientY;
        setShowCursor(true);
      }

      // Start animation if not already running
      if (!isAnimating) {
        isAnimating = true;
        animate();
      }
    };

    const animate = () => {
      if (!circleRef.current || !showCursor) {
        isAnimating = false;
        return;
      }

      // Calculate the difference between mouse and circle position
      const dx = mousePosition.current.x - circlePosition.current.x;
      const dy = mousePosition.current.y - circlePosition.current.y;

      // Check if movement is significant enough to continue animating
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < threshold) {
        isAnimating = false;
        return;
      }

      // Apply easing using linear interpolation (lerp)
      circlePosition.current.x += dx * easing;
      circlePosition.current.y += dy * easing;

      // Update the circle position
      circleRef.current.style.transform = `translate3d(${circlePosition.current.x}px, ${circlePosition.current.y + 12}px, 0)`;

      // Continue animation
      animationId.current = requestAnimationFrame(animate);
    };

    // Add mouse move listener
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, [showCursor, hasFinePointer]);

  // Don't render anything if device doesn't have fine pointer control
  if (!hasFinePointer) {
    return null;
  }

  return (
    <div
      ref={circleRef}
      className={`bg-cyan pointer-events-none fixed top-0 left-0 z-[9999] h-5 w-5 rounded-full shadow-[0_0_4px_rgba(54,248,226,0.8),0_0_8px_rgba(54,248,226,0.7),0_0_12px_rgba(54,248,226,0.6),0_0_16px_rgba(54,248,226,0.5),0_0_24px_rgba(54,248,226,0.4),0_0_32px_rgba(54,248,226,0.3)] transition-opacity duration-500 ${showCursor ? "opacity-100" : "opacity-0"}`}
      style={{
        willChange: "transform",
      }}
    />
  );
}
