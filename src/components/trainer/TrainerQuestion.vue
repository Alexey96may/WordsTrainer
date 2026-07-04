<template>
    <div class="fix_two_rows">
        <Transition name="fade-error">
            <span
                v-if="hasError"
                id="errorField"
                role="alert"
                aria-live="assertive"
            >
                Подумайте ещё!
            </span>
        </Transition>

        <div>
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
    min-height: 90px;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#errorField {
    color: #dc3545;
    font-weight: bold;
    font-size: 1.1rem;
    display: block;
    margin-bottom: 8px;
}

#question_text {
    color: #ffffff;
    font-size: 1.5rem;
    margin: 0;
}

/* Глубокий селектор для стилизации динамического span из v-html */
:deep(.spanTransl) {
    font-size: 1.1rem;
    color: #8b8b8b;
    display: block;
    margin-top: 4px;
}

/* АНИМАЦИИ ОШИБКИ */
.fade-error-enter-active,
.fade-error-leave-active {
    transition: all 0.25s ease;
}

.fade-error-enter-from,
.fade-error-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}
</style>
