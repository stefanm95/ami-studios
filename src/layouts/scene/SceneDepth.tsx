import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../lib/cn";

export function SceneDepth({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
      {...props}
    >
      {/* Minimal subtle charcoal depth accents - very low opacity, soft blur */}
      <div className="absolute left-[10%] top-[12%] h-56 w-56 rounded-full bg-[#5a5248]/08 blur-[120px]" />
      <div className="absolute bottom-[12%] right-[8%] h-64 w-64 rounded-full bg-[#474238]/06 blur-[100px]" />
      {children}
    </div>
  );
}
