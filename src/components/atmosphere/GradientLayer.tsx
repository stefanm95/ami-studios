export function GradientLayer() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(circle at 18% 20%, rgba(230, 226, 220, 0.32), transparent 38%), radial-gradient(circle at 82% 12%, rgba(190, 186, 180, 0.18), transparent 32%), linear-gradient(135deg, rgba(244, 242, 238, 0.88), rgba(200, 196, 190, 0.56) 48%, rgba(235, 232, 228, 0.72))",
      }}
    />
  );
}
