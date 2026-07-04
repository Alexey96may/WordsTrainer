<template>
    <button
        :type="type"
        class="my_btn fw-bold button_game"
        :class="customClass"
        @click="onClick"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
interface Props {
    type?: "button" | "submit" | "reset";
    customClass?: string;
}

withDefaults(defineProps<Props>(), {
    type: "button",
    customClass: "",
});

const emit = defineEmits<{
    (e: "click", event: MouseEvent): void;
}>();

const onClick = (event: MouseEvent) => {
    emit("click", event);
};
</script>

<style scoped>
.my_btn {
    padding: 0.375rem 1.2rem;
    font-size: 1rem;
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

.my_btn:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
}
</style>
