import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css"; // This line imports the CSS file

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
