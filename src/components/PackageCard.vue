<script setup lang="ts">
import { NIcon, NButton, NTag } from "naive-ui";

const props = defineProps({
    title: String,
    description: String,
    rate: Number,
    sales: Number,
    oldPrice: Number,
    newPrice: Number,
    image: String
});
</script>

<template>
    <div class="package-card">
        <div class="top-part" :style="{ backgroundImage: `url(${props.image})` }">
            <div>
                <n-tag class="top-tag" style="font-weight: 600" :bordered="false" :color="{ color: 'var(--card-tag-primary-color)', textColor: 'var(--light-primary-text-color)', borderColor: 'var(--card-tag-primary-color)' }">
                    <h6>Sale</h6>
                </n-tag>
            </div>
            <div class="top-part-buttons">
                <n-button color="#FFF" circle>
                    <template #icon>
                        <div class="img-controller">
                            <img src="@/assets/images/icons/heart.svg">
                        </div>
                    </template>
                </n-button>
                <n-button color="#FFF" circle>
                    <template #icon>
                        <div class="img-controller">
                            <img src="@/assets/images/icons/shop-cart.svg">
                        </div>
                    </template>
                </n-button>
                <n-button color="#FFF" circle>
                    <template #icon>
                        <div class="img-controller">
                            <img src="@/assets/images/icons/eye.svg">
                        </div>
                    </template>
                </n-button>
            </div>
        </div>
        <div class="bottom-part">
            <div>
                <a>Welcome</a>
                <n-tag class="rate" round :bordered="false" :color="{ color: 'var(--color-background)', textColor: 'var(--light-primary-text-color)', borderColor: 'var(--card-tag-primary-color)' }">
                    <div>{{ props.rate }}</div>
                    <template #icon>
                        <n-icon size="16">
                            <div class="img-controller">
                                <img src="@/assets/images/icons/star.svg" alt="star" />
                            </div>
                        </n-icon>
                    </template>
                </n-tag>
            </div>
            <h5>{{ props.title }}</h5>
            <p>{{ props.description }}</p>
            <div class="sales">
                <div class="img-controller">
                    <img src="../assets/images/icons/sales-icon.svg">
                </div>
                <h6>{{ props.sales }} Sales</h6>
            </div>
            <div class="prices">
                <h5>${{ props.oldPrice }}</h5>
                <h5>${{ props.newPrice }}</h5>
            </div>
            <div>
                <n-button style="padding: 10px 20px" class="learn-more-btn" size="large" round icon-placement="right" ghost color="#8D5CF6">
                    <template #icon>
                        <div class="img-controller">
                            <img class="img" src="@/assets/images/icons/small-arrow-right.svg">
                        </div>
                    </template>
                    <h6>Learn More</h6>
                </n-button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.package-card {
    display: flex;
    flex-direction: column;
    background-color: var(--card-background-primary-color);
}
.package-card .top-part {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 300px;
    padding: 20px;
}
.package-card .top-part div:nth-child(1) {
    display: flex;
    justify-content: start;
}
.package-card .top-tag {
    padding: 0 10px;
    box-shadow: 0px 2px 4px 0px #0000001A;
}
.package-card .top-tag h6 {
    color: var(--light-primary-text-color);
}
.package-card .bottom-part {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 25px 25px 35px 25px;
    text-align: start;
}
.package-card .bottom-part .img-controller {
    width: 16px;
}
.package-card .bottom-part .prices, .package-card .bottom-part .sales {
    display: flex;
    justify-content: start;
}
.bottom-part div:nth-child(1) {
    display: flex;
    justify-content: space-between;
}
.package-card .bottom-part a {
    font-weight: 700;
    color: var(--link-primary-color);
}
.package-card .bottom-part h5 {
    color: var(--dark-primary-text-color);
    font-weight: 700;
}
.package-card .bottom-part p {
    color: var(--dark-secondary-text-color);
}
.package-card .bottom-part .sales {
    gap: 10px;
}
.package-card .bottom-part .sales h6 {
    color: var(--dark-secondary-text-color);
}
.package-card .bottom-part .prices {
    gap: 5px;
}
.package-card .bottom-part .prices h5:nth-child(1) {
    color: var(--dark-secondary-text-color);
}
.package-card .bottom-part .prices h5:nth-child(2) {
    color: var(--orange-text-color);
}
.package-card .rate div {
    font-size: 12px;
}
.package-card .learn-more-btn .img-controller {
    width: 9px;
}

.package-card .top-part-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.package-card .top-part-buttons .img-controller {
    width: 20px;
}

</style>