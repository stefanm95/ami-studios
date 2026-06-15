// Subtle glow layer - static positions for performance
// Slow breathing effect is handled via CSS animation if needed
const glows = [
  "left-[4%] top-[10%] h-[34rem] w-[34rem] bg-[#f5e7d4]",
  "right-[2%] top-[30%] h-[38rem] w-[38rem] bg-[#d7c3a5]",
  "bottom-[2%] left-[28%] h-[32rem] w-[32rem] bg-[#ece2d4]",
];

export function GlowLayer() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {glows.map((glow) => (
        <div
          key={glow}
          className={`absolute rounded-full opacity-[0.08] blur-[160px] ${glow}`}
        />
      ))}
    </div>
  );
}
