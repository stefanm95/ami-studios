import { motion } from "framer-motion";
import { memo, useRef } from "react";
import { cn } from "../lib/cn";
import { useParallax } from "../motion/useParallax";

type ParallaxBackgroundProps = {
  className?: string;
  speed?: number;
};

function ParallaxBackgroundComponent({
  className,
  speed = 90,
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { y, opacity } = useParallax({ target: ref, speed });

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 h-[120%]",
        className,
      )}
      style={{ y, opacity }}
    />
  );
}

export const ParallaxBackground = memo(ParallaxBackgroundComponent);
