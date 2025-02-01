import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App.js";
import "./index.css";

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<App />);
