import { X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { brandAssets } from "../../data/assets";
import { BookingFlow, type BookingMode } from "./BookingFlow";

type BookingModalProps = {
  mode: BookingMode;
  onClose: () => void;
};

export function BookingModal({ mode, onClose }: BookingModalProps) {
  const titleId = useId();
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    window.__amiLenis?.stop?.();
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      window.__amiLenis?.start?.();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[90] flex items-end justify-center px-3 py-4 sm:items-center sm:p-6"
      style={{
        background:
          "radial-gradient(circle at 50% 20%, rgba(120,110,95,0.16), transparent 42%), rgba(8, 7, 6, 0.78)",
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[calc(100vh-24px)] w-[calc(100vw-24px)] flex-col overflow-hidden p-6 text-white sm:max-h-[calc(100vh-72px)] sm:w-[min(920px,calc(100vw-48px))] sm:p-10 lg:p-12"
        onWheel={(event) => event.stopPropagation()}
        onTouchMove={(event) => event.stopPropagation()}
        style={{
          background:
            "linear-gradient(135deg, rgba(38,34,30,0.98), rgba(18,16,14,0.97))",
          border: "1px solid rgba(255, 255, 255, 0.16)",
          boxShadow:
            "0 24px 70px rgba(0,0,0,0.46), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        <img
          aria-hidden="true"
          alt=""
          src={brandAssets.textures.stoneFine}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.055]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            background:
              "radial-gradient(circle at 18% 0%, rgba(212,196,168,0.28), transparent 32%), radial-gradient(circle at 90% 8%, rgba(255,255,255,0.12), transparent 26%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            boxShadow: "inset 0 0 60px rgba(0,0,0,0.34)",
          }}
        />
        <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        <div className="flex shrink-0 items-start justify-between gap-6">
          <div>
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-champagne">
              {mode === "book" ? "Appointments" : "Gift"}
            </p>
            <h2 id={titleId} className="mt-4 font-display text-5xl leading-none text-white sm:text-6xl">
              {mode === "book" ? "Request appointment" : "Send a gift"}
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-stone-200/68">
              {mode === "book"
                ? "A private request flow for setting, timing and contact details."
                : "A discreet gift request flow with flexible coordination."}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-white/18 bg-white/[0.045] text-white/86 transition hover:border-white/34 hover:bg-white/[0.08] hover:text-white"
            aria-label="Close booking modal"
          >
            <X size={19} />
          </button>
        </div>

        {isComplete ? (
          <div className="booking-modal-scroll min-h-0 overflow-y-auto overscroll-contain py-12 sm:py-16">
            <p className="text-xs uppercase tracking-[0.22em] text-champagne">
              Request received
            </p>
            <h3 className="mt-4 font-display text-4xl leading-tight text-white">
              We will confirm the details privately.
            </h3>
            <p className="mt-4 max-w-xl leading-7 text-stone-200/68">
              This prototype stores the request locally only. No payment or backend
              submission has been connected yet.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-9 min-h-12 border border-champagne/55 bg-champagne px-7 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal transition hover:bg-ivory"
            >
              Close
            </button>
          </div>
        ) : (
          <BookingFlow mode={mode} onComplete={() => setIsComplete(true)} />
        )}
        </div>
      </div>
    </div>
  );
}
