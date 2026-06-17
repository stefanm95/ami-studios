const base = "/ami-studio-4k-art";

export const brandAssets = {
  logo: `${base}/ami-logo-white.png`,
  logoSlate: `${base}/ami-logo-no-background.png`,
  serviceStrip: `${base}/sherzod-gulomov-npE_I2GzpHY-unsplash.jpg`,
  textures: {
    stonePrimary: `${base}/toa-heftiba-AjNPMiEk5ZM-unsplash.jpg`,
    stoneSecondary: `${base}/gray-stone-texture.jpg`,
    stoneFine: `${base}/natural-stone-texture-photo-natural-texture-natural-stone_673198-43265.jpg`,
    glass: `${base}/ambitious-studio-rick-barrett-jNOUEeCVKe4-unsplash.jpg`,
    glassSecondary: `${base}/anh-tuan-to--eY5FLlfMDA-unsplash.jpg`,
    smoke: `${base}/sherzod-gulomov-npE_I2GzpHY-unsplash.jpg`,
    noise: `${base}/abstract-wall-stone-texture_17005-1923(1).jpg`,
  },
  hero: {
    video: `${base}/240528_medium.mp4`,
    fallbackImage: `${base}/sherzod-gulomov-npE_I2GzpHY-unsplash.jpg`,
    overlayTexture: `${base}/toa-heftiba-AjNPMiEk5ZM-unsplash.jpg`,
  },
  sections: {
    signature: `${base}/sherzod-gulomov-npE_I2GzpHY-unsplash.jpg`,
    services: `${base}/sherzod-gulomov-npE_I2GzpHY-unsplash.jpg`,
    experience: `${base}/visualsofdana-IfsRTQu6Djk-unsplash.jpg`,
    therapists: `${base}/juhani-pelli-n2Zf3kdcTZA-unsplash.jpg`,
    testimonials: `${base}/wall-stone-texture_23-2148132237.jpg`,
    booking: `${base}/sherzod-gulomov-npE_I2GzpHY-unsplash.jpg`,
    gallery: [
      `${base}/toa-heftiba-AjNPMiEk5ZM-unsplash.jpg`,
      `${base}/visualsofdana-IfsRTQu6Djk-unsplash.jpg`,
      `${base}/gray-stone-texture.jpg`,
      `${base}/sa_ba_sabrina-stones-7410439_1920.jpg`,
      `${base}/sherzod-gulomov-npE_I2GzpHY-unsplash.jpg`,
      `${base}/wall-stone-texture_23-2148132237.jpg`,
    ],
  },
  videos: {
    hero: `${base}/240528_medium.mp4`,
    alternate: `${base}/20507-310204661_medium.mp4`,
    ambient: `${base}/158447-816753213_medium.mp4`,
  },
} as const;
