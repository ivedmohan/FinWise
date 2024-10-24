// src/Chatbot.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Chatbot = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Chatbot
      </Typography>
      <Typography variant="body1">
        Welcome to the chatbot! How can I assist you today?
      </Typography>
      {/* Chatbot implementation would go here */}
    </Container>
  );
};

export default Chatbot;
