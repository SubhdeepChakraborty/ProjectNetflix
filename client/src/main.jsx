import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppContext } from "./components/context/Context";
import { AuthContextProvider } from "./authContext/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContext>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </AppContext>
  </React.StrictMode>
);
