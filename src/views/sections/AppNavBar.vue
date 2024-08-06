<script setup lang="ts">
import { RouterLink } from "vue-router";
import { NButton, NDropdown } from "naive-ui";
import { onBeforeUnmount, onMounted, ref } from "vue";

const isDropdownVisible = ref(false);

const maxWidthForDropdown = 930;

const menuOptions = [
    {
        label: "Home",
        key: "home",
        path: "/"
    },
    {
        label: "Product",
        key: "product",
        path: "/"
    },
    {
        label: "Pricing",
        key: "pricing",
        path: "/"
    },
    {
        label: "Contact",
        key: "contact",
        path: "/"
    },
    {
        label: "Login",
        key: "login",
        path: "/"
    },
    {
        label: "Join Us",
        key: "join-us",
        path: "/"
    }
];

const handleMenuClick = (key: any) => {
    const selectedOption = menuOptions.find(option => option.key === key);
    if (selectedOption) {
        window.location.href = selectedOption.path;
    }
};

const checkDropdownVisibility = () => {
    isDropdownVisible.value = window.innerWidth <= maxWidthForDropdown;
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
    <nav class="nav-bar">
        <div class="nav-controller">
            <h3>BrandName</h3>
            <div>
                <div v-if="!isDropdownVisible" class="nav-left">
                    <ul>
                        <li>
                            <RouterLink to="/">Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/">Product</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/">Pricing</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/">Contact</RouterLink>
                        </li>
                    </ul>
                </div>
                <div v-if="!isDropdownVisible" class="nav-right">
                    <RouterLink to="/">Login</RouterLink>
                    <n-button style="padding: 15px 25px; min-height: 52px" size="large" icon-placement="right" color="#8D5CF6">
                        <template #icon>
                            <div class="img-controller">
                                <img src="../../assets/images/icons/arrow-right.svg" alt="Right Arrow Icon" />
                            </div>
                        </template>
                        JOIN US
                    </n-button>
                </div>
                <div v-else>
                    <n-dropdown :options="menuOptions" @select="handleMenuClick">
                        <n-button size="large" icon-placement="right" color="#8D5CF6">
                            <template #icon>
                                <div class="img-controller menu-icon">
                                    <img src="../../assets/images/icons/menu-icon.svg" alt="Menu Icon" />
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
nav {
    display: flex;
    justify-content: center;
    align-items: center;
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
    padding-right: 4rem;
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
    padding: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
    gap: 21px;
}

.nav-right{
    gap: 45px;
    padding-right: 5rem;
}

.nav-left li {
    margin: 0 0.5rem;
}

.nav-left a, .nav-right a {
    color: #fff;
    text-decoration: none;
    transition: 0.4s;
    border-radius: 0.25rem;
}

@media (max-width: 930px) {
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