<script setup lang="ts">
import { ref } from "vue";
import { IonInput } from "@ionic/vue";

defineProps<{
    placeholder?: string;
    name?: string;
    id?: string;
    ariaLabel?: string;
    hasError?: boolean;
}>();

const modelValue = defineModel<string>({ default: "" });

const innerRef = ref<InstanceType<typeof IonInput> | null>(null);

const focus = () => {
    const el = innerRef.value?.$el as HTMLIonInputElement | undefined;
    el?.setFocus();
};

defineExpose({ focus });
</script>

<template>
    <IonInput
        ref="innerRef"
        v-model="modelValue"
        :placeholder="placeholder"
        :name="name"
        :id="id"
        :aria-label="ariaLabel"
        :class="{ 'ion-invalid ion-touched': hasError }"
        fill="outline"
        label-placement="floating"
    />
</template>
