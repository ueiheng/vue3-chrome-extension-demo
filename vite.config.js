import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { watch } from "vite-plugin-watch";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  base: "./",
});
