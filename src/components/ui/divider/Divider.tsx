import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../../lib/cn";

export function Divider({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("h-px w-full bg-charcoal/10", className)} {...props} />;
}
