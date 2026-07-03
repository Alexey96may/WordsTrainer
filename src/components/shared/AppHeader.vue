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

            <div class="button_img" @click="toggleBurger">
                <img
                    id="img_sight"
                    :class="burgerAnimationClass"
                    src="@/assets/img/button.png"
                    alt="button"
                />
            </div>
        </div>

        <hr class="hr_header" />
    </header>

    <div class="all_body">
        <div
            class="modal_overlay"
            :class="{ active: isBurgerOpen }"
            @click.self="closeBurger"
        >
            <div class="back_navbar" :class="{ open: isBurgerOpen }">
                <nav class="navbar_menu">
                    <ul class="header__nav indentTop">
                        <li
                            v-for="trainer in trainersList"
                            :key="trainer.id"
                            class="menu-item"
                        >
                            <a
                                href="#"
                                @click.prevent="selectTrainer(trainer.id)"
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
            </div>
        </div>

        <div class="main_container">
            <nav class="nav_breadcrumb">
                <a href="#">Главная</a> &raquo; <span>Тренажеры</span>
            </nav>

            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

const emit = defineEmits(["select-trainer"]);

const searchQuery = ref("");
const isBurgerOpen = ref(false);
const burgerAnimation = ref("");
const isDropdownOpen = ref(false);

// Массив твоих файлов тренажеров
const trainersList = ref([
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

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = () => {
    isDropdownOpen.value = false;
};

const selectTrainer = (trainerId) => {
    emit("select-trainer", trainerId);
    closeDropdown();
    closeBurger(); // Закрываем модалку при выборе тренажера
};

// Открытие/закрытие модального меню
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

const handleSearch = () => {
    console.log("Поиск по запросу:", searchQuery.value);
};

// Директива клика вне элемента для выпадающего списка
const vClickOutside = {
    mounted(el, binding) {
        el.clickOutsideEvent = (event) => {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value();
            }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
    },
    unmounted(el) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
    },
};
</script>

<style scoped>
/* АНИМАЦИИ */
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

/* КНОПКА НАВЕРХ */
#toTop {
    padding: 3px 6px;
    line-height: 40px;
    overflow: hidden;
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

/* ХЕДЕР СТРАНИЦЫ */
.header {
    padding: 12px;
    margin-bottom: 12px;
    max-width: 100%;
    min-height: 24px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
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
    flex-direction: row;
    flex-wrap: nowrap;
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

.button_img {
    display: block;
    cursor: pointer;
}

.button_img_rotate {
    animation: rotation 0.3s linear forwards;
}

.button_img_rotate_left {
    animation: rotation_left 0.3s linear forwards;
}

/* ФОРМА ПОИСКА */
.cont_form {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
}

.form_search {
    position: relative;
}

.form_control {
    display: block;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #030f0a;
    background-color: #fff;
    border: 1px solid #092217;
    border-radius: 0.25rem;
    transition: 0.25s;
    margin-right: 12px;
}

.form_control:focus {
    box-shadow: 0 0 6px 3px #198754;
}

/* ОБЩИЕ СТИЛИ КНОПОК */
.my_btn {
    display: block;
    padding: 0.375rem 0.75rem;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5;
    border-radius: 0.25rem;
    background: none;
    color: rgb(235, 235, 235);
    border: 1px solid #198754;
    cursor: pointer;
    transition: all 0.2s ease;
}

.my_btn:hover {
    background-color: #198754;
}

/* СТИЛИ ДЛЯ DROPDOWN */
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-toggle {
    display: flex;
    align-items: center;
    gap: 6px;
}

.arrow-down {
    font-size: 0.8rem;
    color: #198754;
}

.dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 12000;
    min-width: 280px;
    max-height: 400px;
    overflow-y: auto;
    padding: 8px 0;
    margin-top: 6px;
    list-style: none;
    background-color: rgb(29, 29, 29);
    border: 1px solid #198754;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

.dropdown-menu li a {
    display: block;
    padding: 8px 16px;
    color: #d6d6d6;
    text-decoration: none;
    font-size: 0.95rem;
    text-align: left;
    transition: all 0.2s ease;
}

.dropdown-menu li a:hover {
    background-color: #198754;
    color: #ffffff;
}

.show-dropdown {
    display: block !important;
}

/* СЕТКА СТРАНИЦЫ И БОКОВОЕ МЕНЮ */
.all_body {
    padding: 0 12px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    position: relative;
}

.main_container {
    box-sizing: border-box;
    width: 100%;
}

.back_navbar {
    display: flex;
    justify-content: flex-start;
    background-color: rgb(29, 29, 29);
    margin-right: 12px;
    margin-bottom: 12px;
    padding: 12px;
    position: sticky;
    top: 12px;
    z-index: 11000;
    height: 100%;
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

.display_block_mob {
    display: block !important;
}
</style>
