// frontend/app/chatbot/page.tsx
'use client'; // Indicate that this is a client component
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, AppBar, Toolbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Import CloseIcon
import axios from 'axios'; // For making API requests

const ChatbotPage = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [isOpen, setIsOpen] = useState(true); // Manage chatbot visibility

  const handleSend = async () => {
    if (!input) return;

    // Add user message
    const userMessage = { sender: 'User', text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      // Make a request to your AI model API endpoint
      const response = await axios.post('/api/chat', { message: input });
      const botMessage = { sender: 'Bot', text: response.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
    }

    setInput('');
  };

  return (
    <Box 
      sx={{ 
        height: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        backgroundColor: '#f3e5f5' // Light purple background
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: '#6a1b9a' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            FinWise
          </Typography>
          <IconButton edge="end" color="inherit" onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Paper 
        elevation={3} 
        sx={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          padding: 2, 
          bgcolor: '#ffffff', // White background for chat area
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' // Soft shadow
        }}
      >
        <Typography variant="h6" gutterBottom>
          Chat with FinWise
        </Typography>
        <Box sx={{ 
          flex: 1, 
          overflowY: 'auto', 
          mb: 2 
        }}>
          {messages.map((msg, index) => (
            <Typography 
              key={index} 
              variant="body2" 
              align={msg.sender === 'Bot' ? 'left' : 'right'} 
              sx={{
                bgcolor: msg.sender === 'Bot' ? '#e1bee7' : '#d1c4e9', // Bot messages in light purple, user in lighter purple
                borderRadius: '8px',
                padding: '5px 10px',
                margin: '5px 0',
                maxWidth: '80%',
                wordWrap: 'break-word',
              }}
            >
              <strong>{msg.sender}:</strong> {msg.text}
            </Typography>
          ))}
        </Box>
        <Box sx={{ display: 'flex' }}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()} // Send on Enter key
            sx={{
              borderRadius: '20px',
              bgcolor: '#fff', // White input field
            }}
          />
          <Button 
            variant="contained" 
            sx={{ ml: 1, bgcolor: '#ab47bc', '&:hover': { bgcolor: '#9c27b0' } }} // Darker on hover
            onClick={handleSend}
          >
            Send
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ChatbotPage;
