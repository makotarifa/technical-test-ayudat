<script setup lang="ts">
import { useNotification } from "naive-ui";
import { useNewsletterStore } from "@/stores/newsletterStore";
import { watch } from "vue";

const newsletterStore = useNewsletterStore();
const notification = useNotification();

watch(() => newsletterStore.isFailed, (newVal) => {
    if (newVal) {
        notification.error({
            title: "Subscription Failed",
            content: "There was an error subscribing to the newsletter."
        });
    }
});

watch(() => newsletterStore.isSubscribed, (newVal) => {
    if (newVal) {
        notification.success({
            title: "Subscription Successful",
            content: "Thank you for subscribing to the newsletter."
        });
    }
});
</script>
<template>

</template>