import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      dark: "#272727",
    },
    secondary: {
      main: "#00a3a1",
    },
    tertiary: {
      main: "#F4F4F4",
    },
    background: {
      default: "#efefef",
    },
    text: {
      primary: "rgba(59,59,59,0.87)",
      secondary: "rgba(255,255,255,0.54)",
    },
  },
});

export default theme;
