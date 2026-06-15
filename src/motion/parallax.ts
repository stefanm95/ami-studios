import type { Variants } from "framer-motion";

export const parallax: Variants = {
  hidden: { y: 44 },
  visible: {
    y: 0,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};
