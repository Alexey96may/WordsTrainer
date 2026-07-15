export const manifestData = {
    name: "αGreek Trainer",
    start_url: "/WordsTrainer/",
    scope: "/WordsTrainer/",
    short_name: "GreekTrainerApp",
    display: "standalone" as const,
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
        {
            src: "icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
        },
        {
            src: "icon-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
        },
    ],
};
