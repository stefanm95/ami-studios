import { useScroll, useTransform } from "framer-motion";
import type { RefObject } from "react";

type UseParallaxOptions<T extends HTMLElement> = {
  target?: RefObject<T | null>;
  speed?: number;
  offset?: ["start end", "end start"];
};

export function useParallax<T extends HTMLElement>({
  target,
  speed = 100,
  offset = ["start end", "end start"],
}: UseParallaxOptions<T> = {}) {
  const { scrollYProgress } = useScroll({ target, offset });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.86, 1], [0.68, 1, 1, 0.74]);

  return { scrollYProgress, y, scale, opacity };
}
