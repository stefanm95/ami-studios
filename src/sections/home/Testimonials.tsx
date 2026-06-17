import { motion } from "framer-motion";
import { Container, Section, SectionHeading } from "../../components/ui";
import { testimonials } from "../../data/testimonials";
import { SceneDepth } from "../../layouts/scene";
import { fadeUp } from "../../motion/fadeUp";
import { stagger } from "../../motion/stagger";

export function Testimonials() {
  return (
    <Section id="testimonials" className="relative text-white" size="sectionSM">
      <Container className="relative overflow-hidden">
        <SceneDepth />
        <div className="grid gap-8 border-y border-white/10 py-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-start lg:gap-14 lg:py-10">
          <SectionHeading
            eyebrow="Testimonials"
            title="Private notes, quietly shared."
            copy="Short impressions from clients who value discretion, comfort and quiet timing."
            className="max-w-2xl"
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            className="grid gap-3 md:grid-cols-2 md:auto-rows-fr"
          >
            {testimonials.map((testimonial) => (
              <motion.article
                key={`${testimonial.name}-${testimonial.detail}`}
                variants={fadeUp}
                className="group flex h-full min-h-[13rem] flex-col justify-between border border-white/10 bg-white/[0.026] p-5 transition duration-300 hover:border-white/16 hover:bg-white/[0.04] sm:p-6"
              >
                <p className="font-display text-[1.65rem] leading-snug text-white/84 md:text-[1.9rem]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-4 text-[0.66rem] uppercase tracking-[0.18em] text-stone-200/48">
                  <span>{testimonial.name}</span>
                  <span>{testimonial.detail}</span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
