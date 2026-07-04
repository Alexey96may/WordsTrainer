<template>
    <Transition name="slide-down" @after-enter="onAfterEnter">
        <div
            v-if="isOpen"
            class="modal_overlay"
            role="dialog"
            aria-modal="true"
            :aria-label="title"
            @click.self="close"
            @keydown.esc="close"
        >
            <div ref="modalRef" class="navbar navbar-open" tabindex="-1">
                <slot></slot>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from "vue";

interface Props {
    isOpen: boolean;
    title?: string;
}

const props = withDefaults(defineProps<Props>(), {
    isOpen: false,
    title: "Навигационное меню",
});

const emit = defineEmits<{
    (e: "close"): void;
}>();

const modalRef = ref<HTMLElement | null>(null);

const close = () => {
    emit("close");
};

// Фокусируемся на модальном окне для работы Accessibility при открытии
const onAfterEnter = () => {
    modalRef.value?.focus();
};

// Блокируем прокрутку основного экрана, когда модалка активна
watch(
    () => props.isOpen,
    (newVal) => {
        if (newVal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    },
);
</script>

<style scoped>
.modal_overlay {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.65);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.navbar {
    display: flex;
    justify-content: flex-start;
    background-color: rgb(29, 29, 29);
    padding: 24px 12px;
    width: 90%;
    max-width: 500px;
    box-sizing: border-box;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    outline: none;
}

/* АНИМАЦИИ VUE ДЛЯ ВЫЕЗЖАНИЯ СВЕРХУ */
.slide-down-enter-active,
.slide-down-leave-active {
    transition: opacity 0.3s ease;
}

.slide-down-enter-active .navbar,
.slide-down-leave-active .navbar {
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-down-enter-from,
.slide-down-leave-to {
    opacity: 0;
}

.slide-down-enter-from .navbar,
.slide-down-leave-to .navbar {
    transform: translateY(-100%);
}
</style>
