import { useLongPolling } from "@/hooks/useLongPolling";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/modules/Footer/Footer";
import { useParams } from "react-router-dom";
import "./PersonalChatPage.scss";
import { useEffect, useState } from "react";
import "./PersonalChatPage.scss";
import { Message } from "@/components/Message/Message";
import { getChatById, readAllMessages } from "@/services/chat";
export const PersonalChatPage = () => {
    const { chatId } = useParams();
    const userId = localStorage.getItem("userId");
    const [currentChat, setCurrentChat] = useState(null);
    const { messages, error } = useLongPolling(chatId);
    readAllMessages(chatId);
    useEffect(() => {
        const fetchChat = async () => {
            try {
                const response = await getChatById(chatId);
                setCurrentChat(response);
            } catch (error) {
                console.error("Error fetching chat:", error);
            }
        };

        fetchChat();
    }, [chatId]);
    console.log("currentChat", currentChat);

    if (error) {
        return <p className="error">Error loading messages: {error}</p>;
    }

    return (
        <div className="chat-container">
            {currentChat && messages ? (
                <div className="chat-container">
                    <Header
                        title={currentChat.title}
                        chatId={currentChat.id}
                        avatar={currentChat.avatar}
                        is_online={currentChat.members[1]?.is_online}
                        last_online_at={currentChat.members[1]?.last_online_at}
                    />

                    <div className="main">
                        {messages.map((message) => (
                            <Message
                                key={message.id}
                                message={message}
                                userId={userId}
                            />
                        ))}
                    </div>

                    <Footer />
                </div>
            ) : (
                <p>Loading chat...</p>
            )}
        </div>
    );
};
