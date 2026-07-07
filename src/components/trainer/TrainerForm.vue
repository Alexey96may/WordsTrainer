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

const focusInput = () => {
    inputRef.value?.focus();
};

defineExpose({ focusInput });

onMounted(() => {
    focusInput();
});
</script>

<template>
    <form class="form_game" @submit.prevent="onSubmit">
        <AppInput
            ref="inputComponentRef"
            v-model="modelValue"
            name="verb"
            id="input_verb"
            aria-label="Ваш ответ на греческом"
            :has-error="hasError"
        />

        <div class="form_game__buttons">
            <AppButton
                type="button"
                class="appButton--answer"
                @click="$emit('hint')"
            >
                Ответ
            </AppButton>

            <AppButton type="submit"> Ввод </AppButton>
        </div>
    </form>
</template>

<style scoped>
.form_game {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin-bottom: 40px;
}

.form_game__buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
}

.appButton--answer {
    margin-right: 12px;
}

@media (max-width: 600px) {
    .form_game {
        gap: 22px;
        margin-bottom: 36px;
    }
}
@media (max-width: 340px) {
    .form_game {
        gap: 24px;
        margin-bottom: 40px;
    }

    .appButton--answer {
        margin-right: 6px;
    }
}
</style>
