<template>
    <div id="select_container" ref="selectContainerRef">
        <div
            id="select_game"
            class="custom-select-box"
            :class="{ 'is-open': isSelectOpen }"
        >
            <div
                class="option first-opt"
                :class="{
                    optSelected: checkedKind.includes('all'),
                }"
                @click="handleFirstOptClick"
            >
                <span
                    >{{ $t("trainer.categories.all") }}
                    <sup>({{ activeKindsCount }})</sup></span
                >
            </div>

            <div class="arrow-indicator" @click="listReveal">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    :class="{ 'arrow-rotated': isSelectOpen }"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>

            <div class="secOptionContainer">
                <div
                    v-for="(kind, index) in sectionArr.slice(1)"
                    :key="index"
                    class="option"
                    :class="{
                        optSelected: checkedKind.includes(kind.toLowerCase()),
                        'disabled-kind': !isKindAvailable(kind),
                    }"
                    @click="emitCategory(kind)"
                >
                    {{ kind }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount, watch, computed } from "vue";

interface Props {
    sectionArr: string[];
    checkedKind: string[];
    activeKindsCount: number;
    isKindAvailable: (kind: string) => boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
    (e: "select-category", kind: string): void;
}>();

const isSelectOpen = ref(false);
const isAllSelected = computed(() => {
    return props.checkedKind.includes("all");
});
const selectContainerRef = ref<HTMLElement | null>(null);

const emitCategory = (kind: string) => {
    emit("select-category", kind);
};

const handleFirstOptClick = () => {
    if (isAllSelected.value) {
        isSelectOpen.value = !isSelectOpen.value;
    } else {
        isSelectOpen.value = false;
        emitCategory("all");
    }
};

const listReveal = () => {
    if (!isSelectOpen.value) {
        isSelectOpen.value = true;
    } else {
        isSelectOpen.value = false;
    }
};

const handleClickOutside = (event: MouseEvent) => {
    if (
        selectContainerRef.value &&
        !selectContainerRef.value.contains(event.target as Node)
    ) {
        isSelectOpen.value = false;
    }
};

watch(isSelectOpen, (isOpen) => {
    if (isOpen) {
        setTimeout(() => {
            document.addEventListener("click", handleClickOutside);
        }, 0);
    } else {
        document.removeEventListener("click", handleClickOutside);
    }
});

onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
#select_container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.custom-select-box {
    max-width: 320px;
    height: 40px;
    border: 1px solid #198754;
    border-radius: 4px;
    background-color: #222;
    overflow: hidden;
    transition: height 0.25s ease-in-out;
    display: flex;
    flex-direction: column;
    position: relative;
}

.is-open {
    height: 250px;
}

.option {
    padding: 8px 16px;
    color: #fff;
    cursor: pointer;
    border-bottom: 1px solid #2d2d2d;
    transition: background-color 0.2s;
    flex-shrink: 0;
}
@media (hover: hover) {
    .option:hover {
        background-color: #2d2d2d;
    }
}
.option:active {
    background-color: #2d2d2d;
}

/* The top bar now serves as the relative context for the arrow */
.first-opt {
    border-bottom: 1px solid #198754;
    font-weight: bold;
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: #222;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    box-sizing: border-box;
}

/* Checkmark arrow styles */
.arrow-indicator {
    width: 40px;
    border-bottom: 1px solid #198754;
    height: 40px;
    transition:
        transform 0.25s ease-in-out,
        border-color 0.2s;
    z-index: 999;
    background-color: #0b3823;
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
}

.arrow-indicator svg {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    right: 50%;
    stroke-width: 2;
    transition: all 0.2s ease;
    translate: 50% -50%;
}
@media (hover: hover) {
    .arrow-indicator:hover svg {
        color: #fff;
    }
}
.arrow-indicator:active svg {
    color: #fff;
}

.first-opt.optSelected .arrow-indicator {
    border-bottom-color: #fff;
    border-right-color: #fff;
}

.arrow-indicator svg.arrow-rotated {
    transform: rotate(180deg);
}

.secOptionContainer {
    overflow-y: auto;
    flex-grow: 1;
    max-height: 210px;
    background-color: #222;
}

.secOptionContainer::-webkit-scrollbar {
    width: 6px;
}
.secOptionContainer::-webkit-scrollbar-track {
    background: #1a1a1a;
}
.secOptionContainer::-webkit-scrollbar-thumb {
    background: #198754;
    border-radius: 3px;
}
@media (hover: hover) {
    .secOptionContainer::-webkit-scrollbar-thumb:hover {
        background: #157347;
    }
}

.optSelected {
    background-color: #198754 !important;
    color: white !important;
}

.disabled-kind {
    color: #7f7f7f !important;
}

@media (max-width: 600px) {
    .custom-select-box {
        max-width: 40vw;
        height: 30px;
    }

    .is-open {
        height: 250px;
    }
    .option {
        padding: 6px 12px;
        font-size: 0.8rem;
    }

    .first-opt {
        height: 30px;
    }

    .arrow-indicator {
        width: 30px;
        height: 30px;
    }

    .arrow-indicator svg {
        width: 18px;
        height: 18px;
    }
}

@media (max-width: 340px) {
    .custom-select-box {
        max-width: unset;
        width: 100%;
        flex-shrink: 0;
    }
    .option {
        padding: 6px 12px;
        font-size: 0.7rem;
    }

    .arrow-indicator svg {
        width: 18px;
        height: 18px;
        stroke-width: 1;
    }
}
</style>
