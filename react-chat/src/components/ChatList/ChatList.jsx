import { useEffect, useState } from "react";
import { Chat } from "../Chat/Chat";
import { getChatsFromStorage } from "../../utils/storageUtils";
import { getLastMessageDetails } from "../../utils/messageUtils";

export const ChatList = ({ onChatClick }) => {
    const [chatData, setChatData] = useState([]);

    useEffect(() => {
        const chats = getChatsFromStorage();
        setChatData(chats);
    }, []);

    return (
        <div>
            {chatData.length > 0 ? (
                chatData.map((chat) => {
                    const { text, time, status } = getLastMessageDetails(chat);
                    const unreadCount = chat.messages.filter(
                        (msg) =>
                            msg.type === "received" && msg.status === "unread"
                    ).length;

                    return (
                        <Chat
                            key={chat.chatId}
                            chatId={chat.chatId}
                            chatName={chat.chatName}
                            lastMessage={text}
                            time={time}
                            isRead={status}
                            avatar={chat.avatar}
                            unread={unreadCount}
                            onClick={() => onChatClick(chat.chatId)}
                        />
                    );
                })
            ) : (
                <p>No chats available.</p>
            )}
        </div>
    );
};
