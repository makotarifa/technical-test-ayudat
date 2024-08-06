<script setup lang="ts">
import { NButton } from "naive-ui";
</script>

<template>
    <section class="our-popular-courses">
        <div>
            <div class="left-part">
                <div class="relative-container">
                    <div class="img-controller girl">
                        <img src="../../../assets/images/girl-technology.png">
                    </div>
                    <div class="img-controller white-background surprised">
                        <img src="../../../assets/images/surprised-emoji.png">
                    </div>
                    <div class="img-controller white-background check">
                        <img src="../../../assets/images/green-check.png">
                    </div>
                    <div class="img-controller stats">
                        <img src="../../../assets/images/stats.png">
                    </div>
                    <div class="img-controller scores">
                        <img src="../../../assets/images/latest-scores.png">
                    </div>
                    <div class="img-controller white-background circled applause">
                        <img src="../../../assets/images/applause-emoji.png">
                    </div>
                    <div class="inverted-triangle"></div>

                </div>
            </div>
            <div class="right-part">
                <div>
                    <hr class="line-separator" />
                    <h2>Our Popular Courses</h2>
                    <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian
                        mechanics</p>
                    <n-button text class="learn-more-btn" size="large" round icon-placement="right" ghost color="#8D5CF6">
                        <template #icon>
                            <div class="img-controller">
                                <img class="img" src="../../../assets/images/icons/small-arrow-right.svg">
                            </div>
                        </template>
                        <h6>Learn More</h6>
                    </n-button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.our-popular-courses {
    display: flex;
    justify-content: center;
    padding: 0 2rem;
}

.our-popular-courses > div {
    display: flex;
    max-width: 1045px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 160px 0;
}

.our-popular-courses h2 {
    color: var(--light-primary-text-color);
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    letter-spacing: 0.2px;
}

.our-popular-courses .white-background {
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 7px;
    width: 35px;
    padding: 0.5rem;
}

.our-popular-courses p {
    color: var(--light-primary-text-color);
    line-height: 20px;
    letter-spacing: 0.2px;
}

.our-popular-courses .circled {
    border-radius: 50%;
}

.our-popular-courses .left-part {
    width: 100%;
}

.our-popular-courses .relative-container {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 556px;
    height: 472px;
}

.our-popular-courses .relative-container .img-controller, .inverted-triangle {
    position: absolute;
}

.our-popular-courses .girl {
    width: 100%;
    z-index: 1;
}

.our-popular-courses .relative-container .img-controller {
    z-index: 2;
}


.our-popular-courses .surprised {
    top: 31%;
    left: 76%;
}

.our-popular-courses .check {
    top: 57%;
    left: 10%;
}

.our-popular-courses .stats {
    top: 41.5%;
    left: 55.5%;
}

.our-popular-courses .scores {
    top: 73%;
}

.our-popular-courses .applause {
    top: 78%;
    left: 74%;
}

.our-popular-courses .inverted-triangle {
    top: 13%;
    left: 12.75%;
    width: 80%;
    height: auto;
    max-width: 423px;
    max-height: 423px;
    aspect-ratio: 1/1;
    background-color: var(--figure-primary-color);
    clip-path: polygon(50% 90%, 10% 10%, 90% 10%);
}

.right-part{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    width: 100%;
}

.right-part > div{
    display: flex;
    gap: 35px;
    flex-direction: column;
    width: 100%;
    max-width: 380px;
    align-items: start;
}

.right-part hr {
    width: 94px;
    height: 7px;
    background-color: var(--line-separator-primary-color);
    border: var(--line-separator-primary-color);
}


@media (max-width: 870px) {
    .our-popular-courses > div {
        flex-direction: column;
        gap: 50px;
    }

    .our-popular-courses .right-part {
        width: 100%;
        align-items: center;
    }

    .our-popular-courses .right-part h2 {
        text-align: center;
    }

    .our-popular-courses .right-part p {
        text-align: center;
        max-width: 450px;
        padding: 1rem 0;
    }

    .our-popular-courses .left-part {
        display: flex;
        justify-content: center;
    }


}


</style>