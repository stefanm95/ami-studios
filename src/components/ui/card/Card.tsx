import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../../lib/cn";

type CardProps = ComponentPropsWithoutRef<"article"> & {
  variant?: "default" | "glass" | "luxury";
};

export function Card({ className, variant = "default", ...props }: CardProps) {
  return (
    <article
      className={cn(
        "border backdrop-blur",
        variant === "default" && "border-stone-700 bg-stone-900/50 shadow-soft",
        variant === "glass" &&
          "border-white/14 bg-white/8 backdrop-blur-[12px] shadow-glow",
        variant === "luxury" &&
          "border-white/10 bg-white/6 backdrop-blur-[10px] shadow-[0_24px_72px_rgba(0,0,0,0.08)]",
        className,
      )}
      {...props}
    />
  );
}
