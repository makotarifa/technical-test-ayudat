<script setup lang="ts">
import { RouterView } from "vue-router";
import AppFooter from "@/views/sections/AppFooter.vue";
import AppNavBar from "@/views/sections/AppNavBar.vue";
import NotificationHandler from "@/components/NotificationHandler.vue";
import { NNotificationProvider } from "naive-ui";

</script>

<template>
    <n-notification-provider>
        <app-nav-bar />
        <RouterView />
        <app-footer />
        <notification-handler />
    </n-notification-provider>
</template>

<style scoped>
</style>
