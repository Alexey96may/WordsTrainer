import {
    createRouter,
    createWebHistory,
    type RouteRecordRaw,
} from "vue-router";

import HomeView from "@/views/HomeView.vue";
import TrainerPage from "@/views/TrainerPage.vue";
import AboutView from "@/views/AboutView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        component: AboutView,
    },
    {
        path: "/trainer/:slug",
        name: "trainer",
        component: TrainerPage,
        props: true,
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

// Меняем тайтл вкладки браузера при переходах
router.beforeEach((to, from, next) => {
    document.title = (to.meta.title as string) || "Греческий Язык";
    next();
});

export default router;
