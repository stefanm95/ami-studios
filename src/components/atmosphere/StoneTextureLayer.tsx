import { brandAssets } from "../../data/assets";

// Real stone texture from public assets - visible foundation
export function StoneTextureLayer() {
  return (
    <div
      className="absolute inset-0 opacity-[0.18] mix-blend-multiply"
      style={{
        backgroundImage: `url('${brandAssets.textures.stoneFine}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
