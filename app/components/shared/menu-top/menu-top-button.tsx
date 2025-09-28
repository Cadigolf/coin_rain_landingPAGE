"use client";

import { useOutsideClick } from "@/hooks/use-click-outside";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { RefObject, useCallback, useRef, useState } from "react";
import Button from "../button";
import MenuModal from "./menu-modal";

export default function MenuTopButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    if (!isMenuOpen || isClosing) return;
    setIsMenuOpen(false);
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
    }, 300);
  }, [isMenuOpen, isClosing]);

  const toggleMenu = useCallback(() => {
    if (isClosing) return;
    if (isMenuOpen) {
      closeMenu();
    } else {
      setIsMenuOpen(true);
    }
  }, [isMenuOpen, isClosing, closeMenu]);

  const menuRef = useOutsideClick(
    closeMenu,
    isMenuOpen && !isClosing,
    buttonRef as RefObject<HTMLElement>,
  );

  return (
    <>
      <div ref={buttonRef}>
        {/* Desktop */}
        <Button className="hidden sm:flex" onClick={toggleMenu}>
          <Image
            src="/icons/hamburger-menu.svg"
            alt="hamburger-menu"
            width={24}
            height={24}
            className={cn(
              "transition-all duration-300",
              isMenuOpen && "rotate-90",
            )}
          />
        </Button>

        {/* Mobile */}
        <button
          className="rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.05)_100%),radial-gradient(92.4%_51.07%_at_51%_7.61%,rgba(28,28,28,0.87)_0%,rgba(12,12,12,0.87)_100%),radial-gradient(50%_50%_at_50%_50%,rgba(45,45,45,0.60)_0%,rgba(44,44,44,0.60)_100%),linear-gradient(0deg,#000_0%,#000_100%),linear-gradient(94deg,rgba(12,12,12,0.75)_4.87%,rgba(12,12,12,0.90)_75.88%)] p-1 shadow-[0_2.491px_9.965px_0_rgba(0,0,0,0.25)] sm:hidden"
          onClick={toggleMenu}
        >
          <div className="border-stroke bg-radial-linear-top-large rounded-full border p-2">
            <Image
              src="/icons/hamburger-menu.svg"
              className={cn(
                "transition-all duration-300",

                isMenuOpen && "rotate-90",
              )}
              width={20}
              height={20}
              alt="hamburger-menu"
            />
          </div>
        </button>
      </div>

      <div
        ref={menuRef}
        className="fixed top-[70px] right-4 sm:top-[85px] sm:right-[35px] xl:top-[100px] xl:right-[120px]"
      >
        <MenuModal
          isOpen={isMenuOpen}
          isClosing={isClosing}
          onClose={closeMenu}
        />
      </div>
    </>
  );
}
