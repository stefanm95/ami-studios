// Subtle stone glow layer - static positions for performance
// Monochrome grey/stone accents only
const glows = [
  "left-[4%] top-[10%] h-[34rem] w-[34rem] bg-[#cfc8be]",
  "right-[2%] top-[30%] h-[38rem] w-[38rem] bg-[#aaa197]",
  "bottom-[2%] left-[28%] h-[32rem] w-[32rem] bg-[#bfb8ae]",
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
