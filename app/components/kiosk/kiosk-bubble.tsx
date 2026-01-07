import { cn } from "@/lib/cn";
import Image from "next/image";

type KioskBubbleProps = {
  title: string;
  className?: string;
  description?: string;
};

export default function KioskBubble({
  title,
  className,
  description,
}: KioskBubbleProps) {
  return (
    <div
      className={cn(
        "absolute h-[150px] w-[240px] rounded-[50%] bg-gradient-to-b from-white/[3%] to-white/[5%] p-1 shadow-lg shadow-black/25 drop-shadow-lg backdrop-blur-[10px] transition-all duration-300 hover:scale-105 active:scale-95 sm:h-[180px] sm:w-[300px] md:h-[200px] md:w-[340px]",
        className,
      )}
    >
      <div className="bg-radial-linear-top-large border-stroke relative flex h-full w-full items-center justify-center rounded-[50%] border-2 px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6">
        <Image
          src="/images/kiosk/kiosk-dot.png"
          className="pointer-events-none absolute top-1/2 -left-3 h-12 w-12 -translate-y-1/2 sm:h-16 sm:w-16 md:-left-5 md:h-[90px] md:w-[90px]"
          width={90}
          height={90}
          alt="kiosk-dot"
        />

        <div className="flex flex-col gap-y-0.5 text-center md:gap-y-1">
          <p className="text-[9.75px] leading-[1.4] font-semibold text-balance sm:text-xs md:text-sm xl:text-base">
            {title}
          </p>
          {description && (
            <p className="text-[9.75px] leading-[1.4] text-balance opacity-70 sm:text-xs md:text-sm xl:text-base">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
