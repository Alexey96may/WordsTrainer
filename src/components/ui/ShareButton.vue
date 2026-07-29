<script setup lang="ts">
import { ref, computed, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

interface Props {
    /** Заголовок для отправки (Web Share API) */
    title?: string;
    /** Текст сообщения (например, результат в тренажере) */
    text?: string;
    /** Ссылка для шерринга (по умолчанию current location) */
    url?: string;
    /** Доступная метка для скринридеров */
    ariaLabel?: string;
}

const { t } = useI18n();

const props = withDefaults(defineProps<Props>(), {
    title: "",
    text: "",
    url: "",
    ariaLabel: "",
});

const isCopied = ref(false);
const errorMessage = ref("");
let timer: ReturnType<typeof setTimeout> | null = null;

const shareTitle = computed(() => props.title || t("share.defaultTitle"));
const shareText = computed(() => props.text || t("share.defaultText"));
const effectiveAriaLabel = computed(
    () => props.ariaLabel || t("share.ariaLabel"),
);

const shareUrl = computed(() => {
    if (props.url) return props.url;
    return typeof window !== "undefined" ? window.location.href : "";
});

const handleShare = async () => {
    if (timer) clearTimeout(timer);
    isCopied.value = false;
    errorMessage.value = "";

    const payload = {
        title: shareTitle.value,
        text: shareText.value,
        url: shareUrl.value,
    };

    // 1. Web Share API
    if (navigator.share && navigator.canShare && navigator.canShare(payload)) {
        try {
            await navigator.share(payload);
            return;
        } catch (err: unknown) {
            if (err instanceof Error && err.name === "AbortError") return;
        }
    }

    try {
        if (!navigator.clipboard) {
            throw new Error("Clipboard API unavailable");
        }
        await navigator.clipboard.writeText(shareUrl.value);
        isCopied.value = true;

        timer = setTimeout(() => {
            isCopied.value = false;
        }, 3000);
    } catch {
        errorMessage.value = t("share.tooltipError");
        timer = setTimeout(() => {
            errorMessage.value = "";
        }, 4000);
    }
};

onUnmounted(() => {
    if (timer) clearTimeout(timer);
});
</script>

<template>
    <div class="share-wrapper">
        <button
            type="button"
            :aria-label="effectiveAriaLabel"
            class="share-button"
            @click="handleShare"
        >
            <svg
                v-if="isCopied"
                aria-hidden="true"
                class="share-icon share-icon--success"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                />
            </svg>

            <svg
                v-else
                aria-hidden="true"
                class="share-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684"
                />
            </svg>

            <span>{{
                isCopied ? t("share.copiedLabel") : t("share.buttonLabel")
            }}</span>
        </button>

        <div role="status" aria-live="polite" class="sr-only">
            <template v-if="isCopied">{{ t("share.srSuccess") }}</template>
            <template v-if="errorMessage">{{ errorMessage }}</template>
        </div>

        <Transition name="fade-slide">
            <div
                v-if="isCopied || errorMessage"
                aria-hidden="true"
                class="share-tooltip"
                :class="{ 'share-tooltip--error': !!errorMessage }"
            >
                {{ isCopied ? t("share.tooltipSuccess") : errorMessage }}
                <div class="share-tooltip-arrow" />
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.share-wrapper {
    --share-bg: #0f291e;
    --share-bg-hover: #1c4035;
    --share-border: rgba(52, 211, 153, 0.2);
    --share-text: #ecfdf5;
    --share-icon-color: #6ee7b7;
    --share-accent-color: #10b981;
    --share-tooltip-bg: #064e3b;
    --share-tooltip-text: #ecfdf5;
    --share-error-bg: #92300f;

    position: relative;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
}

.share-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1.125rem;
    border-radius: 8px;
    border: 1px solid var(--share-border);
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--share-text);
    background-color: var(--share-bg);
    cursor: pointer;
    user-select: none;
    transition: all 0.15s ease;
}

@media (hover: hover) {
    .share-button:hover {
        background-color: var(--share-bg-hover);
        border-color: rgba(52, 211, 153, 0.35);
    }
}

.share-button:active {
    transform: scale(0.96);
}

.share-button:focus {
    outline: none;
}

.share-button:focus-visible {
    outline: 2px solid var(--share-accent-color);
    outline-offset: 2px;
}

.share-icon {
    width: 1rem;
    height: 1rem;
    color: var(--share-icon-color);
    flex-shrink: 0;
    transition: color 0.15s ease;
}

.share-button:hover .share-icon {
    color: var(--share-text);
}

.share-icon--success {
    color: var(--share-accent-color);
    animation: zoomIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes zoomIn {
    from {
        opacity: 0;
        transform: scale(0.7);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

.share-tooltip {
    position: absolute;
    bottom: calc(100% + 0.5rem);
    padding: 0.4rem 0.75rem;
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;
    border-radius: 0.5rem;
    background-color: var(--share-tooltip-bg);
    color: var(--share-tooltip-text);
    border: 1px solid var(--share-border);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
    pointer-events: none;
    z-index: 20;
}

.share-tooltip--error {
    background-color: var(--share-error-bg);
    border-color: transparent;
    color: #ffffff;
}

.share-tooltip-arrow {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: -1px;
    border-width: 4px;
    border-style: solid;
    border-color: var(--share-tooltip-bg) transparent transparent transparent;
}

.share-tooltip--error .share-tooltip-arrow {
    border-color: var(--share-error-bg) transparent transparent transparent;
}

.fade-slide-enter-active {
    transition: all 0.15s ease-out;
}

.fade-slide-leave-active {
    transition: all 0.1s ease-in;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(4px) scale(0.95);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
}

@media (max-width: 600px) {
    .share-button {
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        font-size: 0.74rem;
    }
}
</style>
