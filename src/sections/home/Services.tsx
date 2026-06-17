import { motion } from "framer-motion";
import { useState } from "react";
import { BookingModal } from "../../components/booking";
import { Container, ImageReveal, Section } from "../../components/ui";
import { brandAssets } from "../../data/assets";
import { services } from "../../data/services";
import { SceneDepth } from "../../layouts/scene";
import { cn } from "../../lib/cn";
import { fadeUp } from "../../motion/fadeUp";
import { stagger } from "../../motion/stagger";

export function Services() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <Section
      id="services"
      className="relative py-12 text-white md:py-14 lg:py-16"
      size="sectionXS"
    >
      <Container className="relative overflow-hidden">
        <SceneDepth />
        <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-9 xl:gap-11">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            className="relative min-h-[20rem] overflow-hidden border border-white/10 sm:min-h-[24rem] lg:h-[52vh] lg:min-h-[26rem] lg:max-h-[34rem]"
          >
            <ImageReveal
              src={brandAssets.sections.services}
              alt="Private AMI Studios atmosphere"
              wrapperClassName="absolute inset-0 h-full"
              className="duration-700"
              whileHover={{ scale: 1.01 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/42 to-black/18" />
            <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-7 lg:p-8">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-champagne">
                Warm lighting / Quiet timing / Private setting
              </p>
              <p className="mt-3 max-w-md text-base leading-7 text-stone-100/76">
                Appointments requested in confidence and carefully arranged
                around the room, arrival and atmosphere.
              </p>
            </div>
          </motion.div>

          <div>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
                Services
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-white md:text-4xl lg:text-[2.85rem]">
                Private appointments, carefully arranged.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-200/76 md:text-base md:leading-7">
                A quiet selection of refined experiences shaped around
                atmosphere, timing and discretion.
              </p>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              className="mt-5 border-y border-white/10"
            >
              {services.map((service, index) => (
                <motion.article
                  key={service.name}
                  variants={fadeUp}
                  className="group grid gap-3 border-b border-white/10 py-4 last:border-b-0 sm:grid-cols-[4rem_1fr] lg:py-4"
                >
                  <p className="font-display text-3xl leading-none text-champagne/30 md:text-4xl">
                    0{index + 1}
                  </p>
                  <div>
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="font-display text-2xl leading-none text-white md:text-3xl xl:text-[2.15rem]">
                          {service.name}
                        </h3>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-stone-200/70">
                          {service.description}
                        </p>
                      </div>
                      <p className="shrink-0 text-[0.68rem] uppercase leading-5 tracking-[0.17em] text-stone-200/54 md:text-right">
                        {service.duration}
                        <br />
                        {service.price}
                      </p>
                    </div>
                    <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex flex-wrap gap-x-3 gap-y-2">
                        {service.benefits.map((benefit) => (
                          <span
                            key={benefit}
                            className="text-[0.6rem] uppercase tracking-[0.17em] text-stone-200/42"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsBookingOpen(true)}
                        className={cn(
                          "w-fit text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-champagne/82 transition duration-300",
                          "group-hover:translate-x-1 group-hover:text-champagne",
                        )}
                      >
                        Request appointment
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
              className="mt-5 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="max-w-md text-sm leading-6 text-stone-200/58">
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
