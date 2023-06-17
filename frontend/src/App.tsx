import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import theme from "./theme";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Forecast from "./pages/Forecast";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* reset css */}
      <CssBaseline />
      {/* container */}
      <Box height="100%" padding="1rem 2rem 5rem">
        <BrowserRouter>
          <Header />
          {/* pages */}
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/forecast" element={<Forecast />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}
