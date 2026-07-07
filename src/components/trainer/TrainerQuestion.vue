<template>
    <div class="fix_two_rows">
        <Transition name="expand-error">
            <div v-if="hasError" class="error-slider-wrapper">
                <span id="errorField" role="alert" aria-live="assertive">
                    Подумайте ещё!
                </span>
            </div>
        </Transition>

        <div class="question-container">
            <h2
                class="text-center"
                id="question_text"
                v-html="questionHtml"
            ></h2>
        </div>
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
    min-height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
}

.question-container {
    width: 100%;
}

#question_text {
    color: #ffffff;
    font-size: 1.5rem;
    margin: 0;
}

/* Обертка, которая физически раздвигает родительский блок по высоте */
.error-slider-wrapper {
    overflow: hidden;
    width: 100%;
    /* Задаем фиксированную высоту для анимации. 
       Она включает в себя высоту текста (около 22px) + нижний отступ */
    max-height: 32px;
}

#errorField {
    color: #dc3545;
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 1.2;
    display: block;
    margin-bottom: 10px; /* Этот отступ тоже будет плавно уходить под кат */
}

:deep(.spanTransl) {
    font-size: 1.1rem;
    color: #8b8b8b;
    display: block;
    margin-top: 4px;
}

/* АНИМАЦИЯ ЧЕСТНОГО РАСШИРЕНИЯ */
.expand-error-enter-active,
.expand-error-leave-active {
    /* cubic-bezier дает эффект мягкой пружины при расталкивании */
    transition:
        max-height 0.28s cubic-bezier(0.4, 0, 0.2, 1),
        opacity 0.2s ease;
}

/* В скрытом состоянии wrapper имеет высоту 0, 
   поэтому родительский .fix_two_rows сжимается и всё снизу поднимается вверх */
.expand-error-enter-from,
.expand-error-leave-to {
    max-height: 0;
    opacity: 0;
}
</style>
