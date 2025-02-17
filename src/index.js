onst express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const chatbot = require('./chatbot');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/chat', async (req, res) => {
    const { message } = req.body;
    const response = await chatbot.getResponse(message);
    res.json({ reply: response });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
