import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../../lib/cn";
import { ImageReveal } from "../image-reveal/ImageReveal";
import { LuxuryCard } from "../luxury-card/LuxuryCard";

type TherapistCardProps = ComponentPropsWithoutRef<"article"> & {
  name: string;
  role: string;
  experience: string;
  bio: string;
  photo: string;
};

export function TherapistCard({
  name,
  role,
  experience,
  bio,
  photo,
  className,
  ...props
}: TherapistCardProps) {
  return (
    <LuxuryCard className={cn("overflow-hidden", className)} {...props}>
      <ImageReveal src={photo} alt={name} wrapperClassName="aspect-[4/5]" />
      <div className="p-6">
        <h3 className="font-display text-3xl text-white">{name}</h3>
        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-champagne">
          {role}
        </p>
        <p className="mt-4 text-sm font-semibold text-stone-200/80">
          {experience}
        </p>
        <p className="mt-4 leading-7 text-stone-200/70">{bio}</p>
      </div>
    </LuxuryCard>
  );
}
