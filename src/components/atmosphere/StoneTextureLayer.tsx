import { brandAssets } from "../../data/assets";

export function StoneTextureLayer() {
  return (
    <div
      className="absolute inset-0 opacity-[0.055] grayscale"
      style={{
        backgroundImage: `url('${brandAssets.textures.stoneSecondary}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}
