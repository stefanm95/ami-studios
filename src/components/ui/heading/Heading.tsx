import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../../lib/cn";

type SectionHeadingProps = ComponentPropsWithoutRef<"div"> & {
  eyebrow?: string;
  title: string;
  copy?: string;
};

export function SectionHeading({ eyebrow, title, copy, className, ...props }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)} {...props}>
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.24em] text-bronze">{eyebrow}</p> : null}
      <h2 className="mt-4 font-display text-4xl leading-tight text-charcoal md:text-6xl">{title}</h2>
      {copy ? <p className="mt-5 max-w-2xl text-base leading-7 text-charcoal/66 md:text-lg md:leading-8">{copy}</p> : null}
    </div>
  );
}
