import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
    appId: "com.alexshulga.greektrainer",
    appName: "Greek Trainer",
    webDir: "dist",
    server: {
        androidScheme: "https",
    },
};

export default config;
