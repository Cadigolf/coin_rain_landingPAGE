import Image from "next/image";
import Animate from "../shared/animate";

export default function Rewards() {
  return (
    <div className="relative px-4 sm:px-6 xl:h-[640px] xl:px-0">
      {/* Hero text */}
      <div className="mx-auto flex max-w-[1200px] flex-col gap-x-16 xl:flex-row">
        <div className="relative z-10 space-y-6 overflow-x-clip text-center xl:text-start">
          <Animate type="fadeUp">
            <h1 className="text-gradient text-[40px] leading-[1.2] font-semibold lg:text-5xl">
              Turn Every <br />
              Purchase Into Play
            </h1>
          </Animate>

          <Animate type="fadeUp">
            <p className="text-paragraph mx-auto mb-12 text-[18px] leading-[1.6] sm:w-[430px] lg:text-[23px] xl:mx-0 xl:mb-0">
              Earn $HUBS, stake for rewards, and level up your wallet - every
              transaction is a step toward more value and fun.
            </p>
          </Animate>
        </div>

        {/* Lrge desktop image */}
        <Image
          src="/images/rewards/animation-dashboard.png"
          className="3xl:max-w-[1000px] pointer-events-none z-10 hidden h-auto w-full max-w-[850px] object-contain 2xl:flex [@media(min-width:2250px)]:max-w-[1200px]"
          width={1010}
          height={640}
          alt="animation-dashboard"
        />
      </div>

      {/* Desktop dashboard */}
      <div className="absolute top-1/2 right-0 z-10 hidden -translate-y-1/2 xl:flex">
        {/* Main dashboard image - half size */}
        <div className="relative">
          <Image
            src="/images/rewards/animation-dashboard-half.png"
            className="pointer-events-none w-full object-contain 2xl:hidden"
            width={1010}
            height={640}
            alt="animation-dashboard"
          />

          <div className="to-background absolute bottom-0 z-50 h-[215px] w-full rounded-bl-3xl bg-gradient-to-b from-transparent" />
        </div>
      </div>

      {/* Mobile dashboard */}
      <div className="relative z-10 flex xl:hidden">
        {/* Mobile grid overlay - centered behind mobile dashboard */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[100vw] -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/video-section/grid-overlay.svg"
            className="h-full w-full object-cover"
            width={2000}
            height={700}
            alt="grid-overlay"
          />
        </div>

        {/* Mobile glows - centered vertically behind mobile dashboard */}
        <div className="bg-cyan pointer-events-none absolute top-1/3 left-0 h-[300px] w-6 -translate-y-1/2 blur-[75px] sm:top-1/2 sm:h-[600px] sm:w-16 sm:blur-[100px] xl:hidden" />
        <div className="bg-cyan pointer-events-none absolute top-1/3 right-0 h-[300px] w-6 -translate-y-1/2 blur-[75px] sm:top-1/2 sm:h-[600px] sm:w-16 sm:blur-[100px] xl:hidden" />

        <Image
          src="/icons/particle.svg"
          className="pointer-events-none absolute -top-5 -right-2 z-20 w-12 sm:w-16 xl:hidden"
          width={80}
          height={80}
          alt="decorative-particle"
        />
        <Image
          src="/icons/particle.svg"
          className="pointer-events-none absolute -bottom-5 -left-2 z-20 w-12 sm:w-16 xl:hidden"
          width={80}
          height={80}
          alt="decorative-particle"
        />

        <Animate className="z-10" type="fadeUp">
          <Image
            src="/images/rewards/animation-dashboard-mobile.png"
            className="pointer-events-none w-full object-contain"
            width={375}
            height={667}
            alt="animation-dashboard"
          />
        </Animate>
      </div>

      {/* Desktop background grid overlay */}
      <div className="pointer-events-none absolute top-32 left-1/2 hidden h-[400px] w-[1280px] -translate-x-1/2 xl:flex">
        <Image
          src="/images/video-section/grid-overlay.svg"
          className="h-full w-full object-cover"
          width={2000}
          height={700}
          alt="grid-overlay"
        />
      </div>

      {/* Desktop radial gradient overlays */}
      <div className="from-background pointer-events-none absolute top-0 left-0 hidden h-full w-1/2 bg-gradient-to-r to-transparent xl:flex" />
      <div className="to-background pointer-events-none absolute top-0 left-1/2 hidden h-80 w-full -translate-x-1/2 bg-gradient-to-t from-transparent xl:flex" />
      <div className="to-background pointer-events-none absolute bottom-0 left-1/2 hidden h-80 w-full -translate-x-1/2 bg-gradient-to-b from-transparent xl:flex" />

      {/* Desktop cyan glow effect */}
      <div className="bg-cyan pointer-events-none absolute top-1/2 left-1/2 hidden aspect-square h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[200px] xl:flex" />
    </div>
  );
}
