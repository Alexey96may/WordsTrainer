<script setup lang="ts">
import Header from "@/components/shared/AppHeader.vue";
import Footer from "@/components/shared/AppFooter.vue";
</script>

<template>
    <Header />

    <main class="container">
        <router-view v-slot="{ Component }">
            <Transition name="fade-view" mode="out-in">
                <component :is="Component" />
            </Transition>
        </router-view>
    </main>

    <Footer />
</template>

<style scoped>
header {
    line-height: 1.5;
}

.fade-view-enter-active,
.fade-view-leave-active {
    transition:
        opacity 0.3s cubic-bezier(0.25, 1, 0.5, 1),
        transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

/* Initial state upon appearance and final state upon disappearance */
.fade-view-enter-from {
    opacity: 0;
    transform: translateY(10px);
}

.fade-view-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>
