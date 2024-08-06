<script setup lang="ts">
import { RouterView } from "vue-router";
import AppFooter from "@/views/sections/AppFooter.vue";
import AppNavBar from "@/views/sections/AppNavBar.vue";
import NotificationHandler from "@/components/NotificationHandler.vue";
import { NNotificationProvider } from "naive-ui";
import PolygonBackground from "@/views/sections/PolygonBackground.vue";
</script>

<template>
    <n-notification-provider>
        <!-- I don't like using polygon-background here, but it is necessary to make it visible starting from above the navbar.
        Another possible solution is to move the navbar to the HomeView component, but if we do this, we would need to declare the navbar in all views.
        Alternatively, we could use a script to determine which RouterView we are in and deactivate it in the ones isn't needed. -->
        <polygon-background />
        <app-nav-bar />
        <RouterView />
        <app-footer />
        <notification-handler />
    </n-notification-provider>
</template>

