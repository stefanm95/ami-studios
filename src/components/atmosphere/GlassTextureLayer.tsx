// Subtle frosted glass/ribbed texture overlay - soft light effect
export function GlassTextureLayer() {
  return (
    <div
      className="absolute inset-0 opacity-[0.05] mix-blend-screen"
      style={{
        backgroundImage:
          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 1%, transparent 2%, transparent 98%, rgba(255,255,255,0.08) 99%, transparent 100%), linear-gradient(0deg, transparent 0%, rgba(255,255,255,0.06) 0.5%, transparent 1%, transparent 99%, rgba(255,255,255,0.06) 99.5%, transparent 100%)",
        backgroundSize: "2px 2px",
      }}
    />
  );
}
