import { useState } from "react";
import { ChatListPage } from "./pages/ChatListPage/ChatListPage";
import { PersonalChatPage } from "./pages/PersonalChatPage/PersonalChatPage";

function App() {
    const [currentPage, setCurrentPage] = useState({
        page: "chatList",
        chatId: null,
    });

    const goToChat = (chatId) => {
        setCurrentPage({ page: "personalChat", chatId });
    };

    const goBack = () => {
        setCurrentPage({ page: "chatList", chatId: null });
    };

    return (
        <>
            {currentPage.page === "chatList" && (
                <ChatListPage onChatClick={goToChat} />
            )}
            {currentPage.page === "personalChat" && (
                <PersonalChatPage
                    chatId={currentPage.chatId}
                    onBackClick={goBack}
                />
            )}
        </>
    );
}

export default App;
