import { motion } from "framer-motion";
import { ParallaxImage } from "../../components/image";
import { Section } from "../../components/ui";
import { brandAssets } from "../../data/assets";
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
            Quiet setup.
            <br />
            Precise treatment.
            <br />
            Complete discretion.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-7 max-w-xl text-lg leading-8 text-stone-200/75"
          >
            Every appointment is prepared for the environment: room, timing,
            pressure, privacy and departure.
          </motion.p>
        </SceneContent>
        <ParallaxImage
          src={brandAssets.sections.experience}
          alt="AMI Studios private massage room"
          wrapperClassName="aspect-[4/5] lg:aspect-[5/4]"
          speed={42}
        />
      </SceneContainer>
    </Section>
  );
}
