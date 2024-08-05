<script setup lang="ts">

const props = defineProps<{
    image: string;
    description: string;
    title: string;
    width: string;
}>();

</script>
<template>
    <div class="fmp-card" :style="{ width: props.width }">
        <div class="img-controller">
            <img :src="props.image" />
        </div>
        <hr class="line-separator" />
        <h5>{{props.title}}</h5>
        <p>{{ props.description }}</p>
    </div>
</template>
<style scoped>
.fmp-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 35px 40px;
    background-color: var(--card-background-primary-color);
}

.fmp-card .img-controller {
    width: 72px;
}

.fmp-card h5 {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: var(--dark-primary-text-color);
}

.fmp-card p {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: var(--dark-secondary-text-color);
}

.fmp-card .line-separator {
    width: 50px;
    height: 2px;
    border: 1px solid var(--line-separator-primary-color);
}
</style>