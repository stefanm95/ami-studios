import { motion } from "framer-motion";
import { Card, Container, Section, SectionHeading } from "../../components/ui";
import { SceneDepth } from "../../layouts/scene";
import { fadeUp } from "../../motion/fadeUp";
import { stagger } from "../../motion/stagger";

const rituals = [
  "Private arrival protocol",
  "Residence-ready setup",
  "Therapist consultation",
  "Discreet aftercare",
];

export function SignatureRituals() {
  return (
    <Section id="rituals" className="relative text-white">
      <Container className="relative overflow-hidden">
        <SceneDepth />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Signature Rituals"
            title="Massage services composed for private settings."
            copy="AMI Studios delivers calm, professional treatments at home, hotel, office and yacht."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {rituals.map((ritual) => (
              <motion.div key={ritual} variants={fadeUp}>
                <Card className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-champagne">
                    Included
                  </p>
                  <h3 className="mt-3 font-display text-3xl text-white">
                    {ritual}
                  </h3>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
