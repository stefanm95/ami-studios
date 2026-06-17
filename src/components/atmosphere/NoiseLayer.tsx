import { brandAssets } from "../../data/assets";

export function NoiseLayer() {
  return (
    <div
      className="absolute inset-0 opacity-[0.012]"
      style={{
        backgroundImage: `url('${brandAssets.textures.noise}')`,
        backgroundSize: "360px 360px",
      }}
    />
  );
}
