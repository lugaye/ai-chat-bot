require("dotenv").config({ path: __dirname + "/.env" });

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const { getAIResponse } = require("./chatbot");

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.post("/chat", async (req, res) => {
    const userMessage = req.body.message;
    if (!userMessage) {
        return res.status(400).json({ error: "Message is required" });
    }

    try {
        const botReply = await getAIResponse(userMessage);
        res.json({ reply: botReply });
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
