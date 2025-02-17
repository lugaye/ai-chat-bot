async function sendMessage() {
    const inputField = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const userMessage = inputField.value;

    if (!userMessage.trim()) return;

    chatBox.innerHTML += `<div><strong>You:</strong> ${userMessage}</div>`;
    inputField.value = '';

    const response = await fetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
    });

    const data = await response.json();
    chatBox.innerHTML += `<div><strong>Bot:</strong> ${data.reply}</div>`;
}
