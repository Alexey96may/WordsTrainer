import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import { i18n } from "./i18n";
import { createHead } from "@vueuse/head";
import router from "./router";

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(i18n);
app.use(head);

app.mount("#app");
