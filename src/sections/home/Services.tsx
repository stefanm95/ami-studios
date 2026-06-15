import { motion } from "framer-motion";
import { Card, Container, ImageReveal, Section, SectionHeading } from "../../components/ui";
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
              <Card className="h-full overflow-hidden">
                <ImageReveal src={service.image} alt={service.name} wrapperClassName="aspect-[4/3]" />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-3xl">{service.name}</h3>
                      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-bronze">{service.duration}</p>
                    </div>
                    <p className="text-lg font-semibold text-espresso">{service.price}</p>
                  </div>
                  <p className="mt-5 leading-7 text-charcoal/66">{service.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.benefits.map((benefit) => (
                      <span key={benefit} className="border border-charcoal/10 px-3 py-1 text-xs text-charcoal/64">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
          </SceneGrid>
        </motion.div>
      </Container>
    </Section>
  );
}
