// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Success from "./components/Success.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="success" element={<Success />} />
    </Routes>
  </BrowserRouter>
);
