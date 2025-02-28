require("dotenv").config();
const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, 
});

async function getAIResponse(userMessage) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [{ role: "system", content: "You are an AI chatbot." }, { role: "user", content: userMessage }],
            max_tokens: 50,
            temperature: 0.7,
        });

        return response.choices[0].message.content.trim();
    } catch (error) {
        console.error("Error getting AI response:", error);
        return "Sorry, I couldn't process that request.";
    }
}

module.exports = { getAIResponse };
