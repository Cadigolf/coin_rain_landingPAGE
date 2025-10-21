"use client";

import Image from "next/image";
import Link from "next/link";
import { useActiveSection } from "@/app/hooks/useActiveSection";
import { cn } from "@/lib/cn";
import Tooltip from "@/app/components/shared/tooltip";

const navigationLinks = [
  { label: "Video", href: "#video" },
  { label: "Rewards", href: "#rewards" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Airdrop", href: "#airdrop" },
  { label: "Docs", href: "https://hubsai.gitbook.io/hubsai-docs/" },
];

export default function Navbar() {
  const sections = ["#video", "#rewards", "#how-it-works", "#airdrop"];
  const activeSection = useActiveSection(sections);

  return (
    <div className="fixed bottom-5 z-50 flex gap-x-2 overflow-visible rounded-full bg-gradient-to-b from-white/[3%] to-white/[5%] px-1 py-1 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),inset_0_1px_0_0_rgba(255,255,255,0.02)] backdrop-blur-[4px] sm:py-1.5">
      <div className="border-stroke bg-radial-linear-top-large flex h-full items-center gap-x-3 overflow-visible rounded-full border px-6 py-3 text-xs font-medium hover:text-white sm:gap-x-6 sm:py-4">
        {navigationLinks.map((link) => {
          const isActive = activeSection === link.href;

          return (
            <button key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "cursor-pointer touch-manipulation transition-colors duration-300",
                  {
                    "text-cyan": isActive,
                    "text-paragraph hover:text-cyan active:text-cyan":
                      !isActive,
                  },
                )}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </Link>
            </button>
          );
        })}
      </div>

      <Tooltip>
        <button className="hidden rounded-full bg-gradient-to-bl from-[#36F6E0] to-[#18534C] p-[1px] lg:flex">
          <div className="bg-radial-linear-top-large flex h-full items-center gap-x-2 rounded-full px-3 py-3.5">
            <Image
              src="/icons/profile.svg"
              width={20}
              height={20}
              alt="profile"
            />

            <span className="text-xs font-medium text-white transition-colors duration-300 hover:text-cyan">
              Create Account
            </span>
          </div>
        </button>
      </Tooltip>
    </div>
  );
}
