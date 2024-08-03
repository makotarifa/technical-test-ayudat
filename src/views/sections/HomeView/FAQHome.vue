<script setup lang="ts">
import FAQCard from "@/components/FAQCard.vue";
import faqData from "@/data/faqData.json";
import { ref } from "vue";

interface FAQEntity {
    title: string;
    description: string;
}

const faqWidth = "333px";
const faqHeight = "151px";
const faqList = ref<FAQEntity[]>(faqData);

</script>

<template>
    <section class="faq">
        <div>
            <h3>FAQ</h3>
            <p>Problems trying to resolve the conflict between</p>
            <p>the two major realms of Classical physics: Newtonian mechanics</p>
        </div>
        <div class="faq-cards">
            <f-a-q-card
                v-for="(faq, index) in faqList"
                :key="index"
                :title="faq.title"
                :description="faq.description"
                :width="faqWidth"
                :height="faqHeight"
            ></f-a-q-card>
        </div>
    </section>
</template>

<style scoped>
.faq {
    color: var(--light-primary-text-color);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 80px 0;
    gap: 50px;
}

.faq > div:nth-child(1) {
    padding: 45px 0;
}

.faq h3 {
    padding: 1rem 0;
}

.faq-cards {
    width: 100%;
    max-width: 1060px;
    display: grid;
    justify-content: center;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, 333px);
    gap: 30px;
}
</style>