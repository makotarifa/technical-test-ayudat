<script setup lang="ts">
import { defineProps } from "vue";
import filledStar from "@/assets/images/icons/star.svg";
import emptyStar from "@/assets/images/icons/empty-star.svg";

const props = defineProps<{
    rate: number;
    maxStars?: number;
    gap?: string;
}>();

const maxStars = props.maxStars ?? 5;
const defaultGap = props.gap ?? "5px";
</script>

<template>
    <div class="star-bar" :style="{ gap: defaultGap }">
        <div v-for="index in maxStars"
             :key="index"
             class="img-controller">
            <img
                :src="index <= props.rate ? filledStar : emptyStar"
                alt="star"
            />
        </div>
    </div>
</template>

<style scoped>
.star-bar {
    display: flex;
}
</style>