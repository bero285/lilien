import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // Allow network access
    port: 5173, // Set a specific port
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
