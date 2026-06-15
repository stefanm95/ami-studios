import type { ComponentPropsWithoutRef } from "react";
import { Card } from "../card/Card";
import { cn } from "../../../lib/cn";

export function GlassCard({ className, ...props }: ComponentPropsWithoutRef<"article">) {
  return <Card variant="glass" className={cn("text-ivory", className)} {...props} />;
}
