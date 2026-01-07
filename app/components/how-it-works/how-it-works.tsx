import Image from "next/image";
import Animate from "../shared/animate";
import SplineIframe from "../shared/spline-iframe";

type StepCardProps = {
  id: string;
  spline: string;
  title: string;
  description: string;
};
const steps = [
  {
    id: "mint",
    spline:
      "https://my.spline.design/hubsherokioskcopy-188R0TEcGmmce28eyPj3x9cW/",
    title: "Mint Your NFT",
    description:
      "Each purchase generates a digital twin, instantly minted at checkout.",
  },
  {
    id: "stake",
    spline:
      "https://my.spline.design/hubsherokioskcopy-7lSqJzZx9AyiyU4TAc0W93EE/",
    title: "Stake or Play",
    description:
      "Put your NFT to work by staking or joining gamified experiences.",
  },
  {
    id: "rewards",
    spline:
      "https://my.spline.design/hubsherokioskcopy-9mqZF5tZwApyO5TuDJhZ0hbe/",
    title: "Measure Impact",
    description:
      "Track real-time ROI with measurable real-life engagement and autonomous activations.",
  },
];

function StepCard({ id, spline, title, description }: StepCardProps) {
  return (
    <div
      key={id}
      className="border-stroke shadow-border relative col-span-1 h-full space-y-6 rounded-xl border-x border-b p-6 [background:radial-gradient(92.4%_51.07%_at_51%_7.61%,rgba(90,90,90,0.25)_0%,rgba(26,26,26,0.25)_100%),#0C0C0C]"
    >
      <div className="relative flex h-[286px] w-full items-center justify-center">
        <div className="absolute top-1/2 left-1/2 h-[120px] w-[240px] -translate-x-1/2 -translate-y-1/2 bg-white bg-radial opacity-[12%] blur-[34px]" />

        <div className="pointer-events-none absolute top-0 left-0 h-full w-full">
          <SplineIframe src={spline} />
        </div>
      </div>

      <div className="space-y-3 text-center">
        <div className="text-xl leading-[1.2] font-semibold lg:text-[22px]">
          {title}
        </div>
        <p className="text-paragraph text-sm leading-[1.6] lg:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <div className="overflow-x-clip px-4 sm:px-6 xl:px-0">
      <div className="relative mt-[100px] mb-[92px] lg:mt-[150px] lg:mb-[200px]">
        {/* Glow halos in left and right - original positioning preserved */}
        <div className="bg-cyan pointer-events-none absolute top-1/2 -left-60 aspect-square h-[450px] -translate-y-1/2 rounded-full opacity-[12%] blur-[100px]" />
        <div className="bg-cyan pointer-events-none absolute top-1/2 -right-60 aspect-square h-[450px] -translate-y-1/2 rounded-full opacity-[12%] blur-[100px]" />

        <div className="mx-auto max-w-[1120px] space-y-12 lg:space-y-16">
          <Animate type="slideUp">
            <h1 className="text-gradient text-center text-[40px] leading-[1.2] font-semibold lg:text-start lg:text-5xl">
              How It Works
            </h1>
          </Animate>

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {/* Glow lines in top and bottom */}
            <Animate
              className="absolute -top-52 -right-5 hidden animate-pulse lg:flex"
              type="fadeIn"
            >
              <Image
                src="/images/how-it-works/glow-line-rounded.svg"
                className="pointer-events-none w-[600px]"
                width={400}
                height={100}
                alt="glow-line-rounded-top"
              />
            </Animate>

            <Animate
              className="absolute -bottom-52 left-28 hidden -scale-x-100 rotate-180 animate-pulse lg:flex"
              type="fadeIn"
            >
              <Image
                src="/images/how-it-works/glow-line-rounded.svg"
                className="pointer-events-none w-[600px]"
                width={400}
                height={100}
                alt="glow-line-rounded-bottom"
              />
            </Animate>

            {steps.map((step, index) => {
              // Desktop: left slide left, middle slide up, right slide right
              // Mobile: all fade up
              const animations = ["slideLeft", "slideUp", "slideRight"];
              const mobileAnimation = "fadeUp";

              return (
                <div
                  key={step.id}
                  className={
                    index === 2
                      ? "sm:col-span-2 sm:mx-auto sm:max-w-md lg:col-span-1 lg:mx-0 lg:max-w-none"
                      : ""
                  }
                >
                  {/* Desktop animations */}
                  <Animate
                    type={
                      animations[index] as
                        | "slideLeft"
                        | "slideUp"
                        | "slideRight"
                    }
                    className="hidden lg:block"
                  >
                    <StepCard {...step} />
                  </Animate>

                  {/* Mobile animation */}
                  <Animate type={mobileAnimation} className="lg:hidden">
                    <StepCard {...step} />
                  </Animate>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
