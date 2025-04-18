import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: [".js", ".ts", ".vue", ".css"], // Ensure .vue is included
  },
});
