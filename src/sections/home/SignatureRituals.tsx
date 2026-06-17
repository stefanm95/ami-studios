import { useState } from "react";
import { BookingModal, type BookingMode } from "../../components/booking";
import { Section } from "../../components/ui";
import { brandAssets } from "../../data/assets";
import { SceneDepth } from "../../layouts/scene";
import { cn } from "../../lib/cn";

type CtaPanel = {
  mode: BookingMode;
  eyebrow: string;
  title: string;
  copy: string;
  cta: string;
  image: string;
};

const panels: CtaPanel[] = [
  {
    mode: "book",
    eyebrow: "APPOINTMENTS",
    title: "Book a private appointment.",
    copy: "Select your setting, preferred time and pace. We will confirm the details discreetly.",
    cta: "REQUEST APPOINTMENT",
    image: brandAssets.sections.booking,
  },
  {
    mode: "gift",
    eyebrow: "GIFT",
    title: "Gift a private experience.",
    copy: "Arrange a refined appointment gift with discreet coordination and flexible timing.",
    cta: "SEND A GIFT",
    image: brandAssets.textures.stonePrimary,
  },
];

export function SignatureRituals() {
  const [activeMode, setActiveMode] = useState<BookingMode | null>(null);

  return (
    <Section id="rituals" className="relative text-white" size="sectionSM">
      <div className="relative overflow-hidden px-3 sm:px-5 lg:px-6">
        <SceneDepth />
        <div className="mx-auto mb-6 flex max-w-[1680px] flex-col gap-4 border-y border-white/10 py-5 md:flex-row md:items-center md:justify-between">
          <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-champagne">
            Private appointments
          </p>
          <p className="max-w-2xl text-sm leading-6 text-stone-200/68 md:text-right">
            Private appointments, composed with discretion from first request to
            quiet departure.
          </p>
        </div>
        <div className="mx-auto grid max-w-[1680px] gap-3 lg:grid-cols-2">
          {panels.map((panel) => (
            <article
              key={panel.mode}
              className="group relative min-h-[360px] overflow-hidden border border-white/10 bg-black/24 sm:min-h-[460px] lg:min-h-[620px]"
            >
              <img
                src={panel.image}
                alt=""
                loading="lazy"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-[0.76] transition duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/52 to-black/30 transition duration-700 group-hover:from-black/82" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 50% 18%, transparent 14%, rgba(0,0,0,0.54) 100%)",
                }}
              />
              <div className="relative z-10 flex h-full min-h-[360px] flex-col justify-end p-6 sm:min-h-[460px] sm:p-8 lg:min-h-[620px] lg:p-12 xl:p-14">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
                  {panel.eyebrow}
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-5xl leading-none text-white md:text-7xl">
                  {panel.title}
                </h2>
                <p className="mt-5 max-w-lg text-base leading-7 text-stone-100/74">
                  {panel.copy}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveMode(panel.mode)}
                  className={cn(
                    "mt-8 inline-flex min-h-12 w-fit min-w-[13rem] items-center justify-center border px-6 text-xs font-semibold uppercase tracking-[0.2em] transition duration-300",
                    "border-white/24 bg-white/[0.07] text-white hover:border-champagne/70 hover:bg-white/[0.12]",
                  )}
                >
                  {panel.cta}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeMode ? (
        <BookingModal mode={activeMode} onClose={() => setActiveMode(null)} />
      ) : null}
    </Section>
  );
}
