import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import theme from "./theme";
import Header from "./components/Header";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* reset css */}
      <CssBaseline />
      {/* container */}
      <Box width="100%" height="100%" padding="1rem 2rem 4rem">
        <BrowserRouter>
          <Header />
          {/* pages */}
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<main>Home page</main>} />
            <Route path="/forecast" element={<main>Forecast page</main>} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}
