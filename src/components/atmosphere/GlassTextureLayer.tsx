export function GlassTextureLayer() {
  return (
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        background:
          "linear-gradient(104deg, transparent 0 18%, rgba(255,255,255,0.045) 18.4%, transparent 18.8% 42%, rgba(212,196,168,0.026) 42.35%, transparent 42.8% 100%)",
        backgroundSize: "56rem 100%",
      }}
    />
  );
}
