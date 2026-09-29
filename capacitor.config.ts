import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
    appId: "com.alexshulga.greektrainer",
    appName: "Greek Trainer",
    webDir: "dist",
    server: {
        androidScheme: "https",
    },
    plugins: {
        SplashScreen: {
            launchShowDuration: 1500,
            launchAutoHide: true,
            backgroundColor: "#181818",
            androidSplashResourceName: "splash",
            androidScaleType: "CENTER_CROP",
            showSpinner: false,
            splashFullScreen: true,
            splashImmersive: false,
        },
    },
};

export default config;
