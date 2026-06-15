import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button, RevealText } from "../../components/ui";
import { fadeIn } from "../../motion/fadeIn";
import { stagger } from "../../motion/stagger";

const heroVideo =
  "https://videos.pexels.com/video-files/6620166/6620166-uhd_2560_1440_25fps.mp4";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden text-white"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        src={heroVideo}
        poster="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=82"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Monochrome stone-toned overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#302d2a]/62 via-[#46413d]/32 to-[#625b55]/48" />
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.2) 100%)" />

      <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col justify-end px-5 pb-14 pt-32 sm:px-8 lg:px-12 lg:pb-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-white/72">
            AMI Studio Bucharest
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
            Luxury massage rituals crafted for body and mind.
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
