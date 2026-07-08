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

const currentTrainerName = computed(() => {
    if (route.name === "trainer" && route.params.slug) {
        const activeTrainer = trainersList.value.find(
            (t) => t.id === route.params.slug,
        );
        return activeTrainer ? activeTrainer.name : "Тренажёр";
    }
    return "";
});

const breadcrumbs = computed<BreadcrumbItem[]>(() => {
    // 1. IF WE ARE ON THE HOME PAGE: returns only one inactive item [Home]
    if (route.name === "home") {
        return [{ label: "Главная" }];
    }

    // Base initial link for all other pages of the site
    const crumbs: BreadcrumbItem[] = [{ label: "Главная", url: "/" }];

    // 2. IF WE ARE IN THE EXERCISE MODULE: Home » Exercises » Accusative case
    if (route.name === "trainer") {
        crumbs.push({ label: "Тренажеры", url: "/" });
        crumbs.push({ label: currentTrainerName.value });
        return crumbs;
    }

    // 3. IF WE ARE ON THE "ABOUT THE PROJECT" PAGE: Home » About the Project
    if (route.name === "about") {
        crumbs.push({ label: "О проекте" });
        return crumbs;
    }
    // 4. IF WE ARE ON THE "GRAMMAR" PAGE: Home » Grammar
    if (route.name === "grammar") {
        crumbs.push({ label: "Грамматика" });
        return crumbs;
    }

    // Fallback in case a meta title is defined for the route in router/index.ts
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

@media (hover: hover) {
    .breadcrumb-item a:hover {
        color: #ffffff;
    }
}

.breadcrumb-item a:active {
    color: #ffffff;
    opacity: 0.8;
}

.separator {
    margin: 0 8px;
    color: #8b8b8b;
    font-style: normal;
}

.breadcrumb-item.active {
    color: #198754;
    font-weight: bold;
}
</style>
