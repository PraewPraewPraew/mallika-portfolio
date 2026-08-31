/// <reference types="vite/client" />

// Custom module scheme used throughout this project to import images from
// src/assets (see the `figma-asset-resolver` plugin in vite.config.ts).
// Without this declaration, every `import x from "figma:asset/..."` shows a
// false "Cannot find module" error in editors, even though the build works
// fine (Vite resolves it at build time via the plugin, not via TypeScript).
declare module "figma:asset/*" {
  const src: string;
  export default src;
}
