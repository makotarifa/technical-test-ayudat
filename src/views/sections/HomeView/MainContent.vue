<script setup lang="ts">
import { NButton } from "naive-ui";

</script>

<template>
    <section class="main-content">
        <div>
            <div class="left-part">
                <div>
                    <h5>Join Us</h5>
                    <h1>25+ STUDENTS TRUST US</h1>
                    <h4>Every day brings with it a fresh set of learning possibilities</h4>
                    <div class="buttons">
                        <n-button size="large" color="#8D5CF6">Join Us</n-button>
                        <n-button style="color: var(--light-primary-text-color)" ghost size="large" color="#8D5CF6">Learn More</n-button>
                    </div>
                </div>
            </div>
            <div class="right-part">
                <div class="relative-container">
                    <div class="img-controller girl">
                        <img src="@/assets/images/girl.png">
                    </div>
                    <div class="img-controller graph">
                        <img src="@/assets/images/2019graph.png">
                    </div>
                    <div class="img-controller global-stats">
                        <img src="@/assets/images/global-stats.png">
                    </div>
                    <div class="img-controller stats-vector">
                        <img src="@/assets/images/icons/stats-vector.svg">
                    </div>
                    <div class="big">
                        <div class="circle-figure" ></div>
                    </div>
                    <div class="small">
                        <div class="circle-figure" ></div>
                    </div>
                    <div class="img-controller waves">
                        <img src="@/assets/images/icons/waves.svg">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
}
.main-content > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    max-width: 1440px;
    width: 100%;
}
.main-content .left-part,.right-part {
    width: 50%;
}

.main-content .left-part{
    display: flex;
    justify-content: start;
}

.main-content .left-part > div{
    display: flex;
    max-width: 575px;
    flex-direction: column;
    gap: 30px;
}

.main-content .left-part .buttons {
    display: flex;
    justify-content: start;
    gap: 10px;
}

.main-content .left-part h4{
    font-weight: 400;
}

.main-content .buttons .n-button {
    min-height: 52px;
    padding: 15px 40px;
}

.main-content .relative-container {
    display: flex;
    align-items: center;
    justify-content: end;
    position: relative;
    width: 100%;
    max-width: 704px;
    height: 682px;
}

.main-content .relative-container > div{
    position: absolute;
}

.main-content .girl {
    padding: 2rem 2rem 2rem 4rem;
    width: 100%;
    z-index: 2;
}

.main-content .relative-container .img-controller {
    z-index: 3;
}

.main-content .global-stats {
    top: 70.5%;
    left: 55%;
    width: 45%;
    height: auto;
    max-width: 261px;
    max-height: 243px;
}

.main-content .graph {
    top: 13%;
    left: 0%;
    max-height: 214px;
    max-width: 214px;
    width: 40%;
    height: auto;
}

.main-content .stats-vector{
    background-color: #0072F9;
    padding: 0.8rem;
    border-radius: 6px;
    rotate: -60deg;
    top: 75%;
    left: 16%;
}

.main-content .circle-figure{
    z-index: 4;
    border-radius: 50%;
    background-color: #FC724D;
    width: 100%;
    height: 100%;
}

.main-content .big{
    top: 30%;
    left: 17%;
    width: 60%;
    height: auto;
    aspect-ratio: 1 / 1;

    max-width: 420px;
    max-height: 420px;
}

.main-content .small{
    z-index: 1;
    top: 60%;
    left: 13%;
    width: 5%;
    aspect-ratio: 1/1;
    height: auto;
    max-width: 14px;
    max-height: 14px;
}

.main-content .stats-vector img{
    rotate: 60deg;
}

.main-content .relative-container .waves {
    z-index: 1;
    top: 52%;
    right: 18%;
    width: 30%;
    height: 30%;
    max-width: 100px;
    max-height: 90px;
}

@media (max-width: 1200px) {
    .main-content > div {
        flex-direction: column;

    }

    .main-content .left-part, .right-part {
        display: flex;
        justify-content: center;
        padding: 0 1rem;
        width: 100%;
    }


}

@media (max-width: 700px) {

    .main-content .big{
        top: 37%;
        left: 19%;
        width: 58%;
        height: auto;
        aspect-ratio: 1 / 1;

        max-width: 420px;
        max-height: 420px;
    }

    .main-content .small{
        z-index: 1;
        top: 60%;
        left: 14%;
        width: 2%;
        aspect-ratio: 1/1;
        height: auto;
        max-width: 14px;
        max-height: 14px;
    }

    .main-content .global-stats {
        top: 64.5%;
        left: 55%;
        width: 35%;
        height: auto;
        max-width: 261px;
        max-height: 243px;
    }

    .main-content .graph {
        top: 27%;
        left: 4%;
        max-height: 214px;
        max-width: 214px;
        width: 27%;
        height: auto;
    }

    .main-content .stats-vector{
        background-color: #0072F9;
        padding: 0.4rem;
        border-radius: 6px;
        rotate: -60deg;
        height: auto;
        width: 10%;
        max-width: 80px;
        top: 65%;
        left: 16%;
    }
}



</style>