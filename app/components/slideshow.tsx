import Image from "next/image";
import Animate from "./shared/animate";

const images = [
  {
    src: "/images/slideshow/brands/solana.svg",
    alt: "solana",
    width: 170,
    height: 32,
  },
  {
    src: "/images/slideshow/brands/shopify.svg",
    alt: "shopify",
    width: 140,
    height: 40,
  },
  {
    src: "/images/slideshow/brands/amazon.svg",
    alt: "amazon",
    width: 150,
    height: 60,
  },
  {
    src: "/images/slideshow/brands/stripe.svg",
    alt: "stripe",
    width: 120,
    height: 45,
  },
  {
    src: "/images/slideshow/brands/openai.svg",
    alt: "openai",
    width: 140,
    height: 45,
  },
  {
    src: "/images/slideshow/brands/discord.svg",
    alt: "discord",
    width: 230,
    height: 40,
  },
  {
    src: "/images/slideshow/brands/x.svg",
    alt: "x",
    width: 60,
    height: 60,
  },
];

export default function Slideshow() {
  return (
    <Animate type="fadeIn">
      <div className="relative space-y-14 text-center lg:space-y-8">
        <p className="text-gradient text-xl leading-[1.6] font-semibold">
          Powered by:
        </p>

      <div className="relative">
        {/* Glow image above the top divider */}
        <div className="relative h-[1px] w-full">
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
            <Image
              src="/images/slideshow/glow-line-horizontal.svg"
              width={100}
              height={100}
              className="h-auto w-full lg:w-1/2"
              alt="glow-line-horizontal"
            />
          </div>
          <div className="bg-stroke absolute inset-0 z-0 h-[1px] w-full" />
        </div>

        {/* Carousel content */}
        <div className="slideshow-container bg-background overflow-x-hidden py-2 lg:py-5">
          <div className="slideshow-track flex items-center gap-x-8 lg:gap-x-16">
            {/* First set of images */}
            {images.map((image, index) => (
              <div key={`set1-${index}`} className="flex-shrink-0">
                <Image
                  src={image.src}
                  className="aspect-auto scale-80 lg:scale-100"
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                />
              </div>
            ))}

            {/* Second set of images for seamless loop */}
            {images.map((image, index) => (
              <div key={`set2-${index}`} className="flex-shrink-0">
                <Image
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom divider */}
        <div className="bg-stroke h-[1px] w-full" />

        {/* Gradient fades */}
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-[200px] bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-[200px] bg-gradient-to-l from-black to-transparent" />
      </div>
      </div>
    </Animate>
  );
}
