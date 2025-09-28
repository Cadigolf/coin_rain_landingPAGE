import Image from "next/image";
import Link from "next/link";
import MenuTopButton from "./menu-top-button";

export default function MenuTop() {
  return (
    <div className="sticky top-0 z-50 w-full px-4 py-4 sm:px-8 xl:px-[120px] xl:py-6">
      <div className="relative flex w-full items-center">
        {/* Centered logo */}
        <Link href="/">
          <Image
            src="/images/menu-top/hubs-ai-logo.png"
            className="aspect-auto w-[110px] hover:animate-pulse sm:w-[180px]"
            width={180}
            height={40}
            alt="hubs-ai-logo"
          />
        </Link>

        <div className="relative ml-auto">
          <MenuTopButton />
        </div>
      </div>
    </div>
  );
}
