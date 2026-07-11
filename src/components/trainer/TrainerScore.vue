<template>
    <h4 class="text-center score_title">
        {{ t("trainer.score.remaining") }}
        <Transition name="pop" mode="out-in">
            <span :key="count" id="score" aria-live="polite" aria-atomic="true">
                {{ count }}
            </span>
        </Transition>
    </h4>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
interface Props {
    count: number;
}

defineProps<Props>();
</script>

<style scoped>
.score_title {
    color: #d6d6d6;
    margin-top: 20px;
    text-align: center;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
}

#score {
    color: #198754;
    font-weight: bold;
    display: inline-block;
}

.pop-enter-active,
.pop-leave-active {
    transition: all 0.15s ease-out;
}

.pop-enter-from {
    transform: scale(1.3);
    opacity: 0;
}

.pop-leave-to {
    transform: scale(0.8);
    opacity: 0;
}

@media (max-width: 600px) {
    .score_title {
        margin-top: 20px;
        font-size: 0.9rem;
    }
}
@media (max-width: 340px) {
    .score_title {
        margin-top: 18px;
        font-size: 0.7rem;
    }
}
</style>
