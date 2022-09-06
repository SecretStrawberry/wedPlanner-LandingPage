import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F9F5EB",
    },
    secondary: {
      main: "#003865",
    },
    text: {
      primary: "#003865",
    },
    line: "#EAE3D2",
    error: {
      main: "#9C0F48",
    },
  },
  typography: {
    fontFamily: " 'Dosis', sans-serif",
    fontSize: 10,

    h1: {
      fontFamily: "'Splash', cursive",
    },
    h2: {
      fontSize: "6rem",
    },
    h4: {
      fontSize: "1.4rem",
      fontWeight: 800,
    },
    body1: {
      fontSize: "1.4rem",
    },
    body2: {
      fontSize: "1rem",
    },
    button: {
      textTransform: "capitalize",
    },
  },
});

export default theme;
