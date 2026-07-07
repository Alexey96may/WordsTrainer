<template>
    <nav
        v-if="breadcrumbs.length > 0"
        class="nav_breadcrumb"
        aria-label="Хлебные крошки"
    >
        <ol class="breadcrumb-list">
            <li
                v-for="(crumb, index) in breadcrumbs"
                :key="index"
                class="breadcrumb-item"
                :class="{ active: index === breadcrumbs.length - 1 }"
                :aria-current="
                    index === breadcrumbs.length - 1 ? 'page' : undefined
                "
            >
                <RouterLink
                    v-if="index < breadcrumbs.length - 1 && crumb.url"
                    :to="crumb.url"
                >
                    {{ crumb.label }}
                </RouterLink>

                <span v-else>{{ crumb.label }}</span>

                <span
                    v-if="index < breadcrumbs.length - 1"
                    class="separator"
                    aria-hidden="true"
                    >&raquo;</span
                >
            </li>
        </ol>
    </nav>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { ref, computed } from "vue";
import { TRAINERS_CONFIG } from "@/config/trainers";

interface BreadcrumbItem {
    label: string;
    url?: string;
}

const route = useRoute();
const trainersList = ref(TRAINERS_CONFIG);

// 1. Сначала определяем имя текущего тренажёра, если мы внутри него
const currentTrainerName = computed(() => {
    if (route.name === "trainer" && route.params.slug) {
        const activeTrainer = trainersList.value.find(
            (t) => t.id === route.params.slug,
        );
        return activeTrainer ? activeTrainer.name : "Тренажёр";
    }
    return "";
});

// 2. Автоматически строим всю цепочку в зависимости от роута
const breadcrumbs = computed<BreadcrumbItem[]>(() => {
    // 1. ЕСЛИ МЫ НА ГЛАВНОЙ: вернет только один неактивный пункт [Главная]
    if (route.name === "home") {
        return [{ label: "Главная" }];
    }

    // Базовое первое звено для всех остальных страниц сайта
    const crumbs: BreadcrumbItem[] = [{ label: "Главная", url: "/" }];

    // 2. ЕСЛИ МЫ В ТРЕНАЖЁРЕ: Главная » Тренажеры » Винительный падеж
    if (route.name === "trainer") {
        crumbs.push({ label: "Тренажеры", url: "/" }); // Ссылка на главную, где список
        crumbs.push({ label: currentTrainerName.value });
        return crumbs;
    }

    // 3. ЕСЛИ МЫ НА СТРАНИЦЕ "О ПРОЕКТЕ": Главная » О проекте
    if (route.name === "about") {
        crumbs.push({ label: "О проекте" });
        return crumbs;
    }

    // 4. ЕСЛИ МЫ НА СТРАНИЦЕ "ГРАММАТИКА": Главная » Грамматика
    if (route.name === "grammar") {
        crumbs.push({ label: "Грамматика" });
        return crumbs;
    }

    // Фолбек на случай, если у роута задан мета-тайтл в router/index.ts
    if (route.meta?.title) {
        crumbs.push({ label: route.meta.title as string });
        return crumbs;
    }

    return crumbs;
});
</script>

<style scoped>
.nav_breadcrumb {
    background-color: rgb(29, 29, 29);
    padding: 6px 12px;
    font-size: 90%;
    font-style: oblique;
    border-radius: 4px;
}

.breadcrumb-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.breadcrumb-item {
    display: flex;
    align-items: center;
    color: #8b8b8b;
}

.breadcrumb-item a {
    color: #d6d6d6;
    text-decoration: none;
    transition: color 0.2s ease;
}

@media (max-width: 600px) {
    .nav_breadcrumb span {
        font-size: 12px;
    }
}

.breadcrumb-item a:hover {
    color: #ffffff;
}

.separator {
    margin: 0 8px;
    color: #8b8b8b;
    font-style: normal;
}

/* Стили для последнего активного элемента */
.breadcrumb-item.active {
    color: #198754; /* Твой фирменный зеленый */
    font-weight: bold;
}
</style>
