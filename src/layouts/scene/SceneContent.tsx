import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../lib/cn";

export function SceneContent({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("max-w-3xl", className)} {...props} />;
}
