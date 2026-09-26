import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import { VitePWA } from "vite-plugin-pwa";
import { manifestData } from "./manifest.config";

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
    const isCapacitor = mode === "capacitor";
    const currentBase = isCapacitor ? "./" : "/WordsTrainer/";

    return {
        plugins: [
            vue(),
            vueDevTools(),
            ...(!isCapacitor
                ? [
                      VitePWA({
                          registerType: "autoUpdate",
                          manifest: manifestData,
                          base: currentBase,
                          scope: currentBase,
                          includeAssets: ["icon-192.png", "icon-512.png"],
                          workbox: {
                              navigateFallback: `${currentBase}index.html`,
                              navigateFallbackDenylist: [
                                  /^\/WordsTrainer\/api/,
                              ],
                          },
                      }),
                  ]
                : []),
        ],
        base: currentBase,
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url)),
                ...(isCapacitor && {
                    "@/utils/db": fileURLToPath(
                        new URL("./src/utils/db.native.ts", import.meta.url),
                    ),
                    "@/components/ui/AppButton.vue": fileURLToPath(
                        new URL(
                            "./src/components/ui/AppButton.native.vue",
                            import.meta.url,
                        ),
                    ),
                    "@/components/ui/AppInput.vue": fileURLToPath(
                        new URL(
                            "./src/components/ui/AppInput.native.vue",
                            import.meta.url,
                        ),
                    ),
                }),
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
    };
});
