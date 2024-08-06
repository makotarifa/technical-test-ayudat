import { ref } from "vue";
import { defineStore } from "pinia";
import type { EmailRequest } from "@/models/EmailRequest";
import { submitCall } from "@/api/apiCalls";

export const useNewsletterStore = defineStore("newsletter", {
    state: () => ({
        email: ref(""),
        isSubscribed: ref(false),
        isFailed: ref(false)
    }),
    getters: {
        getIsSubscribed: (state) => state.isSubscribed,
        getIsFailed: (state) => state.isFailed
    },
    actions: {
        setIsSubscribed(status: boolean) {
            this.isSubscribed = status;
        },
        setIsFailed(status: boolean) {
            this.isFailed = status;
        },
        resetStore() {
            this.isFailed = false;
            this.isSubscribed = false;
        },
        async handleSubmit() {
            const request: EmailRequest = { email: this.email };
            try {
                const response = await submitCall(request);
                if (response.status === 200) {
                    this.setIsSubscribed(true);
                    this.setIsFailed(false);
                } else if (response.status === 400) {
                    this.setIsSubscribed(false);
                    this.setIsFailed(true);
                }
            } catch (error) {
                this.setIsSubscribed(false);
                this.setIsFailed(true);
            }
        }
    }
});