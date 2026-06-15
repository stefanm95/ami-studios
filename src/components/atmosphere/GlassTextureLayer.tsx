// Subtle frosted glass/ribbed texture overlay - very low opacity
export function GlassTextureLayer() {
  return (
    <div
      className="absolute inset-0 opacity-[0.02] mix-blend-screen"
      style={{
        backgroundImage:
          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 1%, transparent 2%, transparent 98%, rgba(255,255,255,0.1) 99%, transparent 100%), linear-gradient(0deg, transparent 0%, rgba(255,255,255,0.08) 0.5%, transparent 1%, transparent 99%, rgba(255,255,255,0.08) 99.5%, transparent 100%)",
        backgroundSize: "2px 2px",
      }}
    />
  );
}
