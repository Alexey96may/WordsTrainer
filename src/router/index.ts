import {
    createRouter,
    createWebHistory,
    type RouteRecordRaw,
} from "vue-router";

import HomeView from "@/views/HomeView.vue";
import TrainerPage from "@/views/TrainerPage.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/trainer/:slug",
        name: "trainer",
        component: TrainerPage,
        // ВАЖНО: разрешаем передавать параметры пути (:slug) как пропсы в компонент
        props: true,
    },
    {
        // 404 Редирект на главную
        path: "/:pathMatch(.*)*",
        redirect: "/",
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    // Автоматический скролл вверх страницы при смене роута
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
