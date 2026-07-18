<template>
    <div v-if="wordData" class="daily-word-container" ref="container">
        <div class="daily-word-card" :class="{ visible: isVisible }">
            <div class="header">
                <div class="header__up">
                    <div
                        v-if="wordData.voicePath"
                        class="sound-icon"
                        @click="playAudio"
                    >
                        <SpeakerIcon />
                    </div>
                    <span class="level-badge">{{ wordData.level }}</span>
                </div>
                <h2
                    class="word"
                    @click="playAudio"
                    :class="{ 'has-audio': wordData?.voicePath }"
                >
                    {{ capitalizedWord }}
                </h2>
            </div>

            <p class="translation">{{ wordData.translation }}</p>

            <hr class="divider" :style="{ width: isVisible ? '60%' : '0px' }" />

            <div class="details">
                <p class="details__morph" v-if="wordData.morfology">
                    <span v-html="wordData.morfology"></span>
                </p>
                <p class="details__etim" v-if="wordData.etymology">
                    <span v-html="wordData.etymology"></span>
                </p>
            </div>

            <div
                v-if="wordData.synonims || wordData.antonims"
                class="lexical-group"
            >
                <p v-if="wordData.synonims" class="syn">
                    <em>{{ t("dailyWord.synonims") }}</em>
                    {{ wordData.synonims }}
                </p>
                <p v-if="wordData.antonims" class="ant">
                    <em>{{ t("dailyWord.antonims") }}</em>
                    {{ wordData.antonims }}
                </p>
            </div>

            <div class="example-box" v-if="wordData.example">
                <p class="ex-orig">{{ wordData.example }}</p>
                <p class="ex-transl">{{ wordData.exampleTransl }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted, nextTick, watch } from "vue";
import SpeakerIcon from "@/components/icons/SpeakerIcon.vue";
import { useDailyWord } from "@/composables/useDailyWord";
import { useI18n } from "vue-i18n";

const { wordData } = useDailyWord();
const { t } = useI18n();
const isVisible = ref(false);
const container = ref<HTMLElement | null>(null);

const capitalizedWord = computed(() => {
    const w = wordData.value?.word || "";
    return w.charAt(0).toUpperCase() + w.slice(1);
});

const playAudio = () => {
    if (wordData.value?.voicePath) {
        new Audio(import.meta.env.BASE_URL + wordData.value.voicePath).play();
    }
};

let observer: IntersectionObserver | null = null;

const initObserver = () => {
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isVisible.value = true;
                    observer?.disconnect();
                }
            });
        },
        { threshold: 0.1 },
    );

    if (container.value) {
        observer.observe(container.value);

        const rect = container.value.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            isVisible.value = true;
            observer.disconnect();
        }
    }
};

watch(
    () => wordData.value,
    async (newData) => {
        if (newData) {
            await nextTick();
            initObserver();
        }
    },
    { immediate: true },
);

onUnmounted(() => {
    if (observer) observer.disconnect();
});
</script>

<style scoped>
.daily-word-container {
    margin-top: 40px;
    margin-bottom: 60px;
}

.daily-word-card {
    max-width: 500px;
    min-width: 50vw;
    margin: 0 auto;

    padding: 2rem 2rem 3rem;
    background-color: rgb(29, 29, 29);
    border: 1px solid #198754;
    border-radius: 8px;
    color: #e0e0e0;
    opacity: 0;
    transform: translateY(20px);
    transition:
        opacity 0.8s ease,
        transform 0.8s ease;
}

.daily-word-card.visible {
    opacity: 1;
    transform: translateY(0);
}

.header {
    margin-bottom: 8px;
}

.header__up {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1rem;
    gap: 1rem;
}

.word {
    font-family: var(--font-serif);
    font-size: 2rem;
    margin: 0;
    text-align: center;
}

.word.has-audio {
    cursor: pointer;
    transition: opacity 0.2s;
}

@media (hover: hover) {
    .word.has-audio:hover {
        opacity: 0.8;
    }
}

.level-badge {
    font-size: 0.8rem;
    line-height: 1;
    padding: 8px;
    background: #198754;
    border-radius: 4px;
}

.sound-icon {
    cursor: pointer;
    width: 22px;
    height: 22px;
}

.translation {
    text-align: center;
    font-size: 1.1rem;
    color: #aaa;
    margin-bottom: 20px;
}

.divider {
    border: 0;
    height: 1px;
    background: #198754;
    margin: 0 auto 20px;
    transition: width 0.7s;
}

.details {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.details__morph {
    text-align: center;
}

.lexical-group {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    font-size: 0.9em;
    color: #888;
}
.lexical-group p {
    flex-basis: 50%;
}

.example-box {
    margin-top: 1.5rem;
    padding: 15px;
    background: rgb(24, 24, 24);
    border-left: 3px solid #198754;
}
.ex-orig {
    font-style: italic;
    font-size: 1rem;
    margin-bottom: 5px;
}
.ex-transl {
    font-size: 0.9em;
    color: #aaa;
}

@media (max-width: 600px) {
    .daily-word-container {
        margin-top: 20px;
        margin-bottom: 60px;
    }

    .daily-word-card {
        width: 100%;
        padding: 1rem 1rem 3rem;
    }

    .details {
        font-size: 0.8rem;
        line-height: 1.5;
        margin-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
    }

    .level-badge {
        font-size: 0.6rem;
        padding: 6px 6px;
        border-radius: 4px;
    }

    .lexical-group {
        flex-direction: column;
        gap: 0.5rem;
        font-size: 0.8em;
    }

    .lexical-group p {
        padding-left: 1rem;
        text-indent: -1rem;
    }

    .ex-orig {
        font-size: 0.9rem;
    }
    .ex-transl {
        font-size: 0.8em;
    }

    .header__up {
        margin-bottom: 1rem;
        gap: 0.7rem;
    }

    .sound-icon {
        width: 18px;
        height: 18px;
    }

    .example-box {
        margin-top: 1.5rem;
        padding: 1rem;
        border-left: 1px solid #198754;
    }
}

@media (max-width: 340px) {
    .lexical-group {
        flex-direction: column;
        font-size: 0.9em;
    }
}
</style>
