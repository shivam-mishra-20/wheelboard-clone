import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./firebase/config"; // Import Firebase config to ensure initialization

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
