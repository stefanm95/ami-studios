import type { ComponentPropsWithoutRef } from "react";
import { spacing, type SpacingToken } from "../../../constants/tokens/spacing";
import { cn } from "../../../lib/cn";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  size?: SpacingToken;
};

export function Section({ className, size = "sectionLG", ...props }: SectionProps) {
  return <section className={cn(spacing[size], className)} {...props} />;
}
