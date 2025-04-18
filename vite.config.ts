import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { EsLinter, linterPlugin, TypeScriptLinter } from "vite-plugin-linter";
import svgr from "vite-plugin-svgr";
import gzipPlugin from "rollup-plugin-gzip";
import Fonts from "unplugin-fonts/vite";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig((configEnv) => ({
  assetsInclude: ["**/*.webp", "**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.svg"],
  plugins: [
    react(),
    svgr(),
    Fonts({
      google: {
        families: [
          {
            name: "Inter",
            styles: "wght@400;500;600;700",
          },
        ],
        display: "swap",
      },
    }),
    ViteMinifyPlugin({}),
    ViteImageOptimizer({}),
    gzipPlugin(),
    linterPlugin({
      include: ["./src/**/*.ts", "./src/**/*.tsx"],
      exclude: [
        "./src/assets/*",
        "./src/locales/*",
        "./src/data/*",
        "./src/utils/*",
        "./src/constants/*",
        "./src/api/*",
      ],
      linters: [
        new EsLinter({
          configEnv: configEnv,
          serveOptions: { clearCacheOnStart: true },
        }),
        new TypeScriptLinter(),
      ],
      build: {
        includeMode: "filesInFolder",
      },
    }),
  ],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@sections": path.resolve(__dirname, "./src/components/_sections"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@apis": path.resolve(__dirname, "./src/api"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@locales": path.resolve(__dirname, "./src/locales"),
      "@layout": path.resolve(__dirname, "./src/layout"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@logos": path.resolve(__dirname, "./src/assets/logos"),
      "@icons": path.resolve(__dirname, "./src/assets/icons"),
      "@flags": path.resolve(__dirname, "./src/assets/flags"),
      "@maps": path.resolve(__dirname, "./src/assets/maps"),
      "@avatar": path.resolve(__dirname, "./src/assets/avatar"),
    },
  },
  build: {
    assetsInlineLimit: 8192,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
}));
