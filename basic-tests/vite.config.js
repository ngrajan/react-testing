/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { configDefaults } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    exclude: [...configDefaults.exclude, "packages/template/*"],
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.js",
    isolate: false,
    threads: false,
  },
});
