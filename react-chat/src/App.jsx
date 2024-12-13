import { ChatListPage } from "./pages/ChatListPage/ChatListPage";
import { PersonalChatPage } from "./pages/PersonalChatPage/PersonalChatPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ChatListPage />} />
                <Route path="/chat/:chatId" element={<PersonalChatPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default App;
