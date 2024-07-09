import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2975F0",
    },
    secondary: {
      main: "#FA641A",
    },
    third: {
      main: "#FE9F01",
    },
    footer: {
      main: "#162237",
    },
    background: {
      main: "#F1F2F4",
    },
    white: "#fff",
  },

  typography: {
    fontFamily: "system-ui",
    h1: {
      fontSize: "2.5rem",
      fontWeight: "500",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "500",
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: "500",
    },
    h4: {
      fontSize: "1.6rem",
      fontWeight: "500",
    },
    h2: {
      fontSize: "1.4rem",
      fontWeight: "500",
    },
    h1: {
      fontSize: "1.2rem",
      fontWeight: "500",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
    title: {
      fontSize: "1.2rem",
    },
    subtitle: {
      fontSize: "1rem",
    },
  },
});

export default theme;
