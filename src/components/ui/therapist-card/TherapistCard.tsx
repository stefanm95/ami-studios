import type { ComponentPropsWithoutRef } from "react";
import { LuxuryCard } from "../luxury-card/LuxuryCard";
import { ImageReveal } from "../image-reveal/ImageReveal";
import { cn } from "../../../lib/cn";

type TherapistCardProps = ComponentPropsWithoutRef<"article"> & {
  name: string;
  role: string;
  experience: string;
  bio: string;
  photo: string;
};

export function TherapistCard({ name, role, experience, bio, photo, className, ...props }: TherapistCardProps) {
  return (
    <LuxuryCard className={cn("overflow-hidden", className)} {...props}>
      <ImageReveal src={photo} alt={name} wrapperClassName="aspect-[4/5]" />
      <div className="p-6">
        <h3 className="font-display text-3xl">{name}</h3>
        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-bronze">{role}</p>
        <p className="mt-4 text-sm font-semibold text-espresso">{experience}</p>
        <p className="mt-4 leading-7 text-charcoal/64">{bio}</p>
      </div>
    </LuxuryCard>
  );
}
