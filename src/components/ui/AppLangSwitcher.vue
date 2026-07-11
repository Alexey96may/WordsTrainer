<template>
    <div class="lang-container" v-click-outside="closeMenu">
        <button class="lang-current" @click="isOpen = !isOpen">
            {{ locale.toUpperCase() }}
            <span class="arrow" :class="{ open: isOpen }">▼</span>
        </button>

        <Transition name="fade">
            <div v-if="isOpen" class="lang-menu">
                <button
                    v-for="lang in ['ru', 'en', 'es']"
                    :key="lang"
                    class="lang-option"
                    :class="{ 'is-active': locale === lang }"
                    @click="changeLang(lang)"
                >
                    {{ lang.toUpperCase() }}
                </button>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const isOpen = ref(false);

const changeLang = (lang: string) => {
    locale.value = lang;
    localStorage.setItem("lang", lang);
    isOpen.value = false;
};

const closeMenu = () => (isOpen.value = false);

const vClickOutside = {
    mounted(el: any, binding: any) {
        el.clickOutsideEvent = (event: Event) => {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value();
            }
        };
        document.addEventListener("click", el.clickOutsideEvent);
    },
    unmounted(el: any) {
        document.removeEventListener("click", el.clickOutsideEvent);
    },
};
</script>

<style scoped>
.lang-container {
    position: relative;
    z-index: 1000;
}

.lang-current {
    background: #2b2b2b;
    border: 1px solid #198754;
    color: #fff;
    padding: 4px 10px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    font-size: 12px;
    min-width: 54px;
}

.arrow {
    font-size: 8px;
    transition: transform 0.2s;
}

.arrow.open {
    transform: rotate(180deg);
}

.lang-menu {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 5px;
    background: #1d1d1d;
    border: 1px solid #198754;
    border-radius: 4px;
    overflow: hidden;
    min-width: 60px;
}

.lang-option {
    display: block;
    width: 100%;
    padding: 8px 12px;
    border: none;
    background: none;
    color: #8b8b8b;
    text-align: center;
    cursor: pointer;
    font-size: 12px;
}

.lang-option:hover,
.lang-option.is-active {
    background: #198754;
    color: #fff;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

@media (max-width: 600px) {
    .lang-current {
        padding: 4px 8px;
        border-radius: 4px;
        gap: 6px;
        font-size: 10px;
        min-width: 40px;
    }

    .arrow {
        font-size: 6px;
    }

    .lang-menu {
        margin-top: 2px;
        border-radius: 4px;
        min-width: 100%;
    }

    .lang-option {
        padding: 4px 8px;
        font-size: 10px;
    }
}
</style>
