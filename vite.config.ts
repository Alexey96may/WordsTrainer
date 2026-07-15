import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import { compression } from "vite-plugin-compression2";
import { VitePWA } from "vite-plugin-pwa";
import { manifestData } from "./manifest.config";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        compression({
            algorithms: ["gzip"],
            exclude: [/\.(br)$/, /\.(gz)$/],
        }),
        VitePWA({
            registerType: "autoUpdate",
            manifest: manifestData,
            base: "/WordsTrainer/",
            scope: "/WordsTrainer/",
            includeAssets: ["icon-192.png", "icon-512.png"],
            workbox: {
                navigateFallback: "/WordsTrainer/index.html",
                navigateFallbackDenylist: [/^\/WordsTrainer\/api/],
            },
        }),
    ],
    base: "/WordsTrainer/",
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    build: {
        minify: "terser",
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
        cssCodeSplit: true,
        assetsInlineLimit: 4096,
        rollupOptions: {
            output: {
                chunkFileNames: "assets/js/[name]-[hash].js",
                entryFileNames: "assets/js/[name]-[hash].js",
                assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        return "vendor";
                    }
                },
            },
        },
        reportCompressedSize: false,
    },
    test: {
        globals: true,
        environment: "jsdom",
        clearMocks: true,
        pool: "threads",
        deps: {
            optimizer: {
                web: {
                    include: ["vue"],
                },
            },
        },
    },
});
