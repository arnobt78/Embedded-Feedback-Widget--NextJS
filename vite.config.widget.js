import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import alias from "@rollup/plugin-alias";

export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [{ find: "@", replacement: resolve(__dirname, "src") }],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/web-component.jsx"),
      name: "Widget",
      fileName: () => "widget.umd.js",
      formats: ["umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    outDir: "public",
    emptyOutDir: false,
  },
});
