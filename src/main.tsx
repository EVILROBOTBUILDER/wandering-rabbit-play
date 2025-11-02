import React from "react"; // Fixed: Added React import
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { Toaster } from "sonner";
import { SessionContextProvider } from "@/providers/SessionContextProvider.tsx"; // Fixed: Use alias for consistency

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SessionContextProvider> {/* Wrap App with SessionContextProvider */}
      <App />
      <Toaster richColors position="top-right" />
    </SessionContextProvider>
  </React.StrictMode>
);