export function GradientLayer() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(circle at 18% 20%, rgba(80, 75, 70, 0.28), transparent 45%), radial-gradient(circle at 82% 12%, rgba(60, 56, 52, 0.22), transparent 40%), linear-gradient(135deg, rgba(42, 38, 34, 0.95), rgba(70, 64, 58, 0.68) 48%, rgba(55, 50, 45, 0.82))",
      }}
    />
  );
}
