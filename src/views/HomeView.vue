<script setup lang="ts">
import NewsletterHome from "@/views/sections/HomeView/NewsletterHome.vue";
import FAQHome from "@/views/sections/HomeView/FAQHome.vue";
import MostPopularCoursesHome from "@/views/sections/HomeView/MostPopularCoursesHome.vue";
</script>

<template>
        <main>
            <most-popular-courses-home />
            <f-a-q-home />
            <newsletter-home />
        </main>
</template>
