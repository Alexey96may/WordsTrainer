<template>
    <h4 class="text-center score_title">
        Осталось вопросов:
        <Transition name="pop" mode="out-in">
            <span :key="count" id="score" aria-live="polite" aria-atomic="true">
                {{ count }}
            </span>
        </Transition>
    </h4>
</template>

<script setup lang="ts">
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
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px; /* Небольшой отступ между текстом и цифрой */
}

#score {
    color: #198754;
    font-weight: bold;
    display: inline-block;
}

/* АНИМАЦИЯ ДЛЯ ЦИФРЫ (Легкий «пульс» при изменении счета) */
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
</style>
