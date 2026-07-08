<template>
    <Transition name="fade">
        <a
            v-if="isVisible"
            id="toTop"
            title="Наверх"
            href="#"
            @click.prevent="scrollToTop"
        >
            &#10148;
        </a>
    </Transition>

    <header class="header">
        <div class="mob_nav">
            <div class="logo">
                <RouterLink to="/" class="navbar-brand">
                    <i class="alfa">α</i>Greek
                </RouterLink>
            </div>

            <AppBurgerButton
                :is-open="isBurgerOpen"
                aria-controls="mobile-menu"
                @toggle="toggleBurger"
            />
        </div>

        <hr class="hr_header" />
    </header>

    <AppBreadcrumbs :current-page="currentTrainerName" />

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
                        <RouterLink
                            :to="`/trainer/${trainer.id}`"
                            :class="{
                                'is-active': route.params.slug === trainer.id,
                            }"
                            @click="closeBurger"
                        >
                            {{ trainer.name }}
                        </RouterLink>
                    </li>
                </ul>

                <hr class="hr-menu" />

                <ul class="header__nav">
                    <li class="menu-item menu-item--ext">
                        <a
                            href="https://t.me/aGreekRu"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Группа в Telegram</a
                        >
                    </li>
                    <li class="menu-item menu-item--ext">
                        <a
                            href="https://t.me/aGreek_translBot_intoRus"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Викторина в Telegram</a
                        >
                    </li>
                </ul>

                <hr class="hr-menu" />

                <ul class="header__nav">
                    <li class="menu-item">
                        <RouterLink
                            to="/about"
                            active-class="is-active"
                            @click="closeBurger"
                        >
                            О проекте
                        </RouterLink>
                    </li>
                </ul>
            </nav>
        </AppModalOverlay>

        <div class="main_container">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import AppBreadcrumbs from "@/components/ui/AppBreadcrumbs.vue";
import { RouterLink, useRoute } from "vue-router";
import AppModalOverlay from "@/components/shared/AppModalOverlay.vue";
import AppBurgerButton from "@/components/ui/AppBurgerButton.vue";
import { TRAINERS_CONFIG } from "@/config/trainers";

const route = useRoute();
const isBurgerOpen = ref(false);
const burgerAnimation = ref("");

const trainersList = ref(TRAINERS_CONFIG);

const isVisible = ref(false);
let lastScrollY = window.scrollY;

const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 300 && currentScrollY < lastScrollY) {
        isVisible.value = true;
    } else {
        isVisible.value = false;
    }

    lastScrollY = currentScrollY;
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});

// Автоматически вычисляем имя текущего тренажера для хлебных крошек
const currentTrainerName = computed(() => {
    if (route.name === "trainer" && route.params.slug) {
        const activeTrainer = trainersList.value.find(
            (t) => t.id === route.params.slug,
        );
        return activeTrainer ? activeTrainer.name : "Тренажёр";
    }
    if (route.name === "home") return "Главная";
    return "";
});

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

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style scoped>
/* Все твои стили остаются нетронутыми, добавляем только правила ниже */

.navbar_menu {
    display: block;
    width: 100%;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #198754 !important;
    background-color: #1d1d1d; /* Задаем фон в тон модалки */
}

/* СТИЛИЗАЦИЯ АКТИВНОЙ ССЫЛКИ ТРЕНАЖЁРА */
.menu-item a.is-active {
    color: #198754; /* Фирменный зеленый цвет текста */
    font-weight: bold;
    background-color: rgba(25, 135, 84, 0.08); /* Легкий фоновый акцент */
}

/* Ограничиваем область ховера, чтобы углы фона у активных пунктов не вылезали за рамку */
.menu-item:first-child a {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}
.menu-item:last-child a {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}

/* Остальные твои стили без изменений */
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
    overflow: hidden;
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

/* ОБНОВЛЕННАЯ СТИЛИЗАЦИЯ СТРЕЛКИ НАВЕРХ */
#toTop {
    width: 44px;
    height: 44px;
    line-height: 40px;
    z-index: 999;
    cursor: pointer;
    transform: rotate(270deg);
    position: fixed;
    bottom: 20px;
    right: 20px;
    text-align: center;
    font-size: 24px;

    color: #198754;
    background-color: #1d1d1d;
    border: 1px solid #198754;
    border-radius: 8px;

    text-decoration: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    transition: all 0.25s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;
}

#toTop:hover {
    background-color: #198754;
    color: #ffffff;
    box-shadow: 0 2px 8px rgba(25, 135, 84, 0.4);
    transform: rotate(270deg) scale(1.05);
}

.fade-enter-active,
.fade-leave-active {
    transition:
        opacity 0.3s ease,
        transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: rotate(270deg) translatex(-20px);
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
.indentTop {
    padding-top: 12px;
}
.header__nav {
    list-style: none;
    padding: 20px 0;
}
.menu-item a {
    font-size: 95%;
    display: block;
    padding: 8px 16px;
    color: #d6d6d6;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
}
.menu-item a:hover {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.03);
}
.menu-item--ext a {
    color: #4e87f9e1;
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
    color: #8b8b8b;
    font-size: 90%;
    font-style: oblique;
    border-radius: 4px;
}
.nav_breadcrumb a {
    color: #d6d6d6;
    text-decoration: none;
}
.nav_breadcrumb a:hover {
    color: #ffffff;
}

@media (max-width: 600px) {
    #toTop {
        width: 28px;
        height: 28px;
        bottom: 16px;
        right: 16px;
        font-size: 18px;
    }
    .logo a {
        font-size: 14px;
        text-shadow: 1px 1px black;
    }
}
</style>
