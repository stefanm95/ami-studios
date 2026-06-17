import { motion } from "framer-motion";
import { useState } from "react";
import { BookingModal } from "../../components/booking";
import {
  Container,
  ImageReveal,
  Section,
  SectionHeading,
} from "../../components/ui";
import { brandAssets } from "../../data/assets";
import { services } from "../../data/services";
import { SceneDepth } from "../../layouts/scene";
import { cn } from "../../lib/cn";
import { fadeUp } from "../../motion/fadeUp";
import { stagger } from "../../motion/stagger";

export function Services() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <Section id="services" className="relative text-white" size="sectionSM">
      <Container className="relative overflow-hidden">
        <SceneDepth />
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            className="relative min-h-[28rem] overflow-hidden border border-white/10 lg:min-h-[46rem]"
          >
            <ImageReveal
              src={brandAssets.sections.services}
              alt="Private AMI Studios atmosphere"
              wrapperClassName="absolute inset-0 h-full"
              className="duration-700"
              whileHover={{ scale: 1.01 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/42 to-black/18" />
            <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
                Home / Hotel / Office / Yacht
              </p>
              <p className="mt-4 max-w-md text-lg leading-8 text-stone-100/76">
                Private appointments, quiet room preparation and discreet
                coordination.
              </p>
            </div>
          </motion.div>

          <div>
            <SectionHeading
              eyebrow="Services"
              title="An invitation into a private rhythm."
              copy="Three private erotic massage experiences, arranged around setting, atmosphere and discretion."
              className="max-w-3xl"
            />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              className="mt-8 border-y border-white/10"
            >
              {services.map((service, index) => (
                <motion.article
                  key={service.name}
                  variants={fadeUp}
                  className="group grid gap-4 border-b border-white/10 py-6 last:border-b-0 sm:grid-cols-[4rem_1fr] lg:py-7"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-champagne/80">
                    0{index + 1}
                  </p>
                  <div>
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="font-display text-4xl leading-none text-white md:text-5xl">
                          {service.name}
                        </h3>
                        <p className="mt-4 max-w-2xl leading-7 text-stone-200/72">
                          {service.description}
                        </p>
                      </div>
                      <p className="shrink-0 text-xs uppercase tracking-[0.18em] text-stone-200/58 md:text-right">
                        {service.duration}
                        <br />
                        {service.price}
                      </p>
                    </div>
                    <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {service.benefits.map((benefit) => (
                          <span
                            key={benefit}
                            className="text-[0.66rem] uppercase tracking-[0.18em] text-stone-200/45"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsBookingOpen(true)}
                        className={cn(
                          "w-fit text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-champagne/82 transition duration-300",
                          "group-hover:translate-x-1 group-hover:text-champagne",
                        )}
                      >
                        Request this
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="max-w-md text-sm leading-6 text-stone-200/60">
                Home / Hotel / Office / Yacht / Discreet coordination
              </p>
              <button
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="inline-flex min-h-12 w-fit items-center justify-center border border-white/20 bg-white/[0.06] px-6 text-xs font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:border-champagne/70 hover:bg-white/[0.1]"
              >
                Request a private appointment
              </button>
            </motion.div>
          </div>
        </div>
      </Container>

      {isBookingOpen ? (
        <BookingModal mode="book" onClose={() => setIsBookingOpen(false)} />
      ) : null}
    </Section>
  );
}
