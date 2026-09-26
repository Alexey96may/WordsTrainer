import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { Capacitor } from "@capacitor/core";

import { IonicVue } from "@ionic/vue";
import { i18n } from "./i18n";
import { createHead } from "@vueuse/head";
import router from "./router";

const app = createApp(App);
const head = createHead();

if (Capacitor.getPlatform() !== "web") {
    await import("@ionic/vue/css/core.css");
    await import("@ionic/vue/css/normalize.css");
    await import("@ionic/vue/css/structure.css");
    await import("@ionic/vue/css/typography.css");

    const { IonicVue } = await import("@ionic/vue");
    app.use(IonicVue);
}

app.use(IonicVue);
app.use(router);
app.use(i18n);
app.use(head);

app.mount("#app");
