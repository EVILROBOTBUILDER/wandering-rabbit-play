"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"; // Keep NotFound for robustness, though it won't be linked

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all for any other path */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;