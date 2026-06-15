import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../../lib/cn";
import { Card } from "../card/Card";

export function LuxuryCard({
  className,
  ...props
}: ComponentPropsWithoutRef<"article">) {
  return (
    <Card variant="luxury" className={cn("text-white", className)} {...props} />
  );
}
