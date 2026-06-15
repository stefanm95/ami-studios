import { useScroll, useTransform } from "framer-motion";

export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const opacity = useTransform(scrollYProgress, [0, 0.12, 1], [1, 1, 0.72]);

  return { scrollYProgress, y, scale, opacity };
}
