import { GlassTextureLayer } from "./GlassTextureLayer";
import { GlowLayer } from "./GlowLayer";
import { GradientLayer } from "./GradientLayer";
import { NoiseLayer } from "./NoiseLayer";
import { StoneTextureLayer } from "./StoneTextureLayer";

export function GlobalAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#2a2622]"
    >
      <GradientLayer />
      <StoneTextureLayer />
      <GlassTextureLayer />
      <GlowLayer />
      <NoiseLayer />
    </div>
  );
}
