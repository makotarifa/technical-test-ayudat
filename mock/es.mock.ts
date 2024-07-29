import { MockHandler } from "vite-plugin-mock-server";

const mocks: MockHandler[] = [
    {
        pattern: "/api/email-request",
        method: "POST",
        handle: (req, res) => {
            console.log("Mock handler called"); // Add logging to confirm handler is called
            res.setHeader("Content-Type", "application/json");

            req.on("data", (bodyString: string) => {
                const body = JSON.parse(bodyString);
                const email = body.email;

                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    res.statusCode = 400;
                    res.end(JSON.stringify({ error: "Invalid email" }));
                } else {
                    res.statusCode = 200;
                    res.end(JSON.stringify({ message: "Email subscribed" }));
                }
                res.end();
            });
        }
    }
];

export default mocks;