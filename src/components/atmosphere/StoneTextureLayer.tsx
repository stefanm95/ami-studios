// Subtle stone texture overlay - very low opacity
export function StoneTextureLayer() {
  return (
    <div
      className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='stoneTex'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch' result='noise'/%3E%3CfeDisplacementMap in='SourceGraphic' in2='noise' scale='2' xChannelSelector='R' yChannelSelector='G'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23stoneTex)' fill='%23625b55'/%3E%3C/svg%3E\")",
      }}
    />
  );
}
