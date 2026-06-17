import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { BookingModal } from "../../components/booking";
import { Section } from "../../components/ui";
import { practitioners } from "../../data/practitioners";
import { SceneContainer, SceneDepth } from "../../layouts/scene";
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
    <Section id="experience" className="relative text-white" size="sectionMD">
      <SceneContainer>
        <SceneDepth />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="relative z-10 overflow-hidden border border-white/12 bg-white/[0.045]"
        >
          <img
            aria-hidden="true"
            alt=""
            src={activePractitioner.image}
            className="absolute inset-0 h-full w-full object-cover opacity-[0.14]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/74 via-[#211d19]/68 to-black/76" />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.28] mix-blend-screen"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.13) 1px, transparent 1px)",
              backgroundSize: "18px 100%",
            }}
          />

          <div className="relative z-10 grid gap-8 p-5 sm:p-7 lg:grid-cols-[0.92fr_1.08fr] lg:p-10 xl:p-12">
            <div className="relative min-h-[24rem] overflow-hidden border border-white/12 bg-black/24 sm:min-h-[30rem] lg:min-h-[40rem]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activePractitioner.id}
                  src={activePractitioner.image}
                  alt={`${activePractitioner.name} practitioner mood`}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.015 }}
                  animate={{ opacity: 0.82, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.995 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/84 via-black/28 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(practitioners.length).padStart(2, "0")}
                </p>
                <p className="mt-4 max-w-sm text-lg leading-8 text-stone-100/78">
                  {activePractitioner.tone}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
                  Practitioners
                </p>
                <h2 className="mt-5 max-w-4xl font-display text-5xl leading-none text-white md:text-7xl">
                  Practitioners selected for presence and discretion.
                </h2>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-200/72">
                  A curated roster of refined practitioners, chosen for sensual
                  presence, discretion and a composed private appointment.
                </p>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePractitioner.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.32, ease: "easeOut" }}
                    className="mt-9 border-y border-white/10 py-7"
                  >
                    <p className="text-[0.66rem] uppercase tracking-[0.22em] text-stone-200/48">
                      {activePractitioner.role}
                    </p>
                    <h3 className="mt-3 font-display text-5xl leading-none text-white md:text-6xl">
                      {activePractitioner.name}
                    </h3>
                    <p className="mt-5 max-w-2xl leading-7 text-stone-200/72">
                      {activePractitioner.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                      {activePractitioner.details.map((detail) => (
                        <span
                          key={detail}
                          className="text-[0.66rem] uppercase tracking-[0.18em] text-champagne/70"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="inline-flex h-12 w-12 items-center justify-center border border-white/16 bg-white/[0.045] text-white transition hover:border-champagne/60 hover:bg-white/[0.08]"
                    aria-label="Previous practitioner"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="inline-flex h-12 w-12 items-center justify-center border border-white/16 bg-white/[0.045] text-white transition hover:border-champagne/60 hover:bg-white/[0.08]"
                    aria-label="Next practitioner"
                  >
                    <ChevronRight size={18} />
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
        </motion.div>
      </SceneContainer>

      {isBookingOpen ? (
        <BookingModal mode="book" onClose={() => setIsBookingOpen(false)} />
      ) : null}
    </Section>
  );
}
