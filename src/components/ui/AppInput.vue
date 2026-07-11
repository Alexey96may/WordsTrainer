<template>
    <input
        ref="nativeInputRef"
        v-model="modelValue"
        autocorrect="off"
        autocapitalize="off"
        :type="type"
        :name="name"
        :id="id"
        class="custom-input"
        :class="{ 'input-error': hasError }"
        :aria-label="ariaLabel"
        :aria-invalid="hasError"
        :placeholder="placeholder"
    />
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
    type?: string;
    name?: string;
    id?: string;
    hasError?: boolean;
    ariaLabel?: string;
    placeholder?: string;
}

withDefaults(defineProps<Props>(), {
    type: "text",
    hasError: false,
    ariaLabel: "Поле ввода",
});

const modelValue = defineModel<string>({ default: "" });

const nativeInputRef = ref<HTMLInputElement | null>(null);

// Export the focus method for parent components
const focus = () => {
    nativeInputRef.value?.focus();
};

defineExpose({ focus });
</script>

<style scoped>
.custom-input {
    padding: 0.4rem 0.75rem;
    font-size: 1.2rem;
    line-height: 1.8;
    text-align: center;
    background-color: #fff;
    border: 1px solid #092217;
    border-radius: 0.25rem;
    color: #000;
    outline: none;
    transition:
        border-color 0.2s,
        box-shadow 0.2s;
    width: 40vw;
}

.custom-input::placeholder {
    font-size: 1rem;
}

.custom-input:focus {
    border-color: #198754;
    box-shadow: 0 0 0 0.2rem rgba(25, 135, 84, 0.25);
}

@media (max-width: 600px) {
    .custom-input {
        font-size: 1rem;
        width: 100%;
    }

    .custom-input::placeholder {
        font-size: 0.8rem;
    }
    .custom-input:focus {
        box-shadow: 0 0 0 0.1rem rgba(25, 135, 84, 0.25);
    }
}
@media (max-width: 340px) {
    .custom-input {
        font-size: 0.7rem;
    }

    .custom-input::placeholder {
        font-size: 0.6rem;
    }
}
</style>
