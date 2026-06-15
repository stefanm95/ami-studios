import { GlassTextureLayer } from "./GlassTextureLayer";
import { GlowLayer } from "./GlowLayer";
import { GradientLayer } from "./GradientLayer";
import { NoiseLayer } from "./NoiseLayer";
import { StoneTextureLayer } from "./StoneTextureLayer";

export function GlobalAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#f4f2ee]"
    >
      <GradientLayer />
      <GlowLayer />
      <StoneTextureLayer />
      <GlassTextureLayer />
      <NoiseLayer />
    </div>
  );
}
