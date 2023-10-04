import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UrlContextProvider } from "./context/UrlContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <UrlContextProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </UrlContextProvider>
);
