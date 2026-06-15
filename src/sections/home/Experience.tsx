import { motion } from "framer-motion";
import { ParallaxImage } from "../../components/image";
import { Section } from "../../components/ui";
import { SceneContainer, SceneContent, SceneDepth } from "../../layouts/scene";
import { fadeUp } from "../../motion/fadeUp";

export function Experience() {
  return (
    <Section id="experience" className="relative text-white" size="sectionXL">
      <SceneContainer className="items-center lg:grid-cols-[0.92fr_1.08fr]">
        <SceneDepth />
        <SceneContent>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.24em] text-champagne"
          >
            Experience
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-5 font-display text-5xl leading-none text-white md:text-7xl"
          >
            Restore body.
            <br />
            Calm the mind.
            <br />
            Reconnect with yourself.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-7 max-w-xl text-lg leading-8 text-stone-200/75"
          >
            AMI Studio is designed as a private wellness scene: warm materials,
            soft light, quiet pacing and therapists who understand discretion.
          </motion.p>
        </SceneContent>
        <ParallaxImage
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=82"
          alt="Spa towels and warm wellness interior"
          wrapperClassName="aspect-[4/5] lg:aspect-[5/4]"
          speed={42}
        />
      </SceneContainer>
    </Section>
  );
}
