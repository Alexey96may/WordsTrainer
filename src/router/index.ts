import {
    createRouter,
    createWebHistory,
    type RouteRecordRaw,
} from "vue-router";

import HomeView from "@/views/HomeView.vue";
import { useHead } from "@vueuse/head";
import { i18n } from "@/i18n";
import TrainerPage from "@/views/TrainerPage.vue";
import AboutView from "@/views/AboutView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        meta: { title: "meta.home" },
    },
    {
        path: "/about",
        name: "about",
        component: AboutView,
        meta: { title: "meta.about" },
    },
    {
        path: "/trainer/:slug",
        name: "trainer",
        component: TrainerPage,
        props: true,
        meta: { title: "meta.trainer" },
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/",
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 };
    },
});

const p = new URLSearchParams(window.location.search).get("p");
if (p) {
    history.replaceState(null, "", p);
}

export default router;
