<template>
    <div class="fix_two_rows">
        <Transition name="expand-error">
            <div v-if="hasError" class="error-slider-wrapper">
                <span id="errorField" role="alert" aria-live="assertive">
                    Подумайте ещё!
                </span>
            </div>
        </Transition>

        <Transition name="fade-question" mode="out-in">
            <div class="question-container" :key="questionHtml">
                <h2
                    class="text-center"
                    id="question_text"
                    v-html="questionHtml"
                ></h2>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
interface Props {
    questionHtml: string;
    hasError: boolean;
}

defineProps<Props>();
</script>

<style scoped>
.fix_two_rows {
    position: relative;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0 24px;
    min-height: 84px;
}

.question-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 84px;
}

#question_text {
    color: #ffffff;
    font-size: 1.5rem;
    margin: 0;
}

/* === АНИМАЦИЯ ОШИБКИ (Раздвигание) === */
.error-slider-wrapper {
    overflow: hidden;
    width: 100%;
    max-height: 32px;
}

#errorField {
    color: #e53131;
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 1.2;
    display: block;
    margin-bottom: 10px;
}

.expand-error-enter-active,
.expand-error-leave-active {
    transition:
        max-height 0.25s cubic-bezier(0.4, 0, 0.2, 1),
        opacity 0.2s ease;
}

.expand-error-enter-from,
.expand-error-leave-to {
    max-height: 0;
    opacity: 0;
}

/* === АНИМАЦИЯ СМЕНЫ ВОПРОСА (Fade out-in) === */
.fade-question-enter-active,
.fade-question-leave-active {
    /* Плавное исчезновение и появление за 0.2 секунды */
    transition:
        opacity 0.2s ease,
        transform 0.2s ease;
}

.fade-question-enter-from {
    opacity: 0;
    transform: translateY(10px); /* Новый вопрос мягко приподнимается снизу */
}

.fade-question-leave-to {
    opacity: 0;
    transform: translateY(-10px); /* Старый вопрос плавно уходит наверх */
}

/* Стили перевода */
:deep(.spanTransl) {
    font-size: 1.1rem;
    color: #8b8b8b;
    display: block;
    margin-top: 4px;
}

@media (max-width: 600px) {
    #question_text {
        font-size: 1.3rem;
    }
    .question-container {
        min-height: 96px;
    }
    #errorField {
        font-size: 0.9rem;
    }
    :deep(.spanTransl) {
        font-size: 0.9rem;
    }
}
@media (max-width: 340px) {
    .fix_two_rows {
        margin: 60px 0 24px;
    }
    #question_text {
        font-size: 1.1rem;
    }
    #errorField {
        font-size: 0.7rem;
    }
    :deep(.spanTransl) {
        font-size: 0.7rem;
    }
}
</style>
