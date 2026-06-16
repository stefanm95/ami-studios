import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button, RevealText } from "../../components/ui";
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
          className="max-w-5xl"
        >
          <img
            src={brandAssets.logo}
            alt="AMI Studios"
            className="mb-8 h-auto w-full max-w-[520px] opacity-95"
          />
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-white/72">
            Home | Hotel | Office | Yacht
          </p>
          <h1
            className="font-display text-6xl leading-none tracking-[0.02em] text-white sm:text-7xl lg:text-9xl"
            aria-label="EXPERIENCE STILLNESS"
          >
            <RevealText aria-hidden="true">EXPERIENCE</RevealText>
            <RevealText aria-hidden="true">STILLNESS</RevealText>
          </h1>
          <motion.p
            variants={fadeIn}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl md:leading-9"
          >
            Premium massage services delivered with discretion, precision and
            calm.
          </motion.p>
          <motion.div
            variants={fadeIn}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button>
              Book a Session <ArrowRight size={17} />
            </Button>
            <Button
              variant="secondary"
              className="border-white/20 bg-white/8 text-white hover:bg-white/12"
            >
              Explore Rituals
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
