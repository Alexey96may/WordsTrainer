<template>
    <button
        class="modal-close-x"
        type="button"
        aria-label="Закрыть"
        @click="$emit('close')"
    >
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="close-x-svg"
        >
            <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    </button>
</template>

<script setup lang="ts">
defineEmits<{
    (e: "close"): void;
}>();
</script>

<style scoped>
.modal-close-x {
    cursor: pointer;
    background: none;
    border: none;
    padding: 4px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: #a60909; /* Базовый нейтральный цвет крестика */
    transition:
        color 0.2s ease,
        background-color 0.2s ease,
        transform 0.1s ease;
    outline: none;
    width: 32px;
    height: 32px;
}

/* Иконка адаптируется под размеры кнопки */
.close-x-svg {
    width: 100%;
    height: 100%;
    display: block;
}

/* Эффект при наведении — крестик становится ярче или принимает твой фирменный цвет */
.modal-close-x:hover {
    color: #dc1515;
    background-color: rgba(255, 0, 0, 0.09); /* Легкая подложка на ховер */
}

/* Клик */
.modal-close-x:active {
    transform: scale(0.92);
}

/* Стили фокуса для доступности с клавиатуры */
.modal-close-x:focus-visible {
    outline: 2px solid #198754;
}
</style>
