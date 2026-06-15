import type { ComponentPropsWithoutRef } from "react";
import { LuxuryCard } from "../luxury-card/LuxuryCard";
import { cn } from "../../../lib/cn";

type TestimonialCardProps = ComponentPropsWithoutRef<"article"> & {
  quote: string;
  name: string;
  detail: string;
};

export function TestimonialCard({ quote, name, detail, className, ...props }: TestimonialCardProps) {
  return (
    <LuxuryCard className={cn("p-7", className)} {...props}>
      <p className="font-display text-3xl leading-snug">"{quote}"</p>
      <div className="mt-8 text-sm text-charcoal/62">
        <p className="font-semibold text-charcoal">{name}</p>
        <p>{detail}</p>
      </div>
    </LuxuryCard>
  );
}
