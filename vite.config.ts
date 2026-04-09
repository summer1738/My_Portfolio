import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Set VITE_BASE=/repo-name/ when deploying to GitHub Project Pages
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? "/",
});
