import type { ComponentPropsWithoutRef } from "react";
import { ParallaxBackground } from "../../components/ParallaxBackground";
import { cn } from "../../lib/cn";

export function SceneDepth({ className, children, ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)} {...props}>
      <ParallaxBackground className="bg-[radial-gradient(circle_at_18%_26%,rgba(245,231,212,0.34),transparent_34%),radial-gradient(circle_at_84%_42%,rgba(215,195,165,0.22),transparent_32%)]" />
      <div className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-[#f5e7d4]/20 blur-[140px]" />
      <div className="absolute bottom-[8%] right-[12%] h-80 w-80 rounded-full bg-[#d7c3a5]/16 blur-[150px]" />
      {children}
    </div>
  );
}
