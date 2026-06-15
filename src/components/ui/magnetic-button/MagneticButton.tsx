import { motion, type HTMLMotionProps } from "framer-motion";
import type { PropsWithChildren } from "react";
import { cn } from "../../../lib/cn";

type MagneticButtonProps = PropsWithChildren<HTMLMotionProps<"button">>;

export function MagneticButton({ className, ...props }: MagneticButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-6 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal transition-colors hover:bg-ivory focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal",
        className,
      )}
      {...props}
    />
  );
}
