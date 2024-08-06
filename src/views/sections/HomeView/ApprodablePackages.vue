<script setup lang="ts">
import { ref, onMounted } from "vue";
import PackageCard from "@/components/PackageCard.vue";
import packagesData from "@/data/packagesData.json";
import type { PackageEntity } from "@/models/PackageEntity";

const packagesList = ref<PackageEntity[]>(packagesData);
</script>

<template>
    <section class="approdable-packages">
        <div>
            <div>
                <h6>Practice Advice</h6>
                <h3>Approdable Packages</h3>
                <p>Problems trying to resolve the conflict between</p>
                <p>the two major realms of Classical physics: Newtonian mechanics</p>
            </div>
            <div class="package-cards">
                <package-card
                    v-for="(packageEntity, index) in packagesList"
                    :key="index"
                    :title="packageEntity.title"
                    :rate="packageEntity.rate"
                    :sales="packageEntity.sales"
                    :oldPrice="packageEntity.oldPrice"
                    :newPrice="packageEntity.newPrice"
                    :image="packageEntity.image"
                    :description="packageEntity.description"
                />
            </div>
        </div>
    </section>
</template>

<style scoped>
.approdable-packages {
    display: flex;
    justify-content: center;
    padding: 0 1rem;
}

.approdable-packages > div {
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

.approdable-packages > div > div:nth-child(1) {
    padding: 45px 0;
}

.approdable-packages h3 {
    padding: 1rem 0;
}

.package-cards {
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

</style>