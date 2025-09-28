"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sections: string[]) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash);
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let foundActiveSection = false;

      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const offsetTop = (element as HTMLElement).offsetTop;
          const offsetHeight = (element as HTMLElement).offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            foundActiveSection = true;
            break;
          }
        }
      }

      // Clear active section if not in any section
      if (!foundActiveSection) {
        setActiveSection("");
      }
    };

    // Set initial active section
    handleHashChange();
    handleScroll();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return activeSection;
}
