import Image from "next/image";
import Animate from "../shared/animate";

export default function Gallery() {
  return (
    <div className="relative mx-auto mt-16 max-w-[1200px] overflow-x-clip px-4 sm:px-8 lg:mt-[134px] xl:px-0">
      {/* Header with glow lines */}
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <Image
          src="/images/gallery/glow-line-horizontal-right.svg"
          className="pointer-events-none hidden flex-1 sm:flex"
          width={100}
          height={100}
          alt="glow-line-horizontal-right"
        />

        <Animate type="fadeUp">
          <div className="relative flex flex-col items-center">
            <div className="bg-cyan pointer-events-none absolute top-1/2 left-1/2 hidden h-[100px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-[400px] opacity-30 blur-[125px] lg:flex" />
            <p className="text-gradient flex shrink-0 px-12 text-xl leading-[1.6] font-semibold">
              Replace Static CRM with Programmable Loyalty:
            </p>

            {/* Underline glow for smaller screens */}
            <Image
              src="/images/slideshow/glow-line-horizontal.svg"
              className="pointer-events-none absolute top-2 h-auto w-full rotate-180 object-cover sm:hidden"
              width={300}
              height={20}
              alt="glow-line-horizontal"
            />
          </div>
        </Animate>

        <Image
          src="/images/gallery/glow-line-horizontal-right.svg"
          className="pointer-events-none hidden flex-1 rotate-180 sm:flex"
          width={100}
          height={100}
          alt="glow-line-horizontal-right"
        />
      </div>

      {/* Gallery grid */}
      <div className="relative my-20 md:my-[132px]">
        <div className="flex w-full flex-col space-y-16 md:grid md:grid-cols-3 md:space-y-0">
          {/* First position - Left */}
          <div className="relative z-30 mx-6 rotate-[-8deg] shadow-black drop-shadow-xl transition-all duration-500 hover:scale-105 md:bottom-0 md:left-8 md:z-10 md:mx-0 md:w-full md:rotate-[5deg]">
            <div className="mb-4 text-center">
              <h3 className="text-gradient mb-2 text-xl leading-tight font-semibold">
                Gamified Rewards
                <br />
                Unlocked
              </h3>
              <p className="text-paragraph text-sm">
                Instant prizes at checkout.
              </p>
            </div>
            <video
              className="w-full rounded-lg shadow-lg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="/images/gallery/gamified_rewards_compressed.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          {/* Second position - Middle */}
          <div className="relative z-20 mx-6 h-fit w-auto rotate-[5deg] shadow-black drop-shadow-xl transition-all duration-500 hover:scale-105 md:z-30 md:mx-0 md:w-full md:rotate-0">
            <div className="mb-4 text-center">
              <h3 className="text-gradient mb-2 text-xl leading-tight font-semibold">
                Direct Access Brand
                <br />
                Communities
              </h3>
              <p className="text-paragraph text-sm">
                Token-gated community chat ecosystems.
              </p>
            </div>
            <video
              className="w-full rounded-lg shadow-lg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="/images/gallery/communities_compressed.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          {/* Third position - Right */}
          <div className="relative z-10 mx-6 h-fit w-auto rotate-[-8deg] shadow-black drop-shadow-xl transition-all duration-500 hover:scale-105 md:right-8 md:bottom-0 md:z-10 md:mx-0 md:w-full md:rotate-[-5deg]">
            <div className="mb-4 text-center">
              <h3 className="text-gradient mb-2 text-xl leading-tight font-semibold">
                Physical-to-Digital
                <br />
                Utility
              </h3>
              <p className="text-paragraph text-sm">
                Seamless VIP event entry.
              </p>
            </div>
            <video
              className="w-full rounded-lg shadow-lg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="/images/gallery/physical_to_digital_compressed.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        {/* Center glow effect */}
        <div className="bg-cyan pointer-events-none absolute top-1/2 left-1/2 h-[200px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-[400px] opacity-30 blur-[125px] md:h-[150px] md:w-[600px]" />
      </div>

      {/* Responsive Separator */}
      <Animate type="fadeIn">
        <Image
          src="/images/gallery/gallery-separator.svg"
          className="pointer-events-none h-[120px] w-full object-cover object-center sm:object-contain md:h-auto"
          width={1000}
          height={100}
          alt="gallery-separator"
        />
      </Animate>
    </div>
  );
}
