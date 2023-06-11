import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import theme from "./theme";
import Header from "./components/Header";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* reset css */}
      <CssBaseline />
      {/* container */}
      <Box width="100%" height="100%" padding="1rem 2rem 4rem">
        <Header />
        {/* pages */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<main>Home page</main>} />
            <Route path="/forecast" element={<main>Forecast page</main>} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}
