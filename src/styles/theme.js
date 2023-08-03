import '@fontsource/roboto';
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily:
          'Roboto, sans-serif'
      },
      palette: {
        primary: {
              main: '#0a66c2'
        },
        secondary: {
          main: '#956152', 
        },
        main: {
          main: '#666666', 
        },
      },
});

export { theme as default };