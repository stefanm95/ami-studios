// Real stone texture from public assets - visible foundation
export function StoneTextureLayer() {
  return (
    <div
      className="absolute inset-0 opacity-[0.18] mix-blend-multiply"
      style={{
        backgroundImage:
          "url('/ami-studio-4k-art/natural-stone-texture-photo-natural-texture-natural-stone_673198-43265.jpg')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    />
  );
}
