<script setup lang="ts">
</script>
<template>
    <section class="polygon-background">
        <div class="left-polygon"></div>
        <div class="right-polygon"></div>
    </section>
</template>
<style scoped>
.polygon-background {
    position: absolute;
    display: flex;
    justify-content: space-between;
    min-height: 700px;
    width: 100%;

}
.left-polygon, .right-polygon {
    z-index: -1;
    aspect-ratio: 1/1;
    background-color: var(--background-shape-primary-color);
}

.left-polygon {
    width: 63.20%;
    max-width: 910px;
    max-height: 778px;
    clip-path: polygon(0% 0%, 93.8% 0%, 99.7% 51.4%, 99.7% 51.4%, 99.9% 54%, 99.9% 56.6%, 99.7% 59.1%, 99.2% 61.6%, 98.6% 64%, 97.7% 66.3%, 96.7% 68.6%, 95.5% 70.7%, 94.1% 72.6%, 92.5% 74.5%, 74.4% 93.3%, 74.4% 93.3%, 72.8% 94.8%, 71.2% 96.1%, 69.5% 97.2%, 67.7% 98.2%, 65.8% 98.9%, 63.9% 99.4%, 62% 99.8%, 60% 99.9%, 58% 99.9%, 56.1% 99.6%, 0% 89.1%, 0% 0%);
}

.right-polygon {
    width: 36.8%;
    max-width: 530px;
    max-height: 270px;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 35.4% 75.6%, 35.4% 75.6%, 31.9% 73.9%, 28.5% 71.7%, 25.3% 68.8%, 22.3% 65.4%, 19.4% 61.5%, 16.7% 57%, 14.3% 52.1%, 12.1% 46.7%, 10.1% 40.9%, 8.4% 34.7%, 0% 0%);
}
</style>