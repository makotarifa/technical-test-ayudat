<script setup lang="ts">
import NewsletterHome from "@/views/sections/HomeView/NewsletterHome.vue";
import FAQHome from "@/views/sections/HomeView/FAQHome.vue";
import MostPopularCoursesHome from "@/views/sections/HomeView/MostPopularCoursesHome.vue";
import ApprodablePackagesHome from "@/views/sections/HomeView/ApprodablePackagesHome.vue";
</script>

<template>
        <main>
            <approdable-packages-home />
            <most-popular-courses-home />
            <f-a-q-home />
            <newsletter-home />
        </main>
</template>
