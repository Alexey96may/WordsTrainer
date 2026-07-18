<template>
    <div class="loader-container">
        <div class="spinner"></div>
    </div>
</template>

<style scoped>
.loader-container {
    display: flex;
    justify-content: center;
    padding: 40px;
    width: 100%;
}

.spinner {
    width: 30px;
    height: 30px;
    border: 3px solid rgba(25, 135, 84, 0.3);
    border-radius: 50%;
    border-top-color: #198754;
    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

@media (max-width: 600px) {
    .loader-container {
        padding: 30px;
    }

    .spinner {
        width: 24px;
        height: 24px;
        border: 2px solid rgba(25, 135, 84, 0.3);
        border-top-color: #198754;
        animation: spin 0.8s linear infinite;
    }
}
</style>
