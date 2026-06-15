// Real stone texture from public assets - visible foundation
export function StoneTextureLayer() {
  return (
    <div
      className="absolute inset-0 opacity-[0.18] mix-blend-multiply"
      style={{
        backgroundImage: "url('/ami-studio-4k-art/gray-stone-texture.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    />
  );
}
