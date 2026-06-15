# AMI Studio

Luxury massage studio built with React, Vite, TypeScript, Tailwind CSS and Framer Motion.

## Architecture

```txt
src/
  app/          app shell and routes
  assets/       static project assets
  components/
    ui/         primitive UI grouped by component
  constants/
    tokens/     design tokens
  data/         content layer
  hooks/        reusable hooks
  layouts/
    footer/     footer layout
    navigation/ navbar layout
    scene/      reusable scene composition
  lib/          utilities
  motion/       reusable animation variants
  pages/        routed pages
  sections/
    home/       homepage scenes
  styles/       global styles
  types/        shared content types
```

## Commands

```bash
npm install
npm run dev
npm run build
```
