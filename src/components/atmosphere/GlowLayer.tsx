import { motion } from "framer-motion";

const glows = [
  "left-[4%] top-[10%] h-[34rem] w-[34rem] bg-[#f5e7d4]",
  "right-[2%] top-[30%] h-[38rem] w-[38rem] bg-[#d7c3a5]",
  "bottom-[2%] left-[28%] h-[32rem] w-[32rem] bg-[#ece2d4]",
];

export function GlowLayer() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {glows.map((glow, index) => (
        <motion.div
          key={glow}
          className={`absolute rounded-full opacity-[0.12] blur-[180px] ${glow}`}
          animate={{
            x: index === 1 ? [-18, 16, -18] : [14, -12, 14],
            y: index === 2 ? [10, -18, 10] : [-12, 18, -12],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 44 + index * 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
