function toggleChat() {
    let chatbox = document.getElementById("chatbox");
    chatbox.style.display = chatbox.style.display === "flex" ? "none" : "flex";
}

async function sendMessage() {
    let inputField = document.getElementById("user-input");
    let message = inputField.value.trim();
    if (message === "") return;

    let chatBody = document.getElementById("chat-body");

    // Append User Message
    let userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.textContent = message;
    chatBody.appendChild(userMessage);

    inputField.value = ""; // Clear input

    // Send message to backend
    try {
        let response = await fetch("http://localhost:5000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message }),
        });

        let data = await response.json();
        let botMessage = document.createElement("div");
        botMessage.classList.add("bot-message");
        botMessage.textContent = data.reply;
        chatBody.appendChild(botMessage);
        chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll
    } catch (error) {
        console.error("Error:", error);
    }
}
