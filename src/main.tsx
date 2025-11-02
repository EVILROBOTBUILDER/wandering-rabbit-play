import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { Toaster } from "sonner"; // Import Toaster

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Toaster richColors position="top-right" /> {/* Add Toaster component */}
  </>
);