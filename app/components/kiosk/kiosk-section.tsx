import Image from "next/image";
import KioskButton from "./kiosk-button";
import Animate from "../shared/animate";
import SplineIframe from "../shared/spline-iframe";
import KioskBubble from "./kiosk-bubble";

export default function KioskSection() {
  return (
    <div className="mx-auto max-w-[1240px] overflow-x-clip px-4 sm:px-8 xl:px-0">
      {/* Header section */}
      <div className="text-center">
        <Animate type="fadeUp">
          <h1 className="text-gradient text-[40px] leading-[1.2] font-semibold lg:text-[60px]">
            Game-Changing <br />
            Customer Experiences
          </h1>
        </Animate>
        <Animate type="fadeUp">
          <p className="text-paragraph mx-auto mt-6 max-w-[980px] text-[18px] leading-[1.6] lg:text-[25px]">
            Building a direct bridge between physical products and community
            management.
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
            title="Gamified Rewards & Prizes"
            className="animate-float absolute bottom-[240px] left-[5px] z-10 rotate-[-5deg] sm:bottom-[260px] sm:left-[10px] md:bottom-[280px] md:left-[20px]"
          />
          {/* <KioskBubble
            title="Gamified Rewards & Prizes"
            description='Move from static points to interactive "Win" states.'
            className="animate-float absolute bottom-[340px] left-[20px] z-10 hidden rotate-[-5deg] md:bottom-[380px] md:left-[80px] md:block md:rotate-[-8deg]"
          /> */}
        </Animate>
        <Animate type="fadeIn">
          <KioskButton
            title="Exclusive Access to Activations"
            className="animate-float-delay-2 absolute bottom-[180px] left-[8px] z-10 rotate-[3deg] sm:bottom-[175px] sm:left-[45px] md:bottom-[170px] md:left-[75px]"
          />
          {/* <KioskBubble
            title="Exclusive Access to Activations"
            description="Gated digital and physical events unlocked via the token."
            className="animate-float-delay-2 absolute bottom-[200px] left-[20px] z-10 hidden rotate-[3deg] md:bottom-[180px] md:left-[100px] md:block md:rotate-[5deg]"
          /> */}
        </Animate>
        <Animate type="fadeIn">
          <KioskButton
            title="Instant Product Authentication"
            className="animate-float-delay-4 absolute bottom-[100px] left-[12px] z-10 rotate-[-6deg] sm:bottom-[90px] sm:left-[70px] md:bottom-[50px] md:left-[220px]"
          />
          {/* <KioskBubble
            title="Instant Product Authentication"
            description="Instant proof of ownership and digital twin verification."
            className="animate-float-delay-4 absolute bottom-[60px] left-[20px] z-10 hidden rotate-[-4deg] md:bottom-[10px] md:left-[250px] md:block md:rotate-[-6deg]"
          /> */}
        </Animate>
        {/* Right side buttons */}
        <Animate type="fadeIn">
          <KioskButton
            title="Close Connection to Brands"
            className="animate-float absolute right-[5px] bottom-[215px] z-10 rotate-[5deg] sm:right-[10px] sm:bottom-[255px] md:right-[20px] md:bottom-[280px]"
          />
          {/* <KioskBubble
            title="Close Connection to Brands"
            description='Replacing distant email marketing with a direct, "Programmable" relationship.'
            className="animate-float absolute right-[20px] bottom-[340px] z-10 hidden rotate-[5deg] md:right-[80px] md:bottom-[380px] md:block md:rotate-[8deg]"
          /> */}
        </Animate>
        <Animate type="fadeIn">
          <KioskButton
            title="Huge Staking Cashback"
            className="animate-float-delay-2 absolute right-[8px] bottom-[155px] z-10 rotate-[-3deg] sm:right-[60px] sm:bottom-[170px] md:right-[100px] md:bottom-[170px]"
          />
          {/* <KioskBubble
            title="Huge Staking Cashback"
            description="High-yield rewards for holding and engaging with brand assets."
            className="animate-float-delay-2 absolute right-[20px] bottom-[200px] z-10 hidden rotate-[-3deg] md:right-[100px] md:bottom-[190px] md:block md:rotate-[-5deg]"
          /> */}
        </Animate>
        <Animate type="fadeIn">
          <KioskButton
            title="AI Autonomous Fulfillment"
            className="animate-float-delay-4 absolute right-[12px] bottom-[75px] z-10 rotate-[3deg] sm:right-[85px] sm:bottom-[85px] md:right-[240px] md:bottom-[50px]"
          />
          {/* <KioskBubble
            title="AI Autonomous Fulfillment"
            description='Keep the logic of seamless delivery, but frame it as a "Value Benefit."'
            className="animate-float-delay-4 absolute right-[20px] bottom-[60px] z-10 hidden rotate-[4deg] md:right-[250px] md:bottom-[15px] md:block md:rotate-[6deg]"
          /> */}
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
