import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { BookingModal } from "../../components/booking";
import { Section } from "../../components/ui";
import { practitioners } from "../../data/practitioners";
import { cn } from "../../lib/cn";
import { fadeUp } from "../../motion/fadeUp";

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const activePractitioner = practitioners[activeIndex];

  const showPrevious = () => {
    setActiveIndex((index) =>
      index === 0 ? practitioners.length - 1 : index - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((index) =>
      index === practitioners.length - 1 ? 0 : index + 1,
    );
  };

  return (
    <Section id="experience" className="relative overflow-hidden text-white" size="sectionXS">
      <div className="absolute inset-0 bg-gradient-to-b from-black/42 via-[#211d19]/72 to-black/58" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/4 h-1/2 opacity-45"
        style={{
          background:
            "radial-gradient(circle at 24% 50%, rgba(212,196,168,0.08), transparent 38%), radial-gradient(circle at 78% 36%, rgba(255,255,255,0.035), transparent 34%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1840px] px-0 sm:px-4 lg:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          className="relative overflow-hidden border-y border-white/10 bg-white/[0.025]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#171411]/76 via-[#26211d]/58 to-black/72" />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.10]"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)",
              backgroundSize: "20px 100%",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1/2 opacity-60"
            style={{
              background:
                "radial-gradient(circle at 24% 12%, rgba(212,196,168,0.18), transparent 34%)",
            }}
          />

          <div className="relative z-10 grid gap-6 p-4 sm:p-5 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-10 lg:p-7 xl:p-8">
            <div className="relative h-[360px] overflow-hidden border-y border-white/12 bg-black/24 sm:h-[460px] lg:h-[56vh] lg:max-h-[640px] lg:min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activePractitioner.id}
                  src={activePractitioner.image}
                  alt={`${activePractitioner.name} practitioner mood`}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.018 }}
                  animate={{ opacity: 0.86, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.995 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/26 to-black/10" />
              <div className="absolute left-0 top-0 h-full w-px bg-white/18" />
              <div className="absolute right-0 top-0 h-full w-px bg-white/10" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(practitioners.length).padStart(2, "0")}
                </p>
                <p className="mt-3 max-w-md text-lg leading-7 text-stone-100/80">
                  {activePractitioner.tone}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center px-1 py-2 sm:px-2 lg:py-4 xl:pr-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
                Practitioners
              </p>
              <h2 className="mt-4 max-w-4xl font-display text-5xl leading-none text-white md:text-6xl">
                Practitioners selected for presence and discretion.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-stone-200/74">
                A curated roster of refined practitioners, selected for
                presence, discretion and atmosphere. Each appointment is
                arranged with privacy, timing and personal comfort in mind.
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activePractitioner.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.36, ease: "easeOut" }}
                  className="mt-6 border-y border-white/10 py-5"
                >
                  <p className="text-[0.66rem] uppercase tracking-[0.22em] text-stone-200/48">
                    {activePractitioner.role}
                  </p>
                  <h3 className="mt-3 font-display text-5xl leading-none text-white md:text-[3.5rem]">
                    {activePractitioner.name}
                  </h3>
                  <p className="mt-4 max-w-2xl leading-7 text-stone-200/72">
                    {activePractitioner.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                    {activePractitioner.details.map((detail) => (
                      <span
                        key={detail}
                        className="text-[0.66rem] uppercase tracking-[0.18em] text-champagne/72"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="inline-flex h-12 w-12 items-center justify-center border border-white/18 bg-white/[0.055] text-white transition hover:border-champagne/70 hover:bg-white/[0.09]"
                    aria-label="Previous practitioner"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="inline-flex h-12 w-12 items-center justify-center border border-white/18 bg-white/[0.055] text-white transition hover:border-champagne/70 hover:bg-white/[0.09]"
                    aria-label="Next practitioner"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className="inline-flex min-h-12 w-fit items-center justify-center border border-white/20 bg-white/[0.06] px-6 text-xs font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:border-champagne/70 hover:bg-white/[0.1]"
                >
                  Request this practitioner
                </button>
              </div>
            </div>
          </div>

          <div className="relative z-10 grid border-t border-white/10 bg-black/10 sm:grid-cols-4">
            {practitioners.map((practitioner, index) => (
              <button
                key={practitioner.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "border-b border-white/10 px-4 py-2.5 text-left transition focus:outline-none focus:ring-1 focus:ring-champagne/60 sm:border-b-0 sm:border-r sm:last:border-r-0",
                  activeIndex === index
                    ? "bg-white/[0.08] text-white"
                    : "bg-black/10 text-stone-200/52 hover:bg-white/[0.045] hover:text-white",
                )}
              >
                <span className="block text-[0.62rem] uppercase tracking-[0.18em] text-champagne/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-1.5 block font-display text-2xl leading-none md:text-3xl">
                  {practitioner.name}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {isBookingOpen ? (
        <BookingModal mode="book" onClose={() => setIsBookingOpen(false)} />
      ) : null}
    </Section>
  );
}
