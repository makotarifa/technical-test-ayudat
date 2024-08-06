<script setup lang="ts">
import FmpCard from "@/components/FmpCard.vue";
import fmpcData from "@/data/fmpcData.json";
import { ref } from "vue";
import type { FMPCardEntity } from "@/models/FMPCardEntity";

const fmpcList = ref<FMPCardEntity[]>(fmpcData);
const cardWidth = "329px";
</script>

<template>
    <section class="first-most-popular">
        <div>
            <div>
                <h6>Practice Advice</h6>
                <h3>Most Popular Courses</h3>
                <p>Problems trying to resolve the conflict between</p>
                <p>the two major realms of Classical physics: Newtonian mechanics</p>
            </div>
            <div class="cards-container">
                    <fmp-card
                        v-for="fmpc in fmpcList"
                        :key="fmpc.title"
                        :title="fmpc.title"
                        :description="fmpc.description"
                        :image="fmpc.image"
                        :width="cardWidth"
                    />
            </div>
        </div>
    </section>
</template>

<style scoped>
.first-most-popular {
    display: flex;
    justify-content: center;
}

.first-most-popular > div {
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

.first-most-popular > div > div:nth-child(1) {
    padding: 45px 0;
}

.first-most-popular h3 {
    padding: 1rem 0;
}

.first-most-popular .cards-container{
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    align-items: center;
}


</style>