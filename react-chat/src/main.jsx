import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { loadChat, loadUserInfo } from "./loadChats";

loadChat();
loadUserInfo();

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
