<template>
    <div
        class="sound-controls-container"
        role="toolbar"
        aria-label="Управление состоянием тренажера"
    >
        <button
            class="control-btn"
            type="button"
            title="Сбросить текущий прогресс"
            @click="handleReload"
        >
            <svg
                class="control-btn__svg control-btn__svg--reload"
                :class="{ 'is-spinning-back': isReloadSpinning }"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @animationend="isReloadSpinning = false"
            >
                <path
                    d="M12.5 3C17.15 3 21 6.85 21 11.5C21 16.15 17.15 20 12.5 20C8.87 20 5.8 17.7 4.6 14.5M3 10V5M3 10H8"
                    stroke="#e0e0e0"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </button>

        <button
            class="control-btn"
            type="button"
            title="Пропустить / Сменить вопрос"
            @click="handleRefresh"
        >
            <svg
                class="control-btn__svg control-btn__svg--load"
                :class="{ 'is-spinning-forward': isRefreshSpinning }"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @animationend="isRefreshSpinning = false"
            >
                <path
                    d="M11.5 3C6.85 3 3 6.85 3 11.5C3 16.15 6.85 20 11.5 20C15.13 20 18.2 17.7 19.4 14.5M21 10V5M21 10H16"
                    stroke="#e0e0e0"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </button>

        <button
            id="soundCheck"
            class="control-btn"
            type="button"
            :class="{ 'sound-off': !isSoundOn }"
            :title="soundTitle"
            :aria-label="soundTitle"
            @click="$emit('toggle-sound')"
        >
            <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <g data-name="Layer 34" id="Layer_34">
                    <path
                        class="cls-1"
                        d="M18,29a1,1,0,0,1-.57-.18l-10-7A1,1,0,0,1,7,21V11a1,1,0,0,1,.43-.82l10-7a1,1,0,0,1,1-.07A1,1,0,0,1,19,4V28a1,1,0,0,1-.54.89A1,1,0,0,1,18,29ZM9,20.48l8,5.6V5.92l-8,5.6Z"
                    />
                    <path
                        class="cls-1"
                        d="M7,22H3a2,2,0,0,1-2-2V12a2,2,0,0,1,2-2h4a1,1,0,0,1,1,1V21A1,1,0,0,1,7,22ZM3,12v8H6V12Z"
                    />

                    <path
                        v-if="isSoundOn && soundLevel >= 1"
                        class="cls-1"
                        id="sLevel1"
                        d="M18,21V19a3,3,0,0,0,2.12-5.12l1.42-1.42A5,5,0,0,1,18,21Z"
                    />
                    <path
                        v-if="isSoundOn && soundLevel >= 2"
                        class="cls-1"
                        id="sLevel3"
                        d="M23.65,22.65a1,1,0,0,1-.29-.7A1,1,0,0,1,23,21a7,7,0,0,0,0-9.9,1,1,0,0,1,1.41-1.41,9,9,0,0,1,0,12.72A1,1,0,0,1,23.65,22.65Z"
                    />
                    <path
                        v-if="isSoundOn && soundLevel >= 3"
                        class="cls-1"
                        id="sLevel2"
                        d="M26.48,25.48a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42,11,11,0,0,0,0-15.54,1,1,0,1,1,1.42-1.42,13,13,0,0,1,0,18.38A1,1,0,0,1,26.48,25.48Z"
                    />
                </g>
            </svg>
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
    isSoundOn: boolean;
    soundLevel: number;
}

const props = defineProps<Props>();

const emit = defineEmits<{
    (e: "reload"): void;
    (e: "refresh"): void;
    (e: "toggle-sound"): void;
}>();

const soundTitle = computed(() => {
    return props.isSoundOn
        ? `Громкость: уровень ${props.soundLevel}`
        : "Звук выключен";
});

const isReloadSpinning = ref(false);
const isRefreshSpinning = ref(false);

const handleReload = () => {
    isReloadSpinning.value = true;
    emit("reload");
};

const handleRefresh = () => {
    isRefreshSpinning.value = true;
    emit("refresh");
};
</script>

<style scoped>
.sound-controls-container {
    display: flex;
    justify-content: center;
    gap: 16px;
}

.control-btn {
    cursor: pointer;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    padding: 0;
    outline: none;
    border-radius: 4px;
    transition: all 0.2s ease;
}

.control-btn:active {
    transform: scale(0.92);
}

.control-btn:focus-visible {
    outline: 2px solid #198754;
}

.control-btn__svg {
    display: block;
    width: 24px;
    height: 24px;
    transition: all 0.2s;
}

.control-btn svg,
.control-btn__svg {
    width: 24px;
    height: 24px;
    display: block;
}

.control-btn__svg--load path {
    transition: all 0.2s ease;
}
.control-btn__svg--reload path {
    transition: all 0.2s ease;
}

/* Изменяем цвет стрелок при наведении на кнопку для лучшего UX */
.control-btn:hover .control-btn__svg--load path {
    stroke: #198754;
}

.control-btn:hover .control-btn__svg--reload path {
    stroke: #871e19;
}

/* Анимация вращения НАЗАД (против часовой) */
.control-btn__svg.is-spinning-back {
    animation: spinCounterClockwise 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Анимация вращения ВПЕРЕД (по часовой) */
.control-btn__svg.is-spinning-forward {
    animation: spinClockwise 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes spinClockwise {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes spinCounterClockwise {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(-360deg);
    }
}

/* Стили для кнопки звука */
#soundCheck svg .cls-1 {
    fill: #e0e0e0;
    transition: fill 0.2s ease;
}

#soundCheck:hover svg .cls-1 {
    fill: #198754;
}

#soundCheck.sound-off svg path {
    fill: #6c757d !important;
}
</style>
