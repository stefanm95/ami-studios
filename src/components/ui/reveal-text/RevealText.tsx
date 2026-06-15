import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../../lib/cn";
import { textReveal } from "../../../motion/textReveal";

export function RevealText({ className, children, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span className={cn("block overflow-hidden", className)} {...props}>
      <motion.span className="block" variants={textReveal}>
        {children}
      </motion.span>
    </span>
  );
}
