import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppStateContextProvider from "./contexts/AppStateContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppStateContextProvider>
      <App />
    </AppStateContextProvider>
  </BrowserRouter>,
);
