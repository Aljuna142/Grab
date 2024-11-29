// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Primary color for main elements
    },
    secondary: {
      main: '#dc004e', // Secondary color for additional elements
    },
    chart: {
      colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'] // Example color palette for charts
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#f5f5f5', // Light gray background for cards
        },
      },
    },
    // Add more component styles if needed
  },
});

export default theme;
