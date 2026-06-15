import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button, RevealText } from "../../components/ui";
import { fadeIn } from "../../motion/fadeIn";
import { stagger } from "../../motion/stagger";

const heroVideo =
  "https://videos.pexels.com/video-files/6620166/6620166-uhd_2560_1440_25fps.mp4";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-charcoal text-ivory">
      <motion.video
        className="absolute inset-0 h-full w-full object-cover opacity-58"
        src={heroVideo}
        poster="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=82"
        autoPlay
        muted
        loop
        playsInline
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 18, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/32 to-charcoal" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/78 via-charcoal/36 to-transparent" />
      <motion.div
        className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-charcoal via-charcoal/68 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col justify-end px-5 pb-14 pt-32 sm:px-8 lg:px-12 lg:pb-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-gold">AMI Studio Bucharest</p>
          <h1
            className="font-display text-6xl leading-none tracking-[0.02em] sm:text-7xl lg:text-9xl"
            aria-label="EXPERIENCE STILLNESS"
          >
            <RevealText aria-hidden="true">EXPERIENCE</RevealText>
            <RevealText aria-hidden="true">STILLNESS</RevealText>
          </h1>
          <motion.p variants={fadeIn} className="mt-7 max-w-2xl text-lg leading-8 text-ivory/78 md:text-xl md:leading-9">
            Luxury massage rituals crafted for body and mind.
          </motion.p>
          <motion.div variants={fadeIn} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button>
              Book a Session <ArrowRight size={17} />
            </Button>
            <Button variant="secondary" className="border-white/25 bg-white/10 text-ivory hover:bg-white/15">
              Explore Rituals
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
