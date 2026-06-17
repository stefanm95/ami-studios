import { motion } from "framer-motion";
import { Container, Section } from "../../components/ui";
import { faq } from "../../data/faq";
import { SceneDepth } from "../../layouts/scene";
import { fadeUp } from "../../motion/fadeUp";
import { stagger } from "../../motion/stagger";

export function Faq() {
  return (
    <Section id="faq" className="relative text-white" size="sectionSM">
      <Container className="relative overflow-hidden">
        <SceneDepth />
        <div className="grid gap-8 border-y border-white/10 py-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 lg:py-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne">
              FAQ
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-white md:text-5xl">
              Before requesting an appointment.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-stone-200/68 md:text-base md:leading-7">
              Clear details for private bookings, arrival, discretion and
              conduct.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.16 }}
            className="divide-y divide-white/10 border-y border-white/10 bg-white/[0.018]"
          >
            {faq.map((item) => (
              <motion.details
                key={item.question}
                variants={fadeUp}
                className="group px-0 py-4 sm:px-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left font-display text-xl leading-snug text-white transition hover:text-white/86 md:text-2xl">
                  <span>{item.question}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center border border-white/12 text-base text-champagne/78 transition group-open:rotate-45 group-hover:border-white/22">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-200/72 md:text-base md:leading-7">
                  {item.answer}
                </p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
