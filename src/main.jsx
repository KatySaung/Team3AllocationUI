

import ReactDOM from "react-dom/client";
import App from "./App";
import { ClientProvider } from "./Components/Clients/ClientContext";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ClientProvider>
      <App />
    </ClientProvider>
  </BrowserRouter>
);
