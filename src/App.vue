<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import AppHeader from "@/views/AppNavBar.vue";
import AppFooter from "@/views/AppFooter.vue";
import AppNavBar from "@/views/AppNavBar.vue";
</script>

<template>
    <app-nav-bar />
    <RouterView />
    <app-footer />
</template>

<style scoped>
</style>
