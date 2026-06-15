import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../../lib/cn";
import { LuxuryCard } from "../luxury-card/LuxuryCard";

type TestimonialCardProps = ComponentPropsWithoutRef<"article"> & {
  quote: string;
  name: string;
  detail: string;
};

export function TestimonialCard({
  quote,
  name,
  detail,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <LuxuryCard className={cn("p-7", className)} {...props}>
      <p className="font-display text-3xl leading-snug text-white">
        \"{quote}\"
      </p>
      <div className="mt-8 text-sm text-stone-200/75">
        <p className="font-semibold text-white">{name}</p>
        <p>{detail}</p>
      </div>
    </LuxuryCard>
  );
}
