<script setup lang="ts">
</script>
<template>
    <footer>
        <div class="first-footer">
            <div class="first-footer-content">
                <div class="footer-section">
                    <h5>Company Info</h5>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Carrier</a></li>
                        <li><a href="#">We are hiring</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h5>Legal</h5>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Carrier</a></li>
                        <li><a href="#">We are hiring</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h5>Features</h5>
                    <ul>
                        <li><a href="#">Business Marking</a></li>
                        <li><a href="#">User Analytic</a></li>
                        <li><a href="#">Live Chat</a></li>
                        <li><a href="#">Unlimited Support</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h5>Resources</h5>
                    <ul>
                        <li><a href="#">IOS &amp; Android</a></li>
                        <li><a href="#">Watch a Demo</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">API</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h5>Get In Touch</h5>
                    <ul>
                        <li>
                            <div class="img-controller">
                                <img src="@/assets/images/icons/phone.svg">
                            </div>
                            <a href="#">(480) 555-0103</a>
                        </li>
                        <li>
                            <div class="img-controller">
                                <img src="@/assets/images/icons/location.svg">
                            </div>
                            <a href="#">4517 Washington Ave, Manchester, Kent</a>
                        </li>
                        <li>
                            <div class="img-controller">
                                <img src="@/assets/images/icons/email.svg">
                            </div>
                            <a href="">debra.holt@example.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="second-footer">
            <div class="second-footer-content">
                <p>AyudaT FrontEnd Technical Test by Ángel Jesús Morando Gallego</p>
                <div class="social-media-buttons">
                    <a>
                        <div class="img-controller">
                            <img src="@/assets/images/icons/facebook.svg">
                        </div>
                    </a>
                    <a>
                        <div class="img-controller">
                            <img src="@/assets/images/icons/instagram-outlined.svg">
                        </div>
                    </a>
                    <a>
                        <div class="img-controller">
                            <img src="@/assets/images/icons/twitter-outlined.svg">
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped>

.first-footer, .second-footer {
    padding: 0 1rem;
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


.first-footer-content {
    display: flex;
    justify-content: space-between;
    padding: 3rem 0;
    gap: 20px;
    width: 100%;
}

.first-footer-content h5 {
    text-align: start;
    font-weight: bold;
    color: var(--dark-primary-text-color);
    padding-bottom: 1rem;
}

.first-footer-content .img-controller {
    width: 24px;
}


.first-footer-content a {
    color: var(--dark-secondary-text-color);
    text-decoration: none;
}

.first-footer-content .footer-section ul{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
    padding: 0;
}

.first-footer-content .footer-section:last-of-type li{
    display: flex;
    gap: 10px;
    justify-content: center;
}

.second-footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2rem 0;
}

.second-footer-content p {
    color: var(--dark-secondary-text-color);
}

td .img-controller {
    margin: 0 0.8rem;
}

.second-footer-content .social-media-buttons {
    display: flex;
    gap: 20px;
}

.second-footer-content .social-media-buttons .img-controller {
    width: 24px;
}

@media (max-width: 768px) {
    .first-footer-content {
        flex-wrap: wrap;
        gap: 20px;
    }

    .first-footer-content

    .second-footer-content {
        padding: 1rem;
        flex-direction: column;
        gap: 20px;
    }

    .second-footer-content p {
        width: 100%;
        text-align: center;
        color: var(--dark-secondary-text-color);
    }

    .second-footer-content .social-media-buttons {
        padding: 1rem 0;
    }

    .second-footer-content > div {
        display: flex;
        width: 100%;
        justify-content: center;
    }
}


</style>