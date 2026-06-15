import { motion } from "framer-motion";
import { Container, ImageReveal, PriceCard, Section, SectionHeading } from "../../components/ui";
import { services } from "../../data/services";
import { SceneGrid } from "../../layouts/scene";
import { fadeUp } from "../../motion/fadeUp";
import { stagger } from "../../motion/stagger";

export function Services() {
  return (
    <Section id="services" className="bg-ivory text-charcoal">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="High-touch rituals, clearly priced."
          copy="Large editorial cards built for the main services scene and ready to become a dedicated Services page later."
        />
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
          <SceneGrid className="mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              variants={fadeUp}
            >
              <PriceCard
                className="h-full"
                name={service.name}
                duration={service.duration}
                price={service.price}
                media={<ImageReveal src={service.image} alt={service.name} wrapperClassName="aspect-[4/3]" />}
              >
                <p className="mt-5 leading-7 text-charcoal/66">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.benefits.map((benefit) => (
                    <span key={benefit} className="border border-charcoal/10 px-3 py-1 text-xs text-charcoal/64">
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
