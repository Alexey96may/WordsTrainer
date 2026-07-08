<template>
    <Teleport to="body">
        <div
            v-if="isOpen"
            class="modal-overlay-wrapper"
            @click.self="closeModal"
            role="dialog"
            aria-modal="true"
        >
            <div
                ref="modalRef"
                class="word-modal-window"
                :style="modalStyle"
                @touchstart="handleTouchStart"
                @touchmove="handleTouchMove"
                @touchend="handleTouchEnd"
            >
                <AppCloseButton class="modal-close-btn" @close="closeModal" />

                <div class="modal-header-section">
                    <h2>
                        {{
                            capitalize(
                                currentWordData?.base ||
                                    currentWordData?.word ||
                                    "",
                            )
                        }}
                    </h2>
                    <p class="modal-translation-hint">
                        ({{ getTranslation(currentWordData) }})
                    </p>
                </div>

                <div class="modal-body-scroll-container">
                    <div class="modal-grid-layout" :class="gridClass">
                        <div
                            v-for="(item, idx) in relatedForms"
                            :key="idx"
                            class="modal-word-card"
                            :style="getCardStyle(idx)"
                        >
                            <span class="card-idx">{{ idx + 1 }}.</span>
                            <div class="card-main-word">
                                <strong>{{ item.word }}</strong>
                            </div>

                            <div
                                v-if="item.translation"
                                class="card-translation"
                            >
                                ({{ item.translation.trim() }})
                            </div>

                            <template
                                v-if="
                                    item.groups &&
                                    Object.keys(item.groups).length
                                "
                            >
                                <hr class="card-divider" />
                                <div
                                    v-for="(groupVal, groupKey) in item.groups"
                                    :key="groupKey"
                                    class="card-group-line"
                                    v-html="groupVal"
                                ></div>
                            </template>
                        </div>

                        <div
                            v-if="relatedForms.length === 0"
                            class="modal-word-card empty-state"
                        >
                            <span>Нет информации</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from "vue";
import AppCloseButton from "@/components/ui/AppCloseButton.vue";

interface Props {
    isOpen: boolean;
    currentIndex: number;
    tableRows: any[];
    globalArray: any[];
    paramGlobal?: string[];
}

const props = withDefaults(defineProps<Props>(), {
    paramGlobal: () => [],
});

const emit = defineEmits<{
    (e: "close"): void;
    (e: "update:currentIndex", val: number): void;
}>();

// Refs
const modalRef = ref<HTMLElement | null>(null);
const touchX = ref(0);
const shiftX = ref(0);
const isSwiping = ref(false);
const transformX = ref(0);
const opacityVal = ref(1);
const transitionStyle = ref("none");

// Data
const activeRow = computed(() => {
    if (!props.tableRows.length || props.currentIndex < 0) return null;
    return props.tableRows[props.currentIndex];
});

const currentWordData = computed(() => activeRow.value || {});

const relatedForms = computed(() => {
    if (!activeRow.value) return [];
    const targetBase = (activeRow.value.base || activeRow.value.word || "")
        .toLowerCase()
        .trim();
    const targetKind = (activeRow.value.kind || "").toLowerCase().trim();

    return props.globalArray.filter((item) => {
        const base = (item.base || item.word || "").toLowerCase().trim();
        const kind = (item.kind || "").toLowerCase().trim();
        const matchesBase = targetBase === base;
        const matchesKind =
            props.paramGlobal.includes("withoutKind") || targetKind === kind;
        return matchesBase && matchesKind;
    });
});

const countFill = computed(() => relatedForms.value.length);

// Grid logic
const gridClass = computed(() => {
    if (countFill.value < 4) return "grid-column";
    if (countFill.value === 24) return "grid-2";
    if (countFill.value === 6 || countFill.value === 9 || countFill.value > 17)
        return "grid-3";
    return "grid-default";
});

const modalStyle = computed(() => ({
    transform: `translateX(${transformX.value}px)`,
    opacity: String(opacityVal.value),
    transition: transitionStyle.value,
}));

// Methods
const capitalize = (s: string): string => {
    if (!s) return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
};

const getTranslation = (word: any) => {
    if (!word) return "";
    const parts = word.flatString?.split("\t") || [];
    if (props.paramGlobal.includes("firstTransl")) {
        return parts[parts.length - 2] || word.translation || "";
    }
    return parts[parts.length - 1] || word.translation || "";
};

const getCardStyle = (idx: number) => {
    if (
        props.paramGlobal.includes("unicSortforAllVerbs") &&
        countFill.value > 30
    ) {
        let counterX = (idx % 12) + 1;
        if (idx > 65) return { width: "50%" };
        if (idx === 70) return { width: "100%" };
        return {
            width: "33.3%",
            backgroundColor:
                counterX < 7 || idx === 70 ? "#00000026" : "#19875400",
        };
    }
    return {};
};

const navigate = (direction: "prev" | "next") => {
    let newIdx = props.currentIndex;
    if (direction === "prev" && props.currentIndex > 0) newIdx--;
    else if (
        direction === "next" &&
        props.currentIndex < props.tableRows.length - 1
    )
        newIdx++;

    if (newIdx === props.currentIndex) {
        transitionStyle.value = "all 0.2s ease-out";
        transformX.value = 0;
        return;
    }

    transitionStyle.value = "all 0.15s ease-in";
    opacityVal.value = 0;

    setTimeout(() => {
        emit("update:currentIndex", newIdx);
        transformX.value = 0;
        opacityVal.value = 1;
        transitionStyle.value = "none";
    }, 160);
};

const closeModal = () => emit("close");

const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") navigate("prev");
    if (e.key === "ArrowRight") navigate("next");
    if (["Enter", "Backspace", "Escape"].includes(e.key)) closeModal();
};

// Touch
const handleTouchStart = (e: TouchEvent) => {
    if (!e.touches || !e.touches[0]) return;
    touchX.value = e.touches[0].clientX;
    isSwiping.value = true;
    transitionStyle.value = "none";
};

const handleTouchMove = (e: TouchEvent) => {
    if (!isSwiping.value) return;
    if (!e.changedTouches || !e.changedTouches[0]) return;

    const diffX = e.changedTouches[0].clientX - touchX.value;
    if (Math.abs(diffX) > 10) {
        transformX.value = diffX;
        shiftX.value = diffX;
    }
};

const handleTouchEnd = () => {
    if (!isSwiping.value) return;
    isSwiping.value = false;
    const threshold = window.innerWidth / 4;

    if (
        shiftX.value < -threshold &&
        props.currentIndex < props.tableRows.length - 1
    ) {
        transitionStyle.value = "all 0.15s ease-in";
        transformX.value = -window.innerWidth;
        setTimeout(() => navigate("next"), 150);
    } else if (shiftX.value > threshold && props.currentIndex > 0) {
        transitionStyle.value = "all 0.15s ease-in";
        transformX.value = window.innerWidth;
        setTimeout(() => navigate("prev"), 150);
    } else {
        transitionStyle.value = "all 0.2s ease-out";
        transformX.value = 0;
    }
    shiftX.value = 0;
};

// Disable body scrolling
watch(
    () => props.isOpen,
    (active) => {
        if (active) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        }
    },
);

onUnmounted(() => {
    window.removeEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "";
});
</script>

<style scoped>
/* Full-screen overlay */
.modal-overlay-wrapper {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.88);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999;
    padding: 20px;
}

/* Modal window */
.word-modal-window {
    position: relative;
    background-color: #1a1a1a;
    border: 1px solid #198754;
    border-radius: 12px;
    width: 100%;
    max-width: 900px;
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    padding: 24px 12px 24px 24px;
    color: #fff;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    overflow: hidden;
}

.modal-close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 10;
}

.modal-header-section {
    text-align: center;
    margin-bottom: 20px;
    padding-right: 12px;
    flex-shrink: 0;
}

.modal-header-section h2 {
    color: #fff;
    font-size: 2rem;
    margin: 0 0 5px 0;
}

.modal-translation-hint {
    color: #8b8b8b;
    font-style: italic;
    margin: 0;
}

/* CARD SCROLL CONTAINER */
.modal-body-scroll-container {
    overflow-y: auto;
    flex-grow: 1;
    padding-right: 12px;
}

/* Custom green scrollbar */
.modal-body-scroll-container::-webkit-scrollbar {
    width: 8px;
}
.modal-body-scroll-container::-webkit-scrollbar-track {
    background: #111;
    border-radius: 4px;
}
.modal-body-scroll-container::-webkit-scrollbar-thumb {
    background: #198754;
    border-radius: 4px;
}
@media (hover: hover) {
    .modal-body-scroll-container::-webkit-scrollbar-thumb:hover {
        background: #157347;
    }
}

/* Grid */
.modal-grid-layout {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding-bottom: 8px; /* Bottom safety margin */
}

.modal-grid-layout.grid-column {
    flex-direction: column;
}

.modal-word-card {
    background-color: #242424;
    border: 1px solid #333;
    padding: 15px;
    border-radius: 8px;
    flex: 1 1 calc(33.333% - 15px);
    min-width: 220px;
    position: relative;
    box-sizing: border-box;
}

.grid-2 .modal-word-card {
    flex: 1 1 calc(50% - 15px);
}
.grid-3 .modal-word-card {
    flex: 1 1 calc(33.333% - 15px);
}

.card-idx {
    position: absolute;
    top: 6px;
    left: 10px;
    font-size: 0.75rem;
    color: #666;
}

.card-main-word {
    text-align: center;
    font-size: 1.2rem;
    color: #198754;
    margin-bottom: 5px;
}

.card-translation {
    text-align: center;
    color: #aaa;
    font-style: italic;
    font-size: 0.9rem;
}

.card-divider {
    border: 0;
    border-top: 1px solid #333;
    margin: 10px 0;
}

.card-group-line {
    text-align: center;
    font-size: 0.85rem;
    margin-bottom: 3px;
}

.empty-state {
    width: 100%;
    text-align: center;
}

@media (max-width: 600px) {
    .word-modal-window {
        padding: 18px 6px 12px 12px;
    }

    .modal-header-section h2 {
        font-size: 1.6rem;
        margin: 0;
    }

    .modal-word-card {
        padding: 15px;
        border-radius: 8px;
        min-width: 220px;
    }
}
@media (max-width: 340px) {
    .modal-header-section h2 {
        font-size: 1.4rem;
        margin: 0;
    }
    .modal-word-card {
        padding: 15px;
        border-radius: 8px;
        min-width: 220px;
    }
}
</style>
