import { memo } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../lib/cn";
import { useParallax } from "../../motion/useParallax";

type ParallaxImageProps = HTMLMotionProps<"img"> & {
  wrapperClassName?: string;
  speed?: number;
};

function ParallaxImageComponent({ wrapperClassName, className, speed = 40, alt, ...props }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { y, scale, opacity } = useParallax({ target: ref, speed });

  return (
    <div ref={ref} className={cn("overflow-hidden bg-stone", wrapperClassName)}>
      <motion.img
        alt={alt}
        loading="lazy"
        className={cn("h-full w-full object-cover", className)}
        style={{ y, scale, opacity }}
        {...props}
      />
    </div>
  );
}

export const ParallaxImage = memo(ParallaxImageComponent);
