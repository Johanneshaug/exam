const express = require('express');
const cors = require('cors'); // You'll need to install this: npm install cors
const { GoogleGenerativeAI } = require("@google/generative-ai");
const nodemailer = require('nodemailer');

const app = express();
const port = 3001;

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Add this line to parse JSON bodies

const { google } = require('googleapis');

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

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'johannes749295420120580283642@gmail.com', // Replace with your Gmail address
    pass: 'xizd rzsq aezi txks' // Replace with your app password
  }
});

// Email counter and reset time
let emailCount = 0;
let lastResetTime = Date.now();
const DAILY_EMAIL_LIMIT = 1000;
const RESET_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// Function to reset email count
function resetEmailCount() {
  const currentTime = Date.now();
  if (currentTime - lastResetTime >= RESET_INTERVAL) {
    emailCount = 0;
    lastResetTime = currentTime;
  }
}

// Feedback route
app.post('/send-feedback', async (req, res) => {
  resetEmailCount(); // Check and reset if necessary

  if (emailCount >= DAILY_EMAIL_LIMIT) {
    return res.status(429).json({ error: 'Sorry, too many requests. Try again tomorrow.' });
  }

  const { feedbackText } = req.body;

  const mailOptions = {
    from: 'johannes749295420120580283642@gmail.com', // Replace with your Gmail address
    to: 'johanneshaug@t-online.de', // Replace with the email where you want to receive feedback
    subject: 'New Feedback from eXam App',
    text: feedbackText
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Feedback sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send feedback' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

