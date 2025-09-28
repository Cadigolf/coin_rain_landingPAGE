import Image from "next/image";
import KioskButton from "./kiosk-button";
import Animate from "../shared/animate";
import SplineIframe from "../shared/spline-iframe";

export default function KioskSection() {
  return (
    <div className="mx-auto max-w-[1240px] overflow-x-clip px-4 sm:px-8 xl:px-0">
      {/* Header section */}
      <div className="text-center">
        <Animate type="fadeUp">
          <h1 className="text-gradient text-[40px] leading-[1.2] font-semibold lg:text-[60px]">
            AI-Powered <br />
            Autonomous Fulfillment
          </h1>
        </Animate>
        <Animate type="fadeUp">
          <p className="text-paragraph mx-auto mt-6 max-w-[980px] text-[18px] leading-[1.6] lg:text-[25px]">
            Discover rewards, preview products, or check out in seconds — all
            without human assistance.
          </p>
        </Animate>
      </div>

      {/* Mobile Kiosk */}
      <div className="relative mt-12 w-full lg:hidden">
        <div className="bg-cyan absolute top-0 left-0 h-[200px] w-5 rotate-[-45deg] blur-[50px] sm:hidden" />
        <div className="bg-cyan absolute top-0 right-0 h-[200px] w-5 rotate-[45deg] blur-[50px] sm:hidden" />

        <div className="pointer-events-none h-full w-full scale-150">
          <SplineIframe src="https://my.spline.design/hubsherokioskcopy-9mqZF5tZwApyO5TuDJhZ0hbe/" />
        </div>
      </div>

      {/* Kiosk with floating buttons */}
      <div className="relative">
        {/* Left side buttons */}
        <Animate type="fadeIn">
          <KioskButton
            title="Rewards Dashboard"
            className="animate-float absolute bottom-[280px] left-[20px] z-10 rotate-[-5deg] md:top-auto md:bottom-[315px] md:left-[100px] md:rotate-[-10deg] lg:rotate-[-4deg]"
          />
        </Animate>

        <Animate type="fadeIn">
          <KioskButton
            title="Rewards Dashboard"
            className="animate-float absolute bottom-[95px] left-[20px] z-10 rotate-[7deg] md:top-auto md:bottom-[170px] md:left-[120px] md:rotate-[9deg]"
          />
        </Animate>

        {/* Center button */}
        <Animate type="fadeIn">
          <KioskButton
            title="Token Staking"
            className="animate-float-delay-2 absolute bottom-[155px] left-1/2 z-10 -translate-x-1/2 md:top-auto md:bottom-[64px] md:rotate-0"
          />
        </Animate>

        {/* Right side buttons */}
        <Animate type="fadeIn">
          <KioskButton
            title="Brand Promotions"
            className="animate-float-delay-4 absolute right-[20px] bottom-[25px] z-10 rotate-[-7deg] md:top-auto md:right-[150px] md:bottom-[170px] md:rotate-[-9deg]"
          />
        </Animate>

        <Animate type="fadeIn">
          <KioskButton
            title="Brand Promotions"
            className="animate-float-delay-4 absolute right-[20px] bottom-[212px] z-10 rotate-[5deg] md:top-auto md:right-[130px] md:bottom-[320px] md:rotate-[4deg]"
          />
        </Animate>

        {/* Desktop Kiosk */}
        <div className="pointer-events-none absolute -top-20 left-0 hidden h-full w-full lg:flex">
          <SplineIframe src="https://my.spline.design/hubsherokioskcopy-9mqZF5tZwApyO5TuDJhZ0hbe/" />
        </div>

        {/* Main kiosk image */}
        <Image
          src="/images/kiosk/kiosk-bg.png"
          className="pointer-events-none bottom-0 mt-16 hidden w-full md:flex"
          width={500}
          height={500}
          alt="kiosk-bg"
        />

        <Image
          src="/images/kiosk/kiosk-bg-mobile.png"
          className="pointer-events-none bottom-0 mt-16 w-full md:hidden"
          width={500}
          height={500}
          alt="kiosk-bg-mobile"
        />
      </div>
    </div>
  );
}
