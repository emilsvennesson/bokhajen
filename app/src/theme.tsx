import { createTheme } from '@mui/material/styles';

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#0B9E88',
    },
    secondary: {
      main: '#036AAB',
      light: '#036aab33',
    },
  },
  typography: {
    fontFamily: 'nunito',
    fontSize: 14,
  },
});
