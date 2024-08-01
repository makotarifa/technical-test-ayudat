<script setup lang="ts">
import { useNewsletterStore } from "@/stores/newsletterStore";

const newsletterStore = useNewsletterStore();

</script>

<template>
    <section class="newsletter">
        <div>
            <h6>Newsletter</h6>
            <h3>Get Quality Education</h3>
            <p>Problems trying to resolve the conflict between</p>
            <p>the two major realms of Classical physics: Newtonian mechanics</p>
        </div>

        <form class="email-form" @submit.prevent="newsletterStore.handleSubmit">
            <div>
                <input type="email" v-model="newsletterStore.email" placeholder="Your Email" required />
                <button type="submit">Subscribe</button>
            </div>
        </form>
    </section>
</template>

<style scoped>
.newsletter {
    color: var(--light-primary-text-color);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 160px 0;
    gap: 80px;
}

.newsletter h3 {
    padding: 1rem 0;
}

.newsletter > div:nth-child(1) {
}

.email-form {
    width: 100%;
}

.email-form div {
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.email-form input, .email-form button {
    padding: 1rem;
    border: 1px solid var(--color-border);
    height: 58px;
    flex-grow: 1;
}

.email-form input {
    border-radius: 0.5rem 0 0 0.5rem;
    max-width: 571px;
}

.email-form button {
    border-radius: 0 0.5rem 0.5rem 0;
    background-color: var(--button-primary-color);
    color: var(--light-primary-text-color);
    width: 100%;
    max-width: 117px;
    transition: background-color 0.3s ease;
}

.email-form button:hover, .email-form button:focus {
    background-color: var(--button-hover-primary-color);
}

.email-form button:active {
    background-color: var(--button-active-primary-color);
}


</style>
