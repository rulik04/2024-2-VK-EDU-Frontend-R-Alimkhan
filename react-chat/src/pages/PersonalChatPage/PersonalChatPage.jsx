import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import "./PersonalChatPage.scss";
import { markMessagesAsRead } from "../../utils/messageUtils";
import {
    getChatsFromStorage,
    saveChatsToStorage,
} from "../../utils/storageUtils";
import { Message } from "../../components/Message/Message";

export const PersonalChatPage = ({ chatId, onBackClick }) => {
    chatId = parseInt(chatId, 10);
    const chats = getChatsFromStorage();
    const currentChat = chats.find((chat) => chat.chatId === chatId);

    if (!currentChat) {
        alert("Chat not found!");
        window.location.href = "/";
    } else {
        markMessagesAsRead(currentChat.messages);
        saveChatsToStorage(chats);
    }
    const [visibleMessages, setVisibleMessages] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisibleMessages(currentChat.messages.map((_, index) => index));
        }, 100);
        return () => clearTimeout(timer);
    }, [currentChat.messages]);

    return (
        <div className="chat-container">
            <Header
                title={currentChat.chatName}
                chatId={currentChat.chatId}
                onBackClick={onBackClick}
            />

            <div className="main">
                {currentChat.messages.map((message, index) => (
                    <Message
                        key={index}
                        message={message}
                        isVisible={visibleMessages.includes(index)}
                    />
                ))}
            </div>

            <Footer chatId={chatId} />
        </div>
    );
};
