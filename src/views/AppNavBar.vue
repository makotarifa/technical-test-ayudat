<script setup lang="ts">
import { RouterLink } from "vue-router";
import { NButton, NIcon } from "naive-ui";
</script>

<template>
    <nav>
        <h3>BrandName</h3>
        <div>
            <ul class="nav-left">
                <li>
                    <RouterLink to="/Home">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/Product">Product</RouterLink>
                </li>
                <li>
                    <RouterLink to="/Pricing">Pricing</RouterLink>
                </li>
                <li>
                    <RouterLink to="/Contact">Contact</RouterLink>
                </li>

            </ul>
            <div class="nav-right">
                    <RouterLink to="/login">Login</RouterLink>
                    <n-button size="large" icon-placement="right" color="#8D5CF6">
                        <template #icon>
                            <n-icon size="12">
                                <div class="img-controller">
                                    <img src="@/assets/images/icons/arrow-right.svg" alt="Right Arrow Icon" />
                                </div>
                            </n-icon>
                        </template>
                        JOIN US
                    </n-button>
            </div>
        </div>

    </nav>
</template>
<style scoped>
header {

}

nav {
    z-index: 1;
    position: sticky;
    top: 0;
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 8rem;
}

nav h3 {
    flex-grow: 1;
    color: #fff;
    font-size: 1.5rem;
    padding: 0 2rem;
}

nav > div {
    flex-grow: 9;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-left, .nav-right {
    flex-grow: 5;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
}

.nav-right {
    flex-grow: 1;
}

.nav-left li {
    margin: 0 0.5rem;
}

.nav-left a, .nav-right a {
    color: #fff;
    text-decoration: none;
    transition: 0.4s;
    padding: 0.4rem 0.8rem;
    border-radius: 0.25rem;
}

.nav-right a{
    margin: 0rem 2rem;
}

</style>