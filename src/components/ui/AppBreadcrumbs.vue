<template>
    <nav class="nav_breadcrumb" aria-label="Хлебные крошки">
        <ol class="breadcrumb-list">
            <li
                v-for="(item, index) in items"
                :key="index"
                class="breadcrumb-item"
            >
                <a :href="item.url">{{ item.label }}</a>
                <span class="separator" aria-hidden="true">&raquo;</span>
            </li>

            <li class="breadcrumb-item active" aria-current="page">
                <span>{{ currentPage }}</span>
            </li>
        </ol>
    </nav>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
    label: string;
    url: string;
}

interface Props {
    items?: BreadcrumbItem[];
    currentPage: string;
}

// Задаем дефолтную цепочку (Главная -> Тренажеры), если ничего не передали
withDefaults(defineProps<Props>(), {
    items: () => [
        { label: "Главная", url: "#" },
        { label: "Тренажеры", url: "#" },
    ],
});
</script>

<style scoped>
.nav_breadcrumb {
    background-color: rgb(29, 29, 29);
    padding: 6px 12px;
    margin-bottom: 12px;
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

.breadcrumb-item a:hover {
    color: #ffffff;
}

.separator {
    margin: 0 8px;
    color: #8b8b8b;
    font-style: normal;
}

.breadcrumb-item.active {
    color: #198754; /* Выделим текущую тему зеленым цветом */
    font-weight: bold;
}
</style>
