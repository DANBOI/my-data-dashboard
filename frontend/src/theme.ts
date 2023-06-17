import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  //expand property types
  interface PaletteColor {
    [key: number]: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      100: "#fee3e3",
      200: "#fcc7c7",
      300: "#fbaaaa",
      400: "#f98e8e",
      500: "#f87272",
      600: "#c65b5b",
      700: "#954444",
      800: "#632e2e",
      900: "#321717",
      main: "#f87272",
      light: "#f98e8e",
    },
    secondary: {
      100: "#e4d2f6",
      200: "#c8a6ec",
      300: "#ad79e3",
      400: "#914dd9",
      500: "#7620d0",
      600: "#5e1aa6",
      700: "#47137d",
      800: "#2f0d53",
      900: "#18062a",
      main: "#914dd9",
    },
    info: {
      500: "#36d399",
    },
    grey: {
      100: "#edeff1",
      200: "#dbdee3",
      300: "#caced6",
      400: "#b8bdc8",
      500: "#a6adba",
      600: "#858a95",
      700: "#646870",
      800: "#42454a",
      900: "#212325",
    },
    background: {
      // 100: "#d2d3d4",
      // 200: "#a5a7aa",
      // 300: "#777b7f",
      // 400: "#4a4f55",
      // 500: "#1d232a",
      // 600: "#171c22",
      // 700: "#111519",
      // 800: "#0c0e11",
      // 900: "#060708"
      default: "#1d232a",
      paper: "#171c22",
    },
  },

  typography: {
    fontFamily: "Inter, sans-serif",
    fontSize: 12,
    h1: {
      fontSize: 32,
    },
    h2: {
      fontSize: 24,
    },
    h3: {
      fontSize: 20,
      fontWeight: 800,
      color: "#dbdee3",
    },
    h4: {
      fontSize: 14,
      fontWeight: 600,
      color: "#caced6",
    },
    h5: {
      fontSize: 12,
      fontWeight: 400,
      color: "#a6adba",
    },
    h6: {
      fontSize: 10,
      color: "#646870",
    },
  },
});

export default theme;
