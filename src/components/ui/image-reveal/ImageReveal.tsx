import { motion } from "framer-motion";
import type { ImgHTMLAttributes } from "react";
import { cn } from "../../../lib/cn";
import { scaleIn } from "../../../motion/scaleIn";

type ImageRevealProps = ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
};

export function ImageReveal({ className, wrapperClassName, alt, ...props }: ImageRevealProps) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className={cn("overflow-hidden bg-stone", wrapperClassName)}
    >
      <img className={cn("h-full w-full object-cover", className)} alt={alt} loading="lazy" {...props} />
    </motion.div>
  );
}
