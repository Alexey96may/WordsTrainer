<template>
    <a id="toTop" title="Наверх" href="#" @click.prevent="scrollToTop"
        >&#10148;</a
    >

    <header class="header">
        <div class="mob_nav">
            <div class="logo">
                <a class="navbar-brand" href="#">
                    <i class="alfa">α</i>Greek
                </a>
            </div>

            <AppBurgerButton
                :is-open="isBurgerOpen"
                aria-controls="mobile-menu"
                @toggle="toggleBurger"
            />
        </div>

        <hr class="hr_header" />
    </header>

    <div class="all_body">
        <AppModalOverlay
            id="mobile-menu"
            :is-open="isBurgerOpen"
            title="Меню тренажеров"
            @close="closeBurger"
        >
            <nav class="navbar_menu">
                <ul class="header__nav indentTop">
                    <li
                        v-for="trainer in trainersList"
                        :key="trainer.id"
                        class="menu-item"
                    >
                        <a
                            href="#"
                            @click.prevent="
                                selectTrainer(trainer.id, trainer.name)
                            "
                        >
                            {{ trainer.name }}
                        </a>
                    </li>
                </ul>

                <hr class="hr-menu" />

                <ul class="header__nav">
                    <li class="menu-item"><a href="#">Грамматика</a></li>
                    <li class="menu-item"><a href="#">Словари</a></li>
                </ul>

                <hr class="hr-menu" />

                <ul class="header__nav">
                    <li class="menu-item"><a href="#">О проекте</a></li>
                </ul>
            </nav>
        </AppModalOverlay>

        <div class="main_container">
            <AppBreadcrumbs :current-page="currentTrainingName" />

            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import AppModalOverlay from "@/components/shared/AppModalOverlay.vue";
import AppBurgerButton from "@/components/ui/AppBurgerButton.vue";
import AppBreadcrumbs from "@/components/ui/AppBreadcrumbs.vue";

interface Trainer {
    id: string;
    name: string;
}

interface Props {
    currentTrainingName: string;
}

withDefaults(defineProps<Props>(), {
    currentTrainingName: "Родительный падеж",
});

const emit = defineEmits<{
    (e: "select-trainer", id: string, name: string): void;
}>();

const isBurgerOpen = ref(false);
const burgerAnimation = ref("");

const trainersList = ref<Trainer[]>([
    { id: "train_gen_case", name: "Родительный падеж" },
    { id: "train_accus_case", name: "Винительный падеж" },
    { id: "train_adjectives", name: "Прилагательные" },
    { id: "train_imperative", name: "Повелительное наклонение" },
    { id: "train_indicative", name: "Изъявительное наклонение" },
    { id: "train_irregular_aorist", name: "Неправильный аорист" },
    { id: "train_past_imperfect", name: "Прошедшее длительное (Имперфект)" },
    { id: "train_past_simple", name: "Прошедшее простое (Аорист)" },
    { id: "train_pron", name: "Местоимения" },
    { id: "train_verb_all_the_times", name: "Все глагольные времена" },
    { id: "train_word_formation", name: "Словообразование" },
]);

const selectTrainer = (trainerId: string, trainerName: string = "Тренажер") => {
    emit("select-trainer", trainerId, trainerName);
    closeBurger();
};

const toggleBurger = () => {
    isBurgerOpen.value = !isBurgerOpen.value;
    burgerAnimation.value = isBurgerOpen.value
        ? "button_img_rotate"
        : "button_img_rotate_left";
};

const closeBurger = () => {
    isBurgerOpen.value = false;
    burgerAnimation.value = "button_img_rotate_left";
};

const burgerAnimationClass = computed(() => burgerAnimation.value);

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style scoped>
@keyframes rotation {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes rotation_left {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(-360deg);
    }
}

.button_img_btn {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: block;
    outline: none;
}
.button_img_btn:focus-visible {
    outline: 2px solid #198754;
    border-radius: 4px;
}

.button_img_rotate {
    animation: rotation 0.3s linear forwards;
}
.button_img_rotate_left {
    animation: rotation_left 0.3s linear forwards;
}

#toTop {
    padding: 3px 6px;
    line-height: 40px;
    z-index: 999;
    cursor: pointer;
    transform: rotate(270deg);
    position: fixed;
    bottom: 12px;
    right: 26px;
    text-align: center;
    font-size: 30px;
    color: black;
    text-decoration: none;
    border-radius: 5px;
    border: 1px solid #198754;
    opacity: 0.9;
    background-color: #fffff0;
}
#toTop:hover {
    background-color: #198754;
    color: white;
}

.header {
    padding: 12px;
    margin-bottom: 12px;
    max-width: 100%;
    min-height: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(
        0deg,
        rgb(32, 32, 32) 25%,
        rgb(43, 43, 43) 75%
    ) !important;
    box-sizing: border-box;
}

.mob_nav {
    padding: 12px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.logo a {
    text-shadow: 2px 2px black;
    font-size: 18px;
    color: rgb(255, 255, 255);
    text-decoration: none;
}
.logo .alfa {
    font-style: italic;
}

.all_body {
    padding: 0 12px;
    display: flex;
    flex-direction: row;
    position: relative;
}

.main_container {
    box-sizing: border-box;
    width: 100%;
}

.navbar_menu {
    display: block;
    width: 100%;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #198754 !important;
}

.indentTop {
    padding-top: 12px;
}
.header__nav {
    list-style: none;
    padding: 0;
}
.menu-item a {
    font-size: 95%;
    display: block;
    padding: 8px 16px;
    color: #d6d6d6;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
}
.menu-item a:hover {
    color: #ffffff;
}

.hr-menu {
    width: 100%;
    margin: 12px 0;
    border: 0;
    height: 1px;
    background: #198754;
    background-image: linear-gradient(to right, #212529, #198754, #212529);
}

.hr_header {
    width: 100%;
    display: none;
    height: 0;
    border-top: 1px solid #333;
    margin: 12px 0;
}

.nav_breadcrumb {
    background-color: rgb(29, 29, 29);
    padding: 6px 12px;
    text-align: center;
    margin-bottom: 12px;
    color: #8b8b8b;
    font-size: 90%;
    font-style: oblique;
}
.nav_breadcrumb a {
    color: #d6d6d6;
}
.nav_breadcrumb a:hover {
    color: #ffffff;
}
</style>
