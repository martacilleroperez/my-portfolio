import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { HashRouter } from "react-router-dom"; // ✅ keep


const root = createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);