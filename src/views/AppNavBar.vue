<script setup lang="ts">
import { RouterLink } from "vue-router";
import { NButton, NDropdown } from "naive-ui";
import { onBeforeUnmount, onMounted, ref } from "vue";

const isDropdownVisible = ref(false);

const menuOptions = [
    {
        label: "Home",
        key: "home",
        path: "/"
    },
    {
        label: "Product",
        key: "product",
        path: "/Product"
    },
    {
        label: "Pricing",
        key: "pricing",
        path: "/Pricing"
    },
    {
        label: "Contact",
        key: "contact",
        path: "/Contact"
    },
    {
        label: "Login",
        key: "login",
        path: "/login"
    }
];

const handleMenuClick = (key) => {
    const selectedOption = menuOptions.find(option => option.key === key);
    if (selectedOption) {
        window.location.href = selectedOption.path;
    }
};

const checkDropdownVisibility = () => {
    const navController = document.querySelector(".nav-controller");
    if (navController) {
        isDropdownVisible.value = navController.clientWidth < 768;
    }
};

onMounted(() => {
    window.addEventListener("resize", checkDropdownVisibility);
    checkDropdownVisibility();
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", checkDropdownVisibility);
});

</script>

<template>
    <nav>
        <div class="nav-controller">
            <h3>BrandName</h3>
            <div>
                <div v-if="!isDropdownVisible" class="nav-left">
                    <ul>
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
                </div>
                <div v-if="!isDropdownVisible" class="nav-right">
                    <RouterLink to="/login">Login</RouterLink>
                    <n-button size="large" icon-placement="right" color="#8D5CF6">
                        <template #icon>
                            <div class="img-controller">
                                <img src="@/assets/images/icons/arrow-right.svg" alt="Right Arrow Icon" />
                            </div>
                        </template>
                        JOIN US
                    </n-button>
                </div>
                <div v-else>
                    <n-dropdown :options="menuOptions" @select="handleMenuClick">
                        <n-button size="large" icon-placement="right" color="#8D5CF6">
                            <template #icon>
                                <div class="img-controller">
                                    <img src="@/assets/images/icons/star.svg" alt="Menu Icon" />
                                </div>
                            </template>
                            Menu
                        </n-button>
                    </n-dropdown>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
header {

}

nav {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    position: sticky;
    top: 0;
    backdrop-filter: blur(10px);
    height: 91px;
    width: 100%;
    padding: 0 2rem;
}

nav h3 {
    color: #fff;
    font-size: 24px;
    letter-spacing: 0.1px;
    line-height: 32px;
    text-align: start;
}

.nav-controller {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    max-width: 1322px;
}

.nav-controller > div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
}

.nav-left > ul, .nav-right {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
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

.nav-right a {
    margin: 0 2rem;
}

@media (max-width: 768px) {
    .nav-left, .nav-right {
        display: none;
    }

    .nav-controller > div {
        display: flex;
        justify-content: flex-end;
    }

    .nav-controller > div > div {
        display: flex;
    }
}
</style>