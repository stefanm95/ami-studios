import { brandAssets } from "../../data/assets";

// Subtle frosted glass/ribbed texture overlay - soft light effect
export function GlassTextureLayer() {
  return (
    <div
      className="absolute inset-0 opacity-[0.035] mix-blend-screen"
      style={{
        backgroundImage: `url('${brandAssets.textures.glass}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
