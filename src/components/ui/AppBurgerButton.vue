<template>
    <button
        class="button_img_btn"
        type="button"
        :aria-expanded="isOpen"
        aria-label="Переключить меню навигации"
        @click="onClick"
    >
        <img
            id="img_sight"
            :class="burgerAnimationClass"
            src="@/assets/img/button.png"
            alt=""
        />
    </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
    isOpen: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    isOpen: false,
});

const emit = defineEmits<{
    (e: "toggle"): void;
}>();

const onClick = () => {
    emit("toggle");
};

const burgerAnimationClass = computed(() => {
    return props.isOpen ? "button_img_rotate" : "button_img_rotate_left";
});
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
</style>
