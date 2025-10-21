import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";
import Tooltip from "@/app/components/shared/tooltip";

type MenuModalProps = {
  isOpen: boolean;
  isClosing: boolean;
  onClose: () => void;
};

const navigationLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "$HUBS Token", href: "#hubs-token" },
  { label: "Airdrop", href: "#airdrop" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Whitepaper", href: "https://hubsai.gitbook.io/hubsai-docs/" },
];

const socialLinks = [
  {
    href: "https://x.com/HubsaiOfficial",
    icon: "/icons/x.svg",
    alt: "x",
  },
  {
    href: "https://t.me/hubsai",
    icon: "/icons/telegram.svg",
    alt: "telegram",
  },
];

export default function MenuModal({
  isOpen,
  isClosing,
  onClose,
}: MenuModalProps) {
  if (!isOpen && !isClosing) return null;

  return (
    <div
      className={cn(
        "menu-modal to-white-[8%] h-full w-[340px] rounded-3xl border border-white/10 bg-gradient-to-b from-white/[5%] p-2 backdrop-blur-[50px]",
        !isClosing && "menu-modal-enter",
        isClosing && "menu-modal-exit",
      )}
    >
      <button
        className="absolute top-4 right-4 z-10 p-2 transition-all duration-300 hover:scale-110 active:scale-95"
        onClick={onClose}
      >
        <Image src="/icons/close.svg" width={24} height={24} alt="close" />
      </button>

      <div className="relative h-full rounded-2xl">
        {/* Background Images */}
        <Image
          src="/images/menu-top/menu-modal-bg.png"
          className="pointer-events-none absolute top-0 left-0 h-full rounded-2xl object-top"
          width={1000}
          height={1000}
          priority={true}
          loading="eager"
          alt="menu-modal-bg"
        />
        <Image
          src="/images/slideshow/glow-line-horizontal.svg"
          className="pointer-events-none absolute -bottom-[54px]"
          width={1000}
          height={1000}
          alt="glow-line-horizontal"
        />

        <div className="border-stroke shadow-border relative flex flex-1 flex-col rounded-2xl border-x border-b">
          {/* Navigation Links */}
          <div className="flex flex-col space-y-6 p-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="cursor-pointer"
                onClick={onClose}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <p className="text-paragraph active:text-cyan text-base font-medium transition-all duration-300 hover:text-white">
                  {link.label}
                </p>
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-x-4 px-6">
            <Tooltip>
              <button className="border-stroke bg-radial-linear-top-large text-paragraph h-full flex-1 rounded-lg border bg-gradient-to-b from-[#080808] to-[#161616] px-6 py-2 text-base transition-all duration-300 hover:scale-105 active:scale-95">
                Log In
              </button>
            </Tooltip>

            <Tooltip>
              <button className="border-stroke h-full flex-1 rounded-lg border bg-white/90 px-6 py-2 transition-all duration-300 hover:scale-105 active:scale-95">
                <p className="bg-[linear-gradient(0deg,rgba(0,0,0,0.58)_8.85%,#000_100%)] bg-clip-text text-base font-medium text-transparent">
                  Sign Up
                </p>
              </button>
            </Tooltip>
          </div>

          {/* Decoration and Social Links */}
          <div className="my-6">
            <Image
              src="/images/menu-top/menu-modal-decoration-line.svg"
              className="h-7 w-full"
              width={1000}
              height={1000}
              alt="menu-modal-decoration-line"
            />

            <div className="relative bottom-0 flex w-full items-center justify-center gap-x-12">
              {socialLinks.map((social) => (
                <Link
                  key={social.alt}
                  href={social.href}
                  className="transition-all duration-300 hover:scale-110 active:scale-95"
                  target="_blank"
                >
                  <Image
                    src={social.icon}
                    width={18}
                    height={18}
                    alt={social.alt}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
