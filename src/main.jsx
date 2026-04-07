// ===============================
// IMPORTACIONES
// ===============================
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext";

// ===============================
// RENDER PRINCIPAL ACTIVACION DEL WIFI
// ===============================
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    {/* Provider global */}
    <ThemeProvider>
      <App />
    </ThemeProvider>

  </React.StrictMode>
);