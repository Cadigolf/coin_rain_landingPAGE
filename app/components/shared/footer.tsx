import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";
import Animate from "./animate";

const footerLinks = {
  quickLinks: [
    { name: "How it works", href: "#how-it-works" },
    { name: "$HUBS Token", href: "/" },
    { name: "Airdrop", href: "https://community.hubsai.io/" },
    { name: "Roadmap", href: "https://hubsai.gitbook.io/hubsai-docs/go-to-market-strategy/go-to-market-summary-from-vision-to-real-world-traction" },
    { name: "Docs", href: "https://hubsai.gitbook.io/hubsai-docs/" },
  ],
  company: [
    { name: "About", href: "https://hubsai.gitbook.io/hubsai-docs/hubsai-whitepaper/quickstart" },
    { name: "Careers", href: "https://hubsai.gitbook.io/hubsai-docs/hubsai-disclosures/careers" },
    { name: "Blog", href: "https://medium.com/@HubsAIOfficial" },
    { name: "Content", href: "/" },
  ],
  legal: [
    { name: "Privacy Policy", href: "https://hubsai.gitbook.io/hubsai-docs/hubsai-disclosures/privacy-policy" },
    { name: "Terms of Service", href: "https://hubsai.gitbook.io/hubsai-docs/hubsai-disclosures/terms-of-service" },
    { name: "Cookie Policy", href: "https://hubsai.gitbook.io/hubsai-docs/hubsai-disclosures/cookie-policy" },
    { name: "Compliance", href: "https://hubsai.gitbook.io/hubsai-docs/hubsai-disclosures/complicance" },
    { name: "Docs", href: "https://hubsai.gitbook.io/hubsai-docs/hubsai-disclosures/legal-utility-letter" },
  ],
};

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
  {
    href: "https://discord.gg/hubsai",
    icon: "/icons/discord.png",
    alt: "discord",
  },
];

export default function Footer() {
  return (
    <div className="relative mt-[440px] sm:mt-[330px]">
      {/* Footer glow */}
      <Animate className="pointer-events-none absolute -mt-[34%] hidden w-full sm:flex">
        <Image
          src="/images/footer/footer-glow.png"
          className="w-full object-contain"
          width={1000}
          height={1000}
          alt="footer-glow"
        />
      </Animate>

      <Animate className="pointer-events-none absolute -mt-[125%] w-full sm:hidden">
        <Image
          src="/images/footer/footer-glow-mobile.png"
          className="w-full object-contain"
          width={500}
          height={1000}
          alt="footer-glow-mobile"
        />
      </Animate>

      {/* Coins container - positioned above footer container */}
      <div className="pointer-events-none absolute -top-[350px] right-0 left-0 h-[350px] sm:hidden">
        <Image
          src="/images/footer/coins/coin-large.svg"
          className="absolute top-0 right-3 h-[150px] w-[150px]"
          width={150}
          height={150}
          alt="coin-large"
        />
        <Image
          src="/images/footer/coins/coin-small.svg"
          className="absolute top-[25%] left-4 h-[100px] w-[100px]"
          width={100}
          height={100}
          alt="coin-small"
        />
        <Image
          src="/images/footer/coins/coin-blur.svg"
          className="absolute top-[50%] left-1/2 h-[116px] w-[116px] -translate-x-1/2"
          width={116}
          height={116}
          alt="coin-blur"
        />
      </div>

      <div className="relative mx-4 mb-8 md:mx-8">
        {/* Decorations */}
        <Image
          src="/images/slideshow/glow-line-horizontal.svg"
          className="xs:-top-[60px] pointer-events-none absolute -top-[58px] left-1/2 z-10 w-[360px] -translate-x-1/2 md:-top-[120px] md:w-[720px]"
          width={720}
          height={100}
          alt="glow-line-horizontal"
        />
        <Image
          src="/icons/particle.svg"
          className="pointer-events-none absolute -top-6 left-1/2 z-10 w-[50px] -translate-x-1/2 rotate-90 md:-top-12 md:w-[100px]"
          width={100}
          height={100}
          alt="particle-decoration"
        />

        {/* Footer inner glow */}
        <div className="bg-cyan/40 pointer-events-none absolute top-0 left-1/2 z-10 hidden h-[75px] w-[360px] -translate-x-1/2 rounded-full blur-[100px] md:h-[150px] md:w-[720px] md:blur-[200px] lg:flex" />

        {/* Background container */}
        <div
          className={cn(
            "border-stroke shadow-border relative h-[800px] overflow-hidden rounded-2xl border-x border-b lg:h-[500px]",
            "bg-[url('/images/footer/footer-bg-mobile.png')] bg-cover bg-center lg:bg-[url('/images/footer/footer-bg.png')]",
          )}
        >
          {/* Footer decoration line */}
          <div className="pointer-events-none absolute right-0 bottom-5 left-0 h-16 w-full md:bottom-16 md:h-8">
            <Image
              src="/images/footer/footer-decoration-line.svg"
              className="hidden h-full w-full object-cover md:flex"
              width={1000}
              height={40}
              alt="footer-decoration-line"
            />
            <Image
              src="/images/footer/footer-decoration-line-mobile.svg"
              className="w-full object-contain md:hidden"
              width={1000}
              height={40}
              alt="footer-decoration-line-mobile"
            />
          </div>

          {/* Copyright text */}
          <div className="absolute right-0 bottom-6 left-0 z-10 flex h-8 items-center justify-center sm:bottom-4 lg:bottom-6">
            <p className="text-paragraph text-center text-sm leading-[1.6] opacity-50 lg:text-base">
              ©{new Date().getFullYear()} HubsAI.inc, all rights reserved
            </p>
          </div>

          {/* Main content */}
          <div className="absolute flex w-full flex-col justify-center p-6 lg:px-16 lg:py-12 lg:pb-20 xl:px-[128px] xl:py-16 xl:pb-20">
            <div className="flex flex-col justify-center gap-13 lg:flex-row lg:justify-between lg:gap-0">
              {/* Left column */}
              <div className="flex flex-col">
                <Image
                  src="/images/menu-top/hubs-ai-logo.png"
                  className="aspect-auto h-auto w-[110px] lg:w-[140px]"
                  width={140}
                  height={32}
                  alt="hubs-ai-logo"
                />
                <p className="text-paragraph mt-4 mb-6 w-full text-sm leading-[1.6] lg:mt-6 lg:mb-8 lg:max-w-[320px] lg:text-base">
                  Revolutionizing retail through the power of AI and real-world
                  asset tokenization. Join us in building the future of
                  commerce.
                </p>

                {/* Social media links */}
                <div className="flex items-center gap-x-3 md:gap-x-4">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      className="transition-all duration-300 hover:scale-110"
                    >
                      <Image
                        src={social.icon}
                        width={16}
                        height={16}
                        className="md:h-[18px] md:w-[18px]"
                        alt={social.alt}
                      />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right column */}
              <div className="grid grid-cols-2 gap-6 gap-y-10 lg:grid-cols-3 lg:gap-x-8 xl:gap-x-16">
                <div className="flex flex-col gap-y-6">
                  <p className="text-gradient text-base leading-[1.6] font-semibold">
                    Quick Links
                  </p>

                  <div className="flex flex-col space-y-4">
                    {footerLinks.quickLinks.map((link, index) => (
                      <Link key={index} href={link.href}>
                        <p className="text-paragraph text-sm transition-colors duration-200 hover:text-white lg:text-base">
                          {link.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-y-6">
                  <p className="text-gradient text-base leading-[1.6] font-semibold">
                    Company
                  </p>

                  <div className="flex flex-col space-y-4">
                    {footerLinks.company.map((link, index) => (
                      <Link key={index} href={link.href}>
                        <p className="text-paragraph text-sm transition-colors duration-200 hover:text-white lg:text-base">
                          {link.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-y-6">
                  <p className="text-gradient text-base leading-[1.6] font-semibold">
                    Legal
                  </p>

                  <div className="flex flex-col space-y-4">
                    {footerLinks.legal.map((link, index) => (
                      <Link key={index} href={link.href}>
                        <p className="text-paragraph text-sm transition-colors duration-200 hover:text-white lg:text-base">
                          {link.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
