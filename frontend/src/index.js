import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { ThemeProvider, createTheme } from "@mui/material/styles"; // Import MUI ThemeProvider and theme creation
import CssBaseline from "@mui/material/CssBaseline"; // For consistent default styling reset
import "./index.css"; // Import your custom CSS (if needed)

// Create a custom MUI theme (optional)
const theme = createTheme({
  palette: {
    mode: "light", // Change to "dark" if you want a dark theme
    primary: {
      main: "#1976d2", // Primary color (blue)
    },
    secondary: {
      main: "#ff4081", // Secondary color (pink)
    },
  },
});

// Find the root element in the HTML DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App wrapped in ThemeProvider
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> {/* Wrap App with ThemeProvider */}
      <CssBaseline /> {/* Add MUI's CSS baseline */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
