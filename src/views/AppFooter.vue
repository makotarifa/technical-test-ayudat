<script setup lang="ts">
import { NButton, NIcon } from "naive-ui";
</script>
<template>
    <footer>
        <div class="first-footer">
            <div class="first-footer-content">
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
                            <div class="img-controller">
                                <img src="@/assets/images/icons/phone.svg">
                            </div>
                            <a href="#">(480) 555-0103</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Carrier</a></td>
                        <td><a href="#">Carrier</a></td>
                        <td><a href="#">User Analytic</a></td>
                        <td><a href="#">Watch a Demo</a></td>
                        <td>
                            <div class="img-controller">
                                <img src="@/assets/images/icons/location.svg">
                            </div>
                            <a href="#">4517 Washington Ave, Manchester, Kent</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">We are hiring</a></td>
                        <td><a href="#">We are hiring</a></td>
                        <td><a href="#">Live Chat</a></td>
                        <td><a href="#">Customers</a></td>
                        <td>
                            <div class="img-controller">
                                <img src="@/assets/images/icons/email.svg">
                            </div>
                            <a href="">debra.holt@example.com</a></td>
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
        </div>
        <div class="second-footer">
            <div class="second-footer-content">
                <p>AyudaT FrontEnd Technical Test by Ángel Jesús Morando Gallego</p>
                <div>
                    <n-button quaternary circle>
                        <template #icon>
                            <n-icon>
                                <img src="@/assets/images/icons/facebook.svg">
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button quaternary circle>
                        <template #icon>
                            <n-icon>
                                <img src="@/assets/images/icons/instagram-outlined.svg">
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button quaternary circle>
                        <template #icon>
                            <n-icon>
                                <img src="@/assets/images/icons/twitter-outlined.svg">
                            </n-icon>
                        </template>
                    </n-button>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped>
.first-footer, .second-footer {
    display: flex;
    justify-content: center;
}

.first-footer {
    background-color: var(--footer-primary-color);
}

.second-footer {
    background-color: var(--footer-secondary-color);
}

.first-footer-content, .second-footer-content {
    max-width: 1050px;
    width: 100%;
}


.first-footer-content table {
    padding: 3rem 0;
    width: 100%;
}

.first-footer-content table th {
    text-align: start;
    font-weight: bold;
    color: var(--dark-primary-text-color);
    padding-bottom: 1rem;
}

.first-footer-content table td {
    padding: 0.2rem 0;
}

.first-footer-content a {
    color: var(--dark-secondary-text-color);
    text-decoration: none;

}

.first-footer-content tr td:nth-child(5) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}


.second-footer-content {
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
}

.second-footer-content p {
    color: var(--dark-secondary-text-color);
}

td .img-controller {
    margin: 0 0.8rem;
}


</style>