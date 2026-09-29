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

app.use(IonicVue);
app.use(router);
app.use(i18n);
app.use(head);

if (Capacitor.getPlatform() !== "web") {
    await import("@ionic/vue/css/core.css");
    await import("@ionic/vue/css/normalize.css");
}

app.mount("#app");
