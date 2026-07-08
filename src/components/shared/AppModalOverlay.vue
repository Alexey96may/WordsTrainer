<template>
    <Teleport to="body">
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
                    <div class="navbar-scroll-content">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

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

const onAfterEnter = () => {
    modalRef.value?.focus();
};

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
    inset: 0;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 40px;
}

.navbar {
    display: flex;
    flex-direction: column;
    background-color: rgb(29, 29, 29);
    padding: 24px 12px;
    width: 90%;
    max-width: 500px;
    max-height: calc(100vh - 80px);
    box-sizing: border-box;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    outline: none;
    border-radius: 8px;
    overflow: hidden;
}

/* Isolated content scroll area */
.navbar-scroll-content {
    overflow-y: auto;
    width: 100%;
    height: 100%;
    padding-right: 4px;
}

.navbar-scroll-content::-webkit-scrollbar {
    width: 6px;
}
.navbar-scroll-content::-webkit-scrollbar-track {
    background: transparent;
}
.navbar-scroll-content::-webkit-scrollbar-thumb {
    background: #198754;
    border-radius: 3px;
}

/* VUE ANIMATIONS */
.slide-down-enter-active,
.slide-down-leave-active {
    transition: opacity 0.25s ease;
}

/* Content sliding out */
.slide-down-enter-active .navbar,
.slide-down-leave-active .navbar {
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-down-enter-from,
.slide-down-leave-to {
    opacity: 0;
}

.slide-down-enter-from .navbar,
.slide-down-leave-to .navbar {
    transform: translateY(calc(-100% - 40px));
}
</style>
