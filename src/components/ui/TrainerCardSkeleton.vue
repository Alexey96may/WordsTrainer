<template>
    <div class="trainer-card skeleton-card">
        <div class="skeleton-icon skeleton-anim"></div>

        <div class="skeleton-title skeleton-anim"></div>

        <div class="skeleton-text skeleton-anim"></div>
        <div class="skeleton-text skeleton-text--short skeleton-anim"></div>

        <div class="skeleton-btn skeleton-anim"></div>
    </div>
</template>

<style scoped>
.skeleton-card {
    background-color: #1d1d1d;
    border: 1px solid rgba(25, 135, 84, 0.2);
    cursor: default;
    pointer-events: none;
}

.skeleton-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-bottom: 12px;
}

.skeleton-title {
    width: 75%;
    height: 24px;
    border-radius: 6px;
    margin: 0 0 10px 0;
}

.skeleton-text {
    width: 100%;
    height: 26px;
    border-radius: 4px;
    margin-bottom: 8px;
}

.skeleton-text--short {
    width: 50%;
    margin-bottom: 40px;
}

.skeleton-btn {
    width: 100%;
    height: 38px;
    border-radius: 6px;
    margin-top: auto;
}

/* Glint shimmer effect */
.skeleton-anim {
    background: linear-gradient(90deg, #252525 25%, #333333 50%, #252525 75%);
    background-size: 200% 100%;
    animation: shimmer 1.4s infinite ease-in-out;
}

@keyframes shimmer {
    0% {
        background-position: 200% 0;
    }
    100% {
        background-position: -200% 0;
    }
}

@media (max-width: 340px) {
    .skeleton-card {
        padding: 12px;
        border-radius: 6px;
    }
    .skeleton-icon {
        width: 30px;
        height: 30px;
    }
    .skeleton-title {
        height: 18px;
    }
    .skeleton-text {
        height: 12px;
    }
    .skeleton-btn {
        height: 28px;
    }
}
</style>
