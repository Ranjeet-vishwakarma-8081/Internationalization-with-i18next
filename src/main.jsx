import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./i18n.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback="loading...">
      <App />
    </Suspense>
  </StrictMode>
);
