import { ChatListPage } from "./pages/ChatListPage/ChatListPage";
import { PersonalChatPage } from "./pages/PersonalChatPage/PersonalChatPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ChatListPage />} />
                <Route path="/chat/:chatId" element={<PersonalChatPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </Router>
    );
}

export default App;
