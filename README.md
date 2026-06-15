# AMI Studio

Luxury massage studio built with React, Vite, TypeScript, Tailwind CSS and Framer Motion.

## Architecture

```txt
src/
  app/          app shell and routes
  assets/       static project assets
  components/
    atmosphere/ global gradient, glow and noise layers
    image/      parallax image primitives
    ui/         primitive UI grouped by component
  constants/
    tokens/     design tokens
  data/         content layer
  hooks/        reusable hooks
    useLenis    global smooth scroll
  layouts/
    footer/     footer layout
    navigation/ navbar layout
    root/       global atmosphere, scroll, nav and footer
    scene/      reusable scene composition
  lib/          utilities
  motion/       reusable animation variants and scroll hooks
  pages/        routed pages
    home/       homepage orchestrator and section registry
    shared/     shared page shells
    services/   services route
    about/      about route
    therapists/ therapists route
    faq/        FAQ route
    booking/    booking route
    contact/    contact route
  sections/
    home/       homepage scenes
      gallery-scene/ split gallery scene, grid and cards
  styles/       global styles
  types/        shared content types
```

## Commands

```bash
npm install
npm run dev
npm run build
```
