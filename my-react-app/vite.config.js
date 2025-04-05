import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Import the plugins properly for ESM
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
