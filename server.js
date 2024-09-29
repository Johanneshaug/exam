const express = require('express');
const cors = require('cors'); // You'll need to install this: npm install cors

const app = express();
const port = 3001;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Add this line to parse JSON bodies

const { google } = require('googleapis');

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyC1eJ3XhBZHqHSC9NnYM37uRGve1XYor7M");

// Function to interact with Gemini API
async function runGemini(prompt) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}
// Example route using Gemini
app.get('/gemini', async (req, res) => {
  try {
    const prompt = req.query.prompt || "Hello, Gemini!";
    const response = await runGemini(prompt);
    res.json({ response });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

app.post('/gemini', async (req, res) => {
  try {
    const prompt = req.body.prompt || "Hello, Gemini!";
    const response = await runGemini(prompt);
    res.json({ response });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

