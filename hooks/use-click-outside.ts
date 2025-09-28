import { RefObject, useEffect, useRef } from "react";

export function useOutsideClick(
  callback: () => void,
  isActive: boolean = true,
  ignoreRef?: RefObject<HTMLElement | null>,
) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isActive) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Check if click is inside the main element
      if (ref.current && ref.current.contains(target)) {
        return;
      }

      // Check if click is on the ignored element (button)
      if (ignoreRef?.current && ignoreRef.current.contains(target)) {
        return;
      }

      // If click is outside both, trigger callback
      callback();
    };

    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback, isActive, ignoreRef]);

  return ref;
}
