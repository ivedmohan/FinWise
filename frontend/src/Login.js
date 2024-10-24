// src/Login.js
import React, { useState } from 'react';
import { supabase } from './supabaseClient';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.log('Error logging in:', error.message);
    } else {
      console.log('User logged in:', data.user);
      navigate('/chatbot'); // Redirect to chatbot after login
    }
  };

  const handleGoogleLogin = async () => {
    const { user, error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
    if (error) {
      console.log('Error logging in with Google:', error.message);
    } else {
      console.log('User logged in with Google:', user);
      navigate('/chatbot'); // Redirect to chatbot after Google login
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
        <Button 
          variant="outlined" 
          color="primary" 
          fullWidth 
          onClick={handleGoogleLogin} 
          style={{ marginTop: '16px' }}
        >
          Login with Google
        </Button>
      </form>
    </Container>
  );
};

export default Login;
