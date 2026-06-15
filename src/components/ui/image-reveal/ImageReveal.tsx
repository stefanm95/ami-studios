import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../../lib/cn";
import { scaleIn } from "../../../motion/scaleIn";

type ImageRevealProps = HTMLMotionProps<"img"> & {
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
      <motion.img
        className={cn("h-full w-full object-cover", className)}
        alt={alt}
        loading="lazy"
        whileHover={{ scale: 1.035 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        {...props}
      />
    </motion.div>
  );
}
