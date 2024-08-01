<script setup lang="ts">

const props = defineProps<{
    title: string;
    description: string;
    width: string;
    height: string;
}>();

</script>

<template>
    <div class="faq-card" :style="{ width: props.width, height: props.height }">
        <div>
            <div class="img-controller">
                <img src="@/assets/images/icons/small-arrow-right.svg" alt="FAQ Card Arrow" />
            </div>
        </div>
        <div>
            <h5>{{ title }}</h5>
            <h6>{{ description }}</h6>
        </div>

    </div>

</template>

<style scoped>
.faq-card {
    display: flex;
    justify-content: start;
    padding: 25px;
    gap: 20px;
    background-color: var(--card-background-primary-color);
    border-radius: 9px;
}

.faq-card > div:nth-child(1) {
    display: flex;
    justify-content: start;
    align-items: start;
}

.faq-card > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.faq-card .img-controller {
    width: 8.62px;
    height: 16px;
}

.faq-card h5, .faq-card h6{
    text-align: start;
}
.faq-card h5 {
    color: var(--dark-primary-text-color);
    font-size: 16px;
}

.faq-card h6 {
    color: var(--dark-secondary-text-color);
}


</style>