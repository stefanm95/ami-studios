import { GlowLayer } from "./GlowLayer";
import { GradientLayer } from "./GradientLayer";
import { NoiseLayer } from "./NoiseLayer";

export function GlobalAtmosphere() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-ivory">
      <GradientLayer />
      <GlowLayer />
      <NoiseLayer />
    </div>
  );
}
