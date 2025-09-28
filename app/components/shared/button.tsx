import { cn } from "@/lib/cn";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "default" | "bright";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  childrenClassName?: string;
  variant?: ButtonVariant;
};

export default function Button({
  className,
  children,
  childrenClassName,
  variant = "default",
  ...props
}: ButtonProps) {
  const isBright = variant === "bright";
  const isDefault = variant === "default";

  return (
    <button
      className={cn(
        // shared outer
        "rounded-full p-1 transition-all duration-300 ease-out",
        "hover:scale-105 active:scale-95",
        "[box-shadow:inset_0_0_4px_0_var(--color-cyan),0_5px_25px_0_#36f8e240]",
        {
          // default outer visuals
          "bg-gradient-to-b from-white/[3%] to-white/[5%]": isDefault,
          "hover:from-white/[8%] hover:to-white/[12%]": isDefault,
          "active:from-white/[1%] active:to-white/[3%]": isDefault,

          // bright outer
          "bg-transparent": isBright,
        },
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          // shared inner basics
          "border-stroke rounded-full border-2 px-4 py-2 text-base leading-[1.6] font-semibold transition-all duration-300 lg:px-6 lg:py-3 lg:text-xl",
          {
            // default inner visuals
            "bg-radial-linear-top-large": isDefault,
            "hover:border-cyan/40 hover:shadow-cyan/20 hover:shadow-lg":
              isDefault,
            "active:border-cyan/40": isDefault,

            // bright inner visuals
            "[background:radial-gradient(92.4%_51.07%_at_51%_7.61%,rgba(193,249,243,0.87)_0%,rgba(50,232,212,0.87)_100%),linear-gradient(0deg,#080808_0%,#161616_100%)]":
              isBright,
            "text-stroke": isBright,
          },
          childrenClassName,
        )}
      >
        {children}
      </div>
    </button>
  );
}
