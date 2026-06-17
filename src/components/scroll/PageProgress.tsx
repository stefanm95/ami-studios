import { useEffect, useRef } from "react";

const ENABLE_PAGE_PROGRESS = true;

function getMaxScroll() {
  return Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
}

export function PageProgress() {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ENABLE_PAGE_PROGRESS) {
      return undefined;
    }

    let maxScroll = getMaxScroll();
    let latest = -1;
    let scrollFrame = 0;
    let resizeFrame = 0;

    const applyProgress = () => {
      scrollFrame = 0;
      const progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);

      if (Math.abs(progress - latest) <= 0.001) {
        return;
      }

      latest = progress;

      if (fillRef.current) {
        fillRef.current.style.transform = `scaleY(${progress})`;
      }
    };

    const requestProgress = () => {
      if (!scrollFrame) {
        scrollFrame = requestAnimationFrame(applyProgress);
      }
    };

    const refreshMeasurements = () => {
      resizeFrame = 0;
      maxScroll = getMaxScroll();
      requestProgress();
    };

    const requestMeasure = () => {
      if (!resizeFrame) {
        resizeFrame = requestAnimationFrame(refreshMeasurements);
      }
    };

    requestProgress();
    window.addEventListener("scroll", requestProgress, { passive: true });
    window.addEventListener("resize", requestMeasure, { passive: true });

    return () => {
      cancelAnimationFrame(scrollFrame);
      cancelAnimationFrame(resizeFrame);
      window.removeEventListener("scroll", requestProgress);
      window.removeEventListener("resize", requestMeasure);
    };
  }, []);

  if (!ENABLE_PAGE_PROGRESS) {
    return null;
  }

  return (
    <div
      data-page-progress="root"
      aria-hidden="true"
      className="pointer-events-none fixed right-5 top-1/2 z-40 hidden h-[42vh] min-h-56 -translate-y-1/2 md:block"
    >
      <div className="relative h-full w-px overflow-hidden bg-white/[0.035]">
        <div
          data-page-progress="fill"
          ref={fillRef}
          className="absolute left-0 top-0 h-full w-px origin-top scale-y-0 bg-champagne/35 will-change-transform"
        />
      </div>
    </div>
  );
}
