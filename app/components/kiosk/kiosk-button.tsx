import { cn } from "@/lib/cn";
import Image from "next/image";

type KioskButtonProps = {
  title: string;
  className?: string;
};

export default function KioskButton({ title, className }: KioskButtonProps) {
  return (
    <div
      className={cn(
        "absolute w-fit rounded-full bg-gradient-to-b from-white/[3%] to-white/[5%] p-1 shadow-lg shadow-black/25 drop-shadow-lg backdrop-blur-[10px] transition-all duration-300 hover:scale-105 active:scale-95",
        className,
      )}
    >
      <div className="bg-radial-linear-top-large border-stroke relative flex items-center gap-x-1 rounded-full border-2 py-1.5 pr-3 pl-6 sm:pl-10 md:gap-x-2 md:py-3 md:pr-5 md:pl-12">
        <Image
          src="/images/kiosk/kiosk-dot.png"
          className="pointer-events-none absolute -left-3 h-12 w-12 sm:h-16 sm:w-16 md:-left-5 md:h-[90px] md:w-[90px]"
          width={90}
          height={90}
          alt="kiosk-dot"
        />

        <p className="text-[9.75px] leading-[1.6] font-semibold sm:text-xs md:text-sm xl:text-base">
          {title}
        </p>
      </div>
    </div>
  );
}
