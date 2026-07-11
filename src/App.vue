<script setup lang="ts">
import Header from "@/components/shared/AppHeader.vue";
import Footer from "@/components/shared/AppFooter.vue";

import { useHead } from "@vueuse/head";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const { t, locale } = useI18n();
const route = useRoute();

useHead(
    computed(() => {
        const titleKey = (route.meta.title as string) || "meta.home";

        let pageTitle = "";
        if (route.name === "trainer") {
            const slug = route.params.slug as string;
            const trainerName = t(`trainers.${slug}.name`);
            pageTitle = t(titleKey, { name: trainerName });
        } else {
            pageTitle = t(titleKey);
        }

        return {
            htmlAttrs: { lang: locale.value },
            title: pageTitle,
            meta: [
                { name: "description", content: t("meta.description") },
                { name: "keywords", content: t("meta.keywords") },
                { name: "author", content: t("meta.author") },
                { property: "og:type", content: "website" },
                {
                    property: "og:url",
                    content: "https://alexey96may.github.io/WordsTrainer/",
                },
                { property: "og:title", content: t("meta.og_title") },
                {
                    property: "og:description",
                    content: t("meta.og_description"),
                },
                { property: "twitter:card", content: "summary_large_image" },
                {
                    property: "twitter:url",
                    content: "https://alexey96may.github.io/WordsTrainer/",
                },
                { property: "twitter:title", content: t("meta.og_title") },
                {
                    property: "twitter:description",
                    content: t("meta.og_description"),
                },
            ],
            link: [{ rel: "icon", href: "/favicon.png" }],
        };
    }),
);
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
