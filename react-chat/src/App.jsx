import { ChatListPage } from "./pages/ChatListPage/ChatListPage";
import { PersonalChatPage } from "./pages/PersonalChatPage/PersonalChatPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useLongPollingForChats } from "./hooks/useLongPollingForChats";
function App() {
    useEffect(() => {
        if ("Notification" in window && Notification.permission !== "granted") {
            Notification.requestPermission().then((permission) => {
                console.log(`Permission for notifications: ${permission}`);
                if (permission === "granted") {
                    new Notification("Notifications enabled!", {
                        body: "You'll receive updates and messages.",
                    });
                } else {
                    console.warn("Notifications permission denied.");
                }
            });
        }
    }, []);

    const { chats, error } = useLongPollingForChats(null);

    if (error) {
        console.error("Error with long polling:", error);
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<ChatListPage chats={chats} />} />
                <Route path="/chat/:chatId" element={<PersonalChatPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default App;
