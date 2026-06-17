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
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 12% 18%, rgba(138,112,82,0.035), transparent 34%), radial-gradient(circle at 88% 74%, rgba(255,255,255,0.018), transparent 30%)",
        }}
      />
      {children}
    </div>
  );
}
