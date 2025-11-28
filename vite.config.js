import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "src/",           // The root folder of your project
  server: {
    port: 5173,           // Dev server port
    open: true,           // Open browser automatically
  },
  build: {
    outDir: "dist",       // Output folder after build
    sourcemap: true,      // Generate sourcemaps for debugging
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias '@' → src
    },
  },
});