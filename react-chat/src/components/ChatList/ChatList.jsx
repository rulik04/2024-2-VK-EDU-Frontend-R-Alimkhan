import { useEffect, useState } from "react";
import { Chat } from "@/components/Chat/Chat";
import { getChatsFromStorage, saveChatsToStorage } from "@/utils/storageUtils";
import { getLastMessageDetails } from "@/utils/messageUtils";

import { Link } from "react-router-dom";

export const ChatList = ({ searchQuery }) => {
    const [chatData, setChatData] = useState([]);

    useEffect(() => {
        let chats = getChatsFromStorage();
        chats = chats.filter((chat) => chat.messages.length > 0);
        saveChatsToStorage(chats);

        const sortedChats = chats.sort((a, b) => {
            const lastMessageA = a.messages[a.messages.length - 1];
            const lastMessageB = b.messages[b.messages.length - 1];

            return new Date(lastMessageB.time) - new Date(lastMessageA.time);
        });

        setChatData(sortedChats);
    }, []);

    const filteredChats = chatData.filter((chat) =>
        chat.chatName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            {filteredChats.length > 0 ? (
                filteredChats.map((chat) => {
                    const { text, time, status } = getLastMessageDetails(chat);
                    const unreadCount = chat.messages.filter(
                        (msg) =>
                            msg.type === "received" && msg.status === "unread"
                    ).length;

                    return (
                        <Link to={`/chat/${chat.chatId}`} key={chat.chatId}>
                            <Chat
                                key={chat.chatId}
                                chatId={chat.chatId}
                                chatName={chat.chatName}
                                lastMessage={text}
                                time={time}
                                isRead={status}
                                avatar={chat.avatar}
                                unread={unreadCount}
                            ></Chat>
                        </Link>
                    );
                })
            ) : (
                <p>No chats found.</p>
            )}
        </div>
    );
};
