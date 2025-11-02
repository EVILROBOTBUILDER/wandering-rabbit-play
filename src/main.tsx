import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { Toaster } from "sonner";
// Removed SessionContextProvider import from here

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* SessionContextProvider will now be inside App.tsx */}
    <App />
    <Toaster richColors position="top-right" />
  </React.StrictMode>
);