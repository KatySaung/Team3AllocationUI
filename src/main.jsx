// src/main.jsx

import ReactDOM from "react-dom/client";
import App from "./App";
import { ClientProvider } from "./Context/ClientContext";
import { BrowserRouter } from "react-router-dom";
import "./index.css"; // Import Tailwind CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ClientProvider>
      <App />
    </ClientProvider>
  </BrowserRouter>
);
