// src/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          FinWise
        </Typography>
        <Button color="inherit" onClick={() => navigate('/login')}>
          Login
        </Button>
        <Button color="inherit" onClick={() => navigate('/signup')}>
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
