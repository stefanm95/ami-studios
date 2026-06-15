export function GradientLayer() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(circle at 18% 18%, rgba(245,231,212,0.42), transparent 34%), radial-gradient(circle at 82% 8%, rgba(215,195,165,0.24), transparent 30%), linear-gradient(135deg, rgba(251,247,239,0.92), rgba(232,223,210,0.62) 48%, rgba(250,246,238,0.86))",
      }}
    />
  );
}
