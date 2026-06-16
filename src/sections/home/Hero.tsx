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
        className="absolute inset-0 h-full w-full object-cover opacity-40"
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
        className="absolute inset-0 h-full w-full object-cover opacity-[0.12] mix-blend-screen"
      />
      {/* Darker charcoal overlay for strong contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1714]/74 via-[#2a2622]/48 to-[#3d3935]/64" />
      {/* Strong vignette for editorial effect */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 24%, rgba(0,0,0,0.42) 100%)",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col justify-end px-5 pb-14 pt-32 sm:px-8 lg:px-12 lg:pb-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-white/72">
            HOME | HOTEL | OFFICE | YACHT
          </p>
          <h1
            className="font-display text-[clamp(3.4rem,13vw,8.75rem)] leading-none tracking-[0.02em] text-white"
            aria-label="EXPERIENCE STILLNESS"
          >
            <RevealText aria-hidden="true">EXPERIENCE</RevealText>
            <RevealText aria-hidden="true">STILLNESS</RevealText>
          </h1>
          <motion.p
            variants={fadeIn}
            className="mt-7 max-w-xl text-lg leading-8 text-white/70 md:text-xl md:leading-9"
          >
            Premium massage services, composed for private settings.
          </motion.p>
          <motion.div
            variants={fadeIn}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
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
              Explore services
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
