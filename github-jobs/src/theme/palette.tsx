import { PaletteMode } from "@mui/material";
//not implemented
export const palette = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            light: "#B9BDCF",
            main: "#334680",
            dark: "#282538",
          },
          secondary: {
            main: "#1E86FF",
          },
        }
      : {
          primary: {
            light: "#B9BDCF",
            main: "#334680",
            dark: "#282538",
          },
          secondary: {
            main: "#1E86FF",
          },
        }),
  },
});
