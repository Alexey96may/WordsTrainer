<template>
    <div class="fix_two_rows">
        <Transition name="expand-error">
            <div v-if="hasError" class="error-slider-wrapper">
                <span id="errorField" role="alert" aria-live="assertive">
                    {{ t("trainer.question.error") }}
                </span>
            </div>
        </Transition>

        <div ref="wrapperRef" class="question-wrapper">
            <Transition
                name="fade-question"
                mode="out-in"
                @before-leave="onBeforeLeave"
                @enter="onEnter"
                @after-enter="onAfterEnter"
            >
                <div class="question-container" :key="questionHtml">
                    <h2
                        class="text-center"
                        id="question_text"
                        v-html="questionHtml"
                    ></h2>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const wrapperRef = ref<HTMLElement | null>(null);

interface Props {
    questionHtml: string;
    hasError: boolean;
}

defineProps<Props>();

const onBeforeLeave = () => {
    if (!wrapperRef.value) return;
    wrapperRef.value.style.height = `${wrapperRef.value.offsetHeight}px`;
};

const onEnter = (el: Element) => {
    if (!wrapperRef.value) return;
    const htmlEl = el as HTMLElement;

    const newHeight = htmlEl.offsetHeight;

    requestAnimationFrame(() => {
        if (wrapperRef.value) {
            wrapperRef.value.style.height = `${newHeight}px`;
        }
    });
};

const onAfterEnter = () => {
    if (!wrapperRef.value) return;
    wrapperRef.value.style.height = "";
};
</script>

<style scoped>
.fix_two_rows {
    position: relative;
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 64px 0 44px;
}

.question-wrapper {
    width: 100%;
    overflow: hidden;
    transition: height 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.question-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#question_text {
    color: #ffffff;
    font-size: 1.5rem;
    margin: 0;
}

/* === ERROR ANIMATION (Expanding) === */
.error-slider-wrapper {
    overflow: hidden;
    width: 100%;
    height: 32px;
    margin-bottom: 12px;
}

#errorField {
    color: #f87171;
    font-weight: bold;
    font-size: 1.1rem;
    line-height: 1.2;
    display: block;
}

.expand-error-enter-active,
.expand-error-leave-active {
    transition:
        height 0.25s ease,
        opacity 0.25s ease,
        margin-bottom 0.25s ease;
}

.expand-error-enter-from,
.expand-error-leave-to {
    height: 0;
    opacity: 0;
    margin-bottom: 0;
}

/* === QUESTION TRANSITION ANIMATION (Fade out-in) === */
.fade-question-enter-active,
.fade-question-leave-active {
    transition:
        opacity 0.2s ease,
        transform 0.2s ease;
}

.fade-question-enter-from {
    opacity: 0;
    transform: translateY(10px);
}

.fade-question-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

/* Translation styles */
:deep(.spanTransl) {
    font-size: 1.1rem;
    color: #8b8b8b;
    display: block;
    margin-top: 4px;
}

@media (max-width: 600px) {
    .fix_two_rows {
        margin: 42px 0;
    }
    #question_text {
        font-size: 1.3rem;
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
        margin: 72px 0 42px;
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
