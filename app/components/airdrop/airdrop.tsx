import Image from "next/image";
import Button from "../shared/button";
import Animate from "../shared/animate";
import SplineIframe from "../shared/spline-iframe";

export default function Airdrop() {
  return (
    <div className="overflow-x-clip">
      <div className="mb-20 px-4 sm:px-6 xl:px-0">
        <div className="relative flex aspect-video w-full flex-col items-center justify-center">
          {/* Grid overlay */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-full w-screen -translate-x-4 sm:-translate-x-6 xl:w-full xl:translate-x-0">
            <Image
              src="/images/video-section/grid-overlay.svg"
              className="h-full w-full object-cover sm:object-contain"
              width={1000}
              height={1000}
              alt="grid-overlay"
            />
          </div>

          {/* Glow halos */}
          <Animate>
            <div className="bg-cyan/20 pointer-events-none absolute top-1/2 -left-60 z-[1] aspect-square h-[200px] -translate-y-1/2 rounded-full blur-[100px] sm:h-[450px]" />
            <div className="bg-cyan/20 pointer-events-none absolute top-1/2 -right-60 z-[1] aspect-square h-[200px] -translate-y-1/2 rounded-full blur-[100px] sm:h-[450px]" />
          </Animate>

          <Image
            src="/icons/particle.svg"
            className="absolute left-0 rotate-45"
            width={160}
            height={160}
            alt="decorative-particle"
          />

          <Image
            src="/icons/particle.svg"
            className="absolute right-0 rotate-45"
            width={160}
            height={160}
            alt="decorative-particle"
          />

          {/* Airdrop content */}
          <div className="relative z-10 mx-auto max-w-[1120px]">
            <div className="relative">
              <div className="relative rounded-3xl bg-gradient-to-b from-white/[5%] to-white/[8%] p-2 backdrop-blur-[50px] sm:h-[350px]">
                <Image
                  src="/images/airdrop/airdrop-bg.png"
                  className="pointer-events-none hidden h-full w-full rounded-2xl object-cover sm:flex"
                  width={1120}
                  height={354}
                  alt="airdrop-bg"
                />

                <Image
                  src="/images/airdrop/airdrop-bg-mobile.png"
                  className="pointer-events-none h-full rounded-2xl object-contain sm:hidden"
                  width={1120}
                  height={354}
                  alt="airdrop-bg-mobile"
                />

                {/* Spline animation container */}
                <div className="border-stroke shadow-border pointer-events-none absolute inset-2 overflow-hidden rounded-2xl border-x border-b">
                  <div className="relative h-full w-full p-4">
                    <div className="absolute -top-[100px] left-0 h-[calc(100%+200px)] w-full">
                      <SplineIframe
                        className="h-full w-full object-cover"
                        src="https://my.spline.design/coinstokenomics-5pSW67MDZKcC4oYrdDgvqkLi/"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 z-10 flex w-full flex-col items-center justify-center px-4 text-center">
                  <Animate type="fadeUp">
                    <h1 className="text-gradient text-[40px] leading-[1.2] font-semibold lg:text-5xl">
                      $1M Airdrop
                    </h1>
                  </Animate>

                  <Animate type="fadeUp">
                    <p className="text-paragraph mx-auto mt-6 mb-8 w-full text-[18px] leading-[1.6] sm:max-w-[440px] lg:text-xl">
                      Our airdrop campaign rewards early believers. Engage with
                      the ecosystem and earn $HUBS.
                    </p>
                  </Animate>

                  <Animate type="fadeUp">
                    <Button>
                      <p className="text-gradient">Join The Airdrop</p>
                    </Button>
                  </Animate>
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-[-50px] left-1/2 w-[300px] -translate-x-1/2 md:bottom-[-122px] md:w-[720px]">
                <Image
                  src="/images/slideshow/glow-line-horizontal.svg"
                  className="w-full"
                  width={720}
                  height={100}
                  alt="glow-line-horizontal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
