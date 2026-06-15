import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../../lib/cn";

export function Eyebrow({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return <p className={cn("text-xs font-semibold uppercase tracking-[0.24em] text-bronze", className)} {...props} />;
}
