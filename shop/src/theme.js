import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme();

// A custom theme for this app
const theme = createTheme({
  breakpoints: {
    values: {
      lg: 1232,
    }
  },
  direction: 'rtl',
  palette: {
    primary: {
      main: '#e0b0e9',
    },
  },
  typography: {
    fontFamily: "Vazirmatn, Roboto"
  },
});

export default theme;