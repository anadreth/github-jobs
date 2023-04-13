import { createTheme } from "@mui/material/styles";
import { typography } from "./typography";

const theme = createTheme({
  palette: {
    primary: {
      light: "#B9BDCF",
      main: "#334680",
      dark: "#282538",
    },
    secondary: {
      main: "#1E86FF",
    },
  },
  typography: typography,
});

export default theme;
