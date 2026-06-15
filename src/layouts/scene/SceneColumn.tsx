import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../lib/cn";

export function SceneColumn({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("flex min-w-0 flex-col", className)} {...props} />;
}
