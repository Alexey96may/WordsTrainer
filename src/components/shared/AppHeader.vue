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

            <div class="right-head">
                <AppLangSwitcher />

                <AppBurgerButton
                    :is-open="isBurgerOpen"
                    aria-controls="mobile-menu"
                    @toggle="toggleBurger"
                />
            </div>
        </div>

        <hr class="hr_header" />
    </header>

    <AppBreadcrumbs :current-page="currentTrainerName" />

    <div class="all_body">
        <AppModalOverlay
            id="mobile-menu"
            :is-open="isBurgerOpen"
            :title="$t('header.menuTitle')"
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
                            {{ $t(`trainers.${trainer.id}.name`) }}
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
                            >{{ $t("header.links.telegram") }}</a
                        >
                    </li>
                    <li class="menu-item menu-item--ext">
                        <a
                            href="https://t.me/aGreek_translBot_intoRus"
                            target="_blank"
                            rel="noopener noreferrer"
                            >{{ $t("header.links.quiz") }}</a
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
                            {{ $t("header.links.about") }}
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
import { useI18n } from "vue-i18n";
import AppBreadcrumbs from "@/components/ui/AppBreadcrumbs.vue";
import AppLangSwitcher from "@/components/ui/AppLangSwitcher.vue";
import { RouterLink, useRoute } from "vue-router";
import AppModalOverlay from "@/components/shared/AppModalOverlay.vue";
import AppBurgerButton from "@/components/ui/AppBurgerButton.vue";
import { TRAINERS_CONFIG } from "@/config/trainers";

const { t } = useI18n();

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

// Automatically calculate the name of the current simulator for breadcrumbs
const currentTrainerName = computed(() => {
    if (route.name === "trainer" && route.params.slug) {
        const activeTrainer = trainersList.value.find(
            (t) => t.id === route.params.slug,
        );
        return activeTrainer
            ? t(`trainers.${activeTrainer.id}.name`)
            : t("header.breadcrumbs.trainer");
    }
    if (route.name === "home") return t("header.breadcrumbs.home");
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
.navbar_menu {
    display: block;
    width: 100%;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #198754 !important;
    background-color: #1d1d1d;
}

/* STYLING THE ACTIVE LINK IN THE SIMULATOR */
.menu-item a.is-active {
    color: #198754;
    font-weight: bold;
    background-color: rgba(25, 135, 84, 0.08);
}

.menu-item:first-child a {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}
.menu-item:last-child a {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}

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
    transition:
        background-color 0.2s ease,
        color 0.2s ease,
        box-shadow 0.2s ease,
        transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);

    display: flex;
    align-items: center;
    justify-content: center;
}

@media (hover: hover) {
    #toTop:hover {
        background-color: #198754;
        color: #ffffff;
        box-shadow: 0 2px 8px rgba(25, 135, 84, 0.4);
        transform: rotate(270deg) scale(1.05);
    }
}

#toTop:active {
    background-color: #198754;
    color: #ffffff;
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
.right-head {
    display: flex;
    align-items: center;
    gap: 24px;
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
@media (hover: hover) {
    .menu-item a:hover {
        color: #ffffff;
        background-color: rgba(255, 255, 255, 0.03);
    }
}
.menu-item a:active {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.06);
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
    transition: color 0.2s ease;
    text-decoration: none;
}
@media (hover: hover) {
    .nav_breadcrumb a:hover {
        color: #ffffff;
    }
}

.nav_breadcrumb a:active {
    color: #ffffff;
    opacity: 0.8;
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
    .right-head {
        gap: 12px;
    }
}
</style>
