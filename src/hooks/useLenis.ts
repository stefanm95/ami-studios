import Lenis from "lenis";
import { useEffect } from "react";

declare global {
  interface Window {
    __amiLenis?: Lenis;
  }
}

export function useLenis() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.8,
      smoothWheel: true,
    });
    window.__amiLenis = lenis;

    let frame = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      if (window.__amiLenis === lenis) {
        window.__amiLenis = undefined;
      }
      lenis.destroy();
    };
  }, []);
}
