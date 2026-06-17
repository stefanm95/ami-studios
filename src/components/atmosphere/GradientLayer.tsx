export function GradientLayer() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(circle at 18% 16%, rgba(155, 124, 84, 0.10), transparent 34%), radial-gradient(circle at 82% 18%, rgba(178, 162, 134, 0.07), transparent 38%), radial-gradient(circle at 56% 88%, rgba(88, 78, 66, 0.10), transparent 42%), linear-gradient(135deg, rgba(12, 11, 10, 0.98), rgba(27, 25, 23, 0.94) 44%, rgba(14, 13, 12, 0.98))",
      }}
    />
  );
}
