import { motion } from "framer-motion";
import {
  Container,
  ImageReveal,
  PriceCard,
  Section,
  SectionHeading,
} from "../../components/ui";
import { services } from "../../data/services";
import { SceneDepth, SceneGrid } from "../../layouts/scene";
import { fadeUp } from "../../motion/fadeUp";
import { stagger } from "../../motion/stagger";

export function Services() {
  return (
    <Section id="services" className="relative text-white">
      <Container className="relative overflow-hidden">
        <SceneDepth />
        <SectionHeading
          eyebrow="Services"
          title="Premium massage, wherever the appointment needs to happen."
          copy="Treatments are structured for private residences, hotel suites, executive offices and yacht schedules."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          <SceneGrid className="mt-12">
            {services.map((service) => (
              <motion.div key={service.name} variants={fadeUp}>
                <PriceCard
                  className="h-full"
                  name={service.name}
                  duration={service.duration}
                  price={service.price}
                  media={
                    <ImageReveal
                      src={service.image}
                      alt={service.name}
                      wrapperClassName="aspect-[4/3]"
                    />
                  }
                >
                  <p className="mt-5 leading-7 text-stone-200/80">
                    {service.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="border border-white/10 px-3 py-1 text-xs text-stone-200/70"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </PriceCard>
              </motion.div>
            ))}
          </SceneGrid>
        </motion.div>
      </Container>
    </Section>
  );
}
