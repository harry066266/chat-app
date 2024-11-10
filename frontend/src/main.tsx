import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SocketContextProvider } from "./context/SocketContent.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthContextProvider>
      <SocketContextProvider>
        <App />
      </SocketContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
