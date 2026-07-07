<template>
    <input
        ref="nativeInputRef"
        v-model="modelValue"
        :autocomplete="autocomplete"
        :type="type"
        :name="name"
        :id="id"
        class="custom-input"
        :class="{ 'input-error': hasError }"
        :aria-label="ariaLabel"
        :aria-invalid="hasError"
    />
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
    type?: string;
    name?: string;
    id?: string;
    autocomplete?: "on" | "off";
    hasError?: boolean;
    ariaLabel?: string;
}

withDefaults(defineProps<Props>(), {
    type: "text",
    autocomplete: "off",
    hasError: false,
    ariaLabel: "Поле ввода",
});

// Двустороннее связывание данных
const modelValue = defineModel<string>({ default: "" });

const nativeInputRef = ref<HTMLInputElement | null>(null);

// Экспортируем метод фокуса для родительских компонентов
const focus = () => {
    nativeInputRef.value?.focus();
};

defineExpose({ focus });
</script>

<style scoped>
.custom-input {
    padding: 0.375rem 0.75rem;
    font-size: 1.2rem;
    background-color: #fff;
    border: 1px solid #092217;
    border-radius: 0.25rem;
    color: #000;
    outline: none;
    transition:
        border-color 0.2s,
        box-shadow 0.2s;
    max-width: 100%;
}

.custom-input:focus {
    border-color: #198754;
    box-shadow: 0 0 0 0.2rem rgba(25, 135, 84, 0.25);
}

/* Стили на случай ошибки (красная рамка при aria-invalid) */
.custom-input.input-error {
    border-color: #dc3545;
}

.custom-input.input-error:focus {
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}
</style>
