// frontend/layout.tsx
import React, { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import the custom theme

// Define the props type
interface LayoutProps {
  children: ReactNode; // Specify that children can be any valid React node
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default Layout;
