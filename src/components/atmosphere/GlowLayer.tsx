// Subtle charcoal/warm grey glow layer - static positions for performance
// Darker stone tones for sophisticated depth
const glows = [
  "left-[4%] top-[10%] h-[34rem] w-[34rem] bg-[#5a5248]",
  "right-[2%] top-[30%] h-[38rem] w-[38rem] bg-[#474238]",
  "bottom-[2%] left-[28%] h-[32rem] w-[32rem] bg-[#544d45]",
];

export function GlowLayer() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {glows.map((glow) => (
        <div
          key={glow}
          className={`absolute rounded-full opacity-[0.06] blur-[160px] ${glow}`}
        />
      ))}
    </div>
  );
}
