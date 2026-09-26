<script setup lang="ts">
import { IonButton } from "@ionic/vue";

defineProps<{
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}>();
</script>

<template>
    <IonButton :type="type ?? 'button'" :disabled="disabled" fill="solid">
        <slot />
    </IonButton>
</template>
