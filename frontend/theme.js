// frontend/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6a1b9a', // Purple color
    },
    secondary: {
      main: '#ab47bc', // Lighter purple
    },
    background: {
      default: '#f3e5f5', // Light purple background
    },
  },
});

export default theme;
