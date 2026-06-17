export function GlowLayer() {
  return (
    <div
      className="absolute inset-0 opacity-70"
      style={{
        background:
          "radial-gradient(circle at 8% 16%, rgba(111,90,66,0.045), transparent 30%), radial-gradient(circle at 92% 36%, rgba(58,57,53,0.05), transparent 34%)",
      }}
    />
  );
}
