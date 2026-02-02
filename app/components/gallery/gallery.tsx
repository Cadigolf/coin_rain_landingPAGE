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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {/* First video */}
          <div className="flex flex-col">
            <h3 className="text-gradient mb-2 text-center text-xl font-semibold">
              Gamified Rewards Unlocked
            </h3>
            <p className="text-paragraph mb-4 text-center text-sm">
              Instant prizes at checkout.
            </p>
            <video
              className="w-full rounded-lg shadow-lg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/images/gallery/1_Activate_GIF_Wheel_Spins.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Second video */}
          <div className="flex flex-col">
            <h3 className="text-gradient mb-2 text-center text-xl font-semibold">
              Direct Access Brand Communities
            </h3>
            <p className="text-paragraph mb-4 text-center text-sm">
              Token-gated community chat ecosystems.
            </p>
            <video
              className="w-full rounded-lg shadow-lg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/images/gallery/2_Video_Generation_Request.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Third video */}
          <div className="flex flex-col">
            <h3 className="text-gradient mb-2 text-center text-xl font-semibold">
              Physical-to-Digital Utility:
            </h3>
            <p className="text-paragraph mb-4 text-center text-sm">
              Seamless VIP event entry.
            </p>
            <video
              className="w-full rounded-lg shadow-lg"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/images/gallery/3_GIF_Exclusive_Event_Entry.mp4" type="video/mp4" />
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
