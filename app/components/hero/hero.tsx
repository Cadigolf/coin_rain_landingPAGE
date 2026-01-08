import Image from "next/image";
import Button from "../shared/button";
import Navbar from "../shared/navbar";
import HeroAnimatedHeading from "./hero-animated-heading";
import HeroGallery from "./hero-gallery";
import Animate from "../shared/animate";

export default function Hero() {
  return (
    <div className="3xl:mt-[240px] mt-[160px] mb-[100px] flex items-center justify-center lg:mt-[150px] lg:mb-[200px]">
      {/* Responsive overlay backgrounds */}
      <Animate className="pointer-events-none absolute inset-0 top-0 hidden w-full object-contain object-top lg:flex">
        <Image
          src="/images/hero/hero-overlay-bg.png"
          className="pointer-events-none absolute inset-0 top-0 hidden w-full object-contain object-top lg:flex"
          fill={true}
          alt="hero-overlay-bg"
        />
      </Animate>

      <Image
        src="/images/hero/hero-overlay-bg-mobile.png"
        className="pointer-events-none absolute inset-0 w-full object-contain object-center lg:hidden"
        width={1000}
        height={1000}
        alt="hero-overlay-bg-mobile"
      />

      <div className="relative w-full max-w-7xl px-4 lg:px-8">
        {/* Mobile-only decorative elements */}
        <Image
          src="/icons/particle.svg"
          className="absolute -top-16 left-1/2 w-16 -translate-x-1/2 -rotate-90 lg:hidden"
          width={60}
          height={60}
          alt="particle"
        />
        <Image
          src="/images/video-section/grid-overlay.svg"
          className="pointer-events-none absolute inset-0 -top-20 h-2/3 object-cover sm:hidden"
          width={1000}
          height={1000}
          alt="grid-overlay"
        />

        <div className="flex flex-col items-center justify-center">
          <div className="font-geist text-center">
            <div className="space-y-1 leading-[1.2] lg:space-y-2">
              {/* Main heading: "Transform Retail with Tokenization" */}
              <Animate type="fadeUp" delay={0}>
                <div className="text-gradient flex flex-col items-center justify-center text-[40px] lg:flex-row lg:gap-x-4 lg:text-[50px] xl:gap-x-6 xl:text-[65px]">
                  <span className="font-light">
                    Transform Retail with{" "}
                    <span className="font-bold">Tokenization</span>
                  </span>
                </div>
                <div>
                  {/* Desktop: gallery inline */}
                  <div className="my-4 hidden items-center justify-center gap-x-4 lg:flex xl:gap-x-6">
                    <HeroGallery className="w-[580px]" />
                  </div>
                </div>
              </Animate>

              {/* Mobile: gallery on separate line */}
              <Animate type="fadeUp" delay={0.15}>
                <div className="text-gradient flex items-center justify-center gap-x-2 text-[40px] lg:hidden">
                  <HeroGallery className="w-[260px]" />
                </div>
              </Animate>

              {/* "Unlocking" for both desktop and mobile */}
              <Animate type="fadeUp" delay={0.3}>
                <div className="text-gradient text-[40px] font-light lg:text-[55px] xl:text-[85px]">
                  Unlocking
                </div>
              </Animate>

              {/* Desktop: Animated text */}
              <Animate type="fadeUp" delay={0.45}>
                <div className="text-gradient hidden w-full items-center justify-center font-bold lg:flex lg:text-[55px] xl:text-[85px]">
                  <HeroAnimatedHeading isMobile={false} />
                </div>
              </Animate>

              {/* Mobile: Animated text */}
              <Animate type="fadeUp" delay={0.45}>
                <div className="bg-gradient h-24 text-[30px] font-bold lg:hidden">
                  <HeroAnimatedHeading isMobile={true} />
                </div>
              </Animate>
            </div>
          </div>

          {/* Description and CTA */}
          <Animate type="fadeUp" delay={0.6}>
            <p className="text-paragraph mt-6 text-center text-[18px] leading-[1.6] sm:mt-12 lg:text-xl">
              HubsAI turns products into tokenized assets with real-world value.
            </p>
          </Animate>

          <Animate type="fadeUp" delay={0.75}>
            <Button className="mt-8 sm:mt-12" variant="bright">
              <div className="flex items-center gap-x-3 lg:gap-x-4">
                <Image
                  src="/icons/solana.svg"
                  className="h-6 w-6 lg:h-8 lg:w-8"
                  width={32}
                  height={32}
                  alt="solana-logo"
                />
                <p className="text-stroke">$Hubs Coming Soon</p>
              </div>
            </Button>
          </Animate>
        </div>

        <Navbar />
      </div>
    </div>
  );
}
