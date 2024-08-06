<script setup lang="ts">
import courseData from "@/data/coursesData.json";
import CourseCard from "@/components/CourseCard.vue";
import { ref } from "vue";

interface CourseEntity {
    avatar: string;
    name: string;
    role: string;
    description: string;
    rate: number;
}

const popularList = ref<CourseEntity[]>(courseData);

const firstCardParagraphStyle = "max-width: 307px;";
const secondCardParagraphStyle = "max-width: 159px;";
</script>

<template>
    <section class="popular">
        <div>
            <div>
                <h6>Practice Advice</h6>
                <h3>Most Popular Courses</h3>
                <p>Problems trying to resolve the conflict between</p>
                <p>the two major realms of Classical physics: Newtonian mechanics</p>
            </div>
            <div class="popular-cards">
                <course-card
                    v-for="(popular, index) in popularList"
                    :key="index"
                    :avatar="popular.avatar"
                    :name="popular.name"
                    :role="popular.role"
                    :description="popular.description"
                    :rate="popular.rate"
                    :pCustomStyle="index === 1 ? secondCardParagraphStyle : firstCardParagraphStyle "
                ></course-card>
            </div>
        </div>
    </section>
</template>

<style scoped>
.popular {
    display: flex;
    justify-content: center;
}

.popular > div {
    color: var(--light-primary-text-color);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 160px 0;
    gap: 96px;
    max-width: 1050px;
}

.popular > div > div:nth-child(1) {
    padding: 45px 0;
}

.popular h3 {
    padding: 1rem 0;
}

.popular-cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 0 20px;

    border-left: 1px solid var(--color-border);
    border-right: 1px solid var(--color-border);
}

.popular-cards > .course-card:nth-of-type(1) {
    margin: 15px 0;
}

.popular-cards > .course-card:nth-of-type(2) p {
    background-color: #8D5CF6;
}

@media (max-width: 1050px) {
    .popular-cards {
        grid-template-columns: 1fr;
    }

    .popular-cards > .course-card:nth-of-type(1) {
        margin: 0;
    }
}

</style>