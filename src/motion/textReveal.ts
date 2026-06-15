import type { Variants } from "framer-motion";

export const textReveal: Variants = {
  hidden: { opacity: 0, y: "110%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.86, ease: [0.22, 1, 0.36, 1] },
  },
};
