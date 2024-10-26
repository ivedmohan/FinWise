// pages/api/chat.js
export default function handler(req, res) {
    const { message } = req.body;
  
    // Simulate AI response (Replace this with actual AI model integration)
    const reply = `You said: ${message}`;
  
    res.status(200).json({ reply });
  }
  