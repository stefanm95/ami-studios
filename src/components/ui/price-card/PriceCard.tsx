import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "../../../lib/cn";
import { LuxuryCard } from "../luxury-card/LuxuryCard";

type PriceCardProps = ComponentPropsWithoutRef<"article"> & {
  name: string;
  duration: string;
  price: string;
  media?: ReactNode;
};

export function PriceCard({
  name,
  duration,
  price,
  media,
  className,
  children,
  ...props
}: PriceCardProps) {
  return (
    <LuxuryCard className={cn("overflow-hidden", className)} {...props}>
      {media}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-3xl text-white">{name}</h3>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-champagne">
              {duration}
            </p>
          </div>
          <p className="text-lg font-semibold text-stone-200/80">{price}</p>
        </div>
        {children}
      </div>
    </LuxuryCard>
  );
}
