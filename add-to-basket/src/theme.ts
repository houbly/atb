import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#dc582a',
    },
  },
  typography: {
    fontFamily: 'Be Vietnam Pro, Arial',
    subtitle1: {
      fontSize: '1.6rem',
      fontWeight: 700,
    },
    body1: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: '700',
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
