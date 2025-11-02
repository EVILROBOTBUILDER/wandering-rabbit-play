import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// import "./globals.css"; // Removed as per static site conversion

createRoot(document.getElementById("root")!).render(<App />);