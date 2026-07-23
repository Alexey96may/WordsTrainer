<template>
    <div v-if="noticeText" class="fixed-notice box" :style="noticeStyle">
        <b>{{ $t("trainer.remark.title") }}</b>
        <span v-html="noticeText"></span>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, type CSSProperties } from "vue";
import { useI18n } from "vue-i18n";

interface Props {
    noticeText: string;
    tableContainerRef: HTMLElement | null;
}

const props = defineProps<Props>();

const { t } = useI18n();
const scrollY = ref(0);

const handleScroll = () => {
    scrollY.value = window.scrollY;
};

const noticeStyle = computed<CSSProperties>(() => {
    if (!props.tableContainerRef)
        return { visibility: "visible", opacity: 0.95 };

    const tableEndPos =
        props.tableContainerRef.offsetTop +
        props.tableContainerRef.clientTop +
        props.tableContainerRef.offsetHeight -
        window.innerHeight;

    if (scrollY.value >= tableEndPos) {
        return {
            transition: "all 0.2s",
            visibility: "hidden",
            opacity: 0,
        };
    } else {
        return {
            transition: "all 0.2s",
            visibility: "visible",
            opacity: 0.95,
        };
    }
});

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
.fixed-notice {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #0f5132;
    color: white;
    padding: 12px;
    z-index: 998;
    box-sizing: border-box;
    font-size: 0.95rem;
    max-height: 20vh;
    overflow: auto;

    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.35) transparent;
}

.fixed-notice::-webkit-scrollbar {
    width: 6px;
}

@media (max-width: 600px) {
    .fixed-notice {
        padding: 8px 12px;
        font-size: 0.75rem;
    }
}
@media (max-width: 340px) {
    .fixed-notice {
        padding: 8px;
        font-size: 0.7rem;
    }
}
</style>
