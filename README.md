# AI Chatbot with Node.js and OpenAI API

This is a simple AI chatbot built using Node.js, Express, and OpenAI's GPT API, with a front-end powered by HTML, CSS, and vanilla JavaScript.

---

## Project Structure

```
ai-chatbot/
│
├── src/
│   ├── index.js         # Entry point for Node.js server
│   ├── chatbot.js       # AI integration logic with OpenAI API
│   ├── .env             # Environment variables (OpenAI API key)
│
├── public/
│   ├── index.html       # Front-end HTML file
│   ├── styles.css       # Front-end CSS styling
│   └── script.js        # Front-end JavaScript for chat interaction
│
├── README.md             # Project documentation
├── package.json          # Node.js dependencies and scripts
```

---

## Features
✅ Chat with an AI using OpenAI's GPT-3 or GPT-4.
✅ Full-stack project with Node.js back-end and HTML/CSS/JavaScript front-end.
✅ Clean and responsive UI for the chatbot.
✅ Environment variables for sensitive data.

---

## Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- [NPM](https://www.npmjs.com/get-npm)

---

## Installation

1️⃣ **Clone the repository:**
```bash
git clone https://github.com/lugaye/ai-chat-bot.git
cd ai-chat-bot
```

2️⃣ **Install dependencies:**
```bash
npm install
```

3️⃣ **Set up environment variables:**
- Create a `.env` file in the `src/` folder.
- Get your OpenAI API key from https://openai.com/index/openai-api/ and place it in the env:
```
OPENAI_API_KEY=your_openai_api_key_here
```

---

## Running the Project

1️⃣ **Start the server:**
```bash
node src/index.js
```

2️⃣ **Open your browser:**
- Go to `http://localhost:5000`.

---

## Usage

1. Type a message in the input field.
2. Click "Send" or press Enter.
3. The chatbot will respond with a reply generated by OpenAI's GPT model.

---

## Example API Response

```json
{
  "reply": "Hello! How can I help you today?"
}
```
---

## Technologies Used

- Node.js
- Express.js
- OpenAI GPT-3/GPT-4
- HTML5
- CSS3
- JavaScript (Vanilla)

---

## Troubleshooting

✅ **CORS Issues:**
- Make sure the server allows cross-origin requests.

✅ **API Key Errors:**
- Ensure your OpenAI API key is valid and has enough quota.

✅ **Server Errors:**
- Check the terminal output for errors when running `node src/index.js`.

---

## Acknowledgements

- [OpenAI](https://openai.com) for the amazing GPT API.
- [Node.js](https://nodejs.org) and [Express](https://expressjs.com) for back-end development.

---

✨ **Happy Coding!** 🚀
