import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../lib/cn";

export function SceneContainer({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("mx-auto grid w-full max-w-[1440px] gap-10 px-5 sm:px-8 lg:px-12", className)} {...props} />;
}
