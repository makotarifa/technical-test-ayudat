<script setup lang="ts">
import Newsletter from "@/views/sections/HomeView/Newsletter.vue";
import FAQ from "@/views/sections/HomeView/FAQ.vue";
import MostPopularCourses from "@/views/sections/HomeView/MostPopularCourses.vue";
import ApprodablePackages from "@/views/sections/HomeView/ApprodablePackages.vue";
import OurPopularCourses from "@/views/sections/HomeView/OurPopularCourses.vue";
import FirstMostPopularCourses from "@/views/sections/HomeView/FirstMostPopularCourses.vue";
import MainContent from "@/views/sections/HomeView/MainContent.vue";
</script>

<template>
    <main>
        <main-content />
        <first-most-popular-courses />
        <our-popular-courses />
        <approdable-packages />
        <most-popular-courses />
        <f-a-q />
        <newsletter />
    </main>
</template>

