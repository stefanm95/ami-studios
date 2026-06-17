import { motion } from "framer-motion";
import { RevealText } from "../../components/ui";
import { brandAssets } from "../../data/assets";
import { fadeIn } from "../../motion/fadeIn";
import { stagger } from "../../motion/stagger";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden text-white"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-25 brightness-[0.58] contrast-[1.12] saturate-[0.52]"
        src={brandAssets.hero.video}
        poster={brandAssets.hero.fallbackImage}
        autoPlay
        muted
        loop
        playsInline
      />
      <img
        aria-hidden="true"
        src={brandAssets.hero.overlayTexture}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.055]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080706]/82 via-[#141210]/72 to-[#0b0a09]/88" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/74 via-black/34 to-black/58" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 52%, transparent 18%, rgba(0,0,0,0.62) 78%), radial-gradient(circle at 76% 18%, rgba(164,128,83,0.12), transparent 30%)",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col justify-center px-5 pb-10 pt-28 sm:px-8 lg:px-12 lg:pb-14 lg:pt-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-white/72">
            PRIVATE | AFTER-HOURS | DISCREET
          </p>
          <h1
            className="font-display text-[clamp(2.55rem,11vw,4.75rem)] leading-[0.9] tracking-[0.02em] text-white md:text-[clamp(4rem,7vw,6.5rem)]"
            aria-label="PRIVATE MOMENTS, ARRANGED QUIETLY"
          >
            <RevealText aria-hidden="true">PRIVATE</RevealText>
            <RevealText aria-hidden="true">MOMENTS</RevealText>
            <RevealText aria-hidden="true">ARRANGED QUIETLY</RevealText>
          </h1>
          <motion.p
            variants={fadeIn}
            className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg md:leading-8"
          >
            Refined massage appointments composed for comfort, discretion and
            intimate settings.
          </motion.p>
          <motion.div
            variants={fadeIn}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#booking"
              className="inline-flex min-h-12 min-w-[220px] items-center justify-center border border-white/26 bg-white/[0.08] px-7 text-center text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:border-white/40 hover:bg-white/[0.13]"
            >
              Request appointment
            </a>
            <a
              href="#services"
              className="inline-flex min-h-12 min-w-[190px] items-center justify-center border border-white/14 px-7 text-center text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/78 transition duration-300 hover:border-white/28 hover:bg-white/[0.05] hover:text-white"
            >
              View private experiences
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
