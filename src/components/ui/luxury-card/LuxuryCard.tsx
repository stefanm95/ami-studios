import type { ComponentPropsWithoutRef } from "react";
import { Card } from "../card/Card";
import { cn } from "../../../lib/cn";

export function LuxuryCard({ className, ...props }: ComponentPropsWithoutRef<"article">) {
  return <Card variant="luxury" className={cn("text-charcoal", className)} {...props} />;
}
