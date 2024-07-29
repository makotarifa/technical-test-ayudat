import type { EmailRequest } from "@/models/EmailRequest";

const apiURL = import.meta.env.VITE_API_URL;

export const submitCall = async (email: EmailRequest) => {
    try {
        const response = await fetch(`${apiURL}/api/email-request`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(email)
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        console.log("Success:", response);
        return response;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};