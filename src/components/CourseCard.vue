<script setup lang="ts">
import { defineProps } from "vue";
import StarRatingBar from "@/components/StarRatingBar.vue";

const props = defineProps<{
    avatar: string,
    name: string,
    role: string,
    description: string,
    rate: number,
    pCustomStyle?: string
}>();

</script>

<template>
    <div class="course-card">
        <div class="img-controller">
            <img :src="props.avatar" alt="Course Avatar" />
        </div>
        <div>
            <p :style="props.pCustomStyle" class="course-card-p">{{ props.description }}</p>
            <star-rating-bar :rate="props.rate"></star-rating-bar>
            <h5>{{ props.name }}</h5>
            <h6>{{ props.role }}</h6>
        </div>
    </div>
</template>

<style scoped>

.course-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--card-background-primary-color);
    width: 100%;
    padding: 25px 25px 0 25px;
}

.course-card .img-controller {
    /* I really don't like to force the height, but here it is necessary if
    you want all icons from CourseCard to have the same size independently of the image ratio */
    width: 128px;
    height: 128px;
}

.course-card .img-controller img {
    border-radius: 50%;
}

.course-card p, .course-card h6 {
    color: var(--dark-secondary-text-color);
}

.course-card p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.2px;
    text-align: center;
}

.course-card p:first-line {
    display: block;
    width: 100%;
}

.course-card h5 {
    color: var(--dark-primary-text-color);
}

.course-card > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    gap: 15px;
}

</style>