<template>
    <form
        class="form_game"
        @submit.prevent="onSubmit"
        style="padding-bottom: 24px"
    >
        <AppInput
            ref="inputComponentRef"
            v-model="modelValue"
            name="verb"
            id="input_verb"
            aria-label="Ваш ответ на греческом"
            :has-error="hasError"
        />

        <AppButton
            type="button"
            style="margin-right: 12px"
            @click="$emit('hint')"
        >
            Ответ
        </AppButton>

        <AppButton type="submit"> Ввод </AppButton>
    </form>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import AppInput from "@/components/ui/AppInput.vue";
import AppButton from "@/components/ui/AppButton.vue";

interface Props {
    hasError: boolean;
}

defineProps<Props>();

const modelValue = defineModel<string>({ default: "" });

const emit = defineEmits<{
    (e: "submit"): void;
    (e: "hint"): void;
}>();

const inputRef = ref<HTMLInputElement | null>(null);

const onSubmit = () => {
    emit("submit");
};

// Метод для удержания фокуса из родительского компонента при смене вопросов
const focusInput = () => {
    inputRef.value?.focus();
};

defineExpose({ focusInput });

onMounted(() => {
    focusInput();
});
</script>

<style scoped>
.form_game {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
}
</style>
