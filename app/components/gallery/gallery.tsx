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
        <div className="flex w-full flex-col space-y-6 md:grid md:grid-cols-3 md:space-y-0">
          {/* First position */}
          <div className="relative z-30 mx-6 rotate-[-8deg] shadow-black drop-shadow-xl transition-all duration-500 hover:scale-105 md:bottom-0 md:left-8 md:z-10 md:mx-0 md:w-full md:rotate-[5deg]">
            {/* Mobile - slide from left */}
            <Animate type="slideLeft" className="md:hidden">
              <Image
                src="/images/gallery/gallery-placeholder-with-frame-1.png"
                className="aspect-auto w-full"
                width={500}
                height={500}
                alt="gallery-placeholder-1"
              />
            </Animate>
            {/* Desktop - slide from left */}
            <Animate type="slideLeft" className="hidden md:block">
              <Image
                src="/images/gallery/gallery-placeholder-with-frame-3.png"
                className="aspect-auto w-full"
                width={500}
                height={500}
                alt="gallery-placeholder-3"
              />
            </Animate>
          </div>

          {/* Second position */}
          <div className="relative z-20 mx-6 -mt-4 h-fit w-auto rotate-[5deg] shadow-black drop-shadow-xl transition-all duration-500 hover:scale-105 md:z-30 md:mx-0 md:mt-0 md:w-full md:rotate-0">
            {/* Mobile - slide from right */}
            <Animate type="slideRight" className="md:hidden">
              <Image
                src="/images/gallery/gallery-placeholder-with-frame-2.png"
                className="aspect-auto w-full"
                width={500}
                height={500}
                alt="gallery-placeholder-2"
              />
            </Animate>
            {/* Desktop - fade up (middle) */}
            <Animate type="fadeUp" className="hidden md:block">
              <Image
                src="/images/gallery/gallery-placeholder-with-frame-1.png"
                className="aspect-auto w-full"
                width={500}
                height={500}
                alt="gallery-placeholder-1"
              />
            </Animate>
          </div>

          {/* Third position */}
          <div className="relative z-10 mx-6 -mt-4 h-fit w-auto rotate-[-8deg] shadow-black drop-shadow-xl transition-all duration-500 hover:scale-105 md:right-8 md:bottom-0 md:z-10 md:mx-0 md:mt-0 md:w-full md:rotate-[-5deg]">
            {/* Mobile - slide from left again */}
            <Animate type="slideLeft" className="md:hidden">
              <Image
                src="/images/gallery/gallery-placeholder-with-frame-3.png"
                className="aspect-auto w-full"
                width={500}
                height={500}
                alt="gallery-placeholder-2"
              />
            </Animate>
            {/* Desktop - slide from right */}
            <Animate type="slideRight" className="hidden md:block">
              <Image
                src="/images/gallery/gallery-placeholder-with-frame-2.png"
                className="aspect-auto w-full"
                width={500}
                height={500}
                alt="gallery-placeholder-2"
              />
            </Animate>
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
