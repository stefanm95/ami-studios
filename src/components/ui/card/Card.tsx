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
        variant === "default" && "border-charcoal/10 bg-white/72 shadow-soft",
        variant === "glass" && "border-white/18 bg-white/12 shadow-glow",
        variant === "luxury" && "border-gold/25 bg-ivory/85 shadow-[0_32px_90px_rgba(21,18,15,0.16)]",
        className,
      )}
      {...props}
    />
  );
}
