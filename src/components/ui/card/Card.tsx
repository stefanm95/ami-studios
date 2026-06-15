import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../../lib/cn";

export function Card({ className, ...props }: ComponentPropsWithoutRef<"article">) {
  return <article className={cn("border border-charcoal/10 bg-white/72 shadow-soft backdrop-blur", className)} {...props} />;
}
