import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { MyBeersProvider } from "./context/myBeersContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MyBeersProvider>
      <App />
    </MyBeersProvider>
  </React.StrictMode>,
);
