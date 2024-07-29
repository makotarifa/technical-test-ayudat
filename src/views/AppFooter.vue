<script setup lang="ts">
import { NButton, NIcon } from "naive-ui";
</script>
<template>
    <footer>
        <div class="first-header-part">
            <table>
                <tbody>
                <tr>
                    <th>Company Info</th>
                    <th>Legal</th>
                    <th>Features</th>
                    <th>Resources</th>
                    <th>Get In Touch</th>
                </tr>
                <tr>
                    <td><a href="#">About us</a></td>
                    <td><a href="#">About us</a></td>
                    <td><a href="#">Business Marking</a></td>
                    <td><a href="#">IOS &amp; Android</a></td>
                    <td>
                        <n-button quaternary circle>
                            <template #icon>
                                <n-icon>
                                    <img src="@/assets/images/icons/phone.svg">
                                </n-icon>
                            </template>
                        </n-button>
                        <a href="#">(480) 555-0103</a></td>
                </tr>
                <tr>
                    <td><a href="#">Carrier</a></td>
                    <td><a href="#">Carrier</a></td>
                    <td><a href="#">User Analytic</a></td>
                    <td><a href="#">Watch a Demo</a></td>
                    <td>
                        <n-button quaternary circle>
                            <template #icon>
                                <n-icon>
                                    <img src="@/assets/images/icons/location.svg">
                                </n-icon>
                            </template>
                        </n-button>
                        <a href="#">4517 Washington Ave, Manchester, Kent</a></td>
                </tr>
                <tr>
                    <td><a href="#">We are hiring</a></td>
                    <td><a href="#">We are hiring</a></td>
                    <td><a href="#">Live Chat</a></td>
                    <td><a href="#">Customers</a></td>
                    <td>
                        <n-button quaternary circle>
                            <template #icon>
                                <n-icon>
                                    <img src="@/assets/images/icons/email.svg">
                                </n-icon>
                            </template>
                        </n-button>
                        <a href="#">debra.holt@example.com</a></td>
                </tr>
                <tr>
                    <td><a href="#">Blog</a></td>
                    <td><a href="#">Blog</a></td>
                    <td><a href="#">Unlimited Support</a></td>
                    <td><a href="#">API</a></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="second-header-part">
            <p>AyudaT FrontEnd Technical Test by Ángel Jesús Morando Gallego</p>
            <div>

            </div>
        </div>
    </footer>
</template>
<style scoped>
.first-header-part, .second-header-part {
    padding: 1rem 8rem;
}

.first-header-part {
    background-color: var(--footer-primary-color);
}

.first-header-part table {
    padding: 3rem 0;
    width: 100%;
}

.first-header-part table th {
    text-align: start;
    font-weight: bold;
    color: var(--primary-text-color);
    padding-bottom: 1rem;
}

.first-header-part table td {
    padding: 0.2rem 0;
}

.first-header-part a {
    color: var(--secondary-text-color);
    text-decoration: none;

}

.first-header-part tr td:nth-child(5) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}


.second-header-part {
    padding: 2rem 8rem;
    background-color: var(--footer-secondary-color);
}

.second-header-part p {
    color: var(--secondary-text-color);
}

</style>