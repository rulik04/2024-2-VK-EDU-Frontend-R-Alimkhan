import { useEffect, useState } from "react";
import { getAllChats } from "@/services/chat";

export const useLongPollingForChats = (
    focusedChatId = null,
    interval = 5000
) => {
    const [chats, setChats] = useState([]);
    const [error, setError] = useState(null);
    const [notifiedMessages, setNotifiedMessages] = useState(
        new Set(JSON.parse(localStorage.getItem("notifiedMessages") || "[]"))
    );

    useEffect(() => {
        let isMounted = true;

        const fetchChats = async () => {
            try {
                const response = await getAllChats();
                if (isMounted) {
                    setChats(response.results);

                    response.results.forEach((chat) => {
                        const lastMessage = chat.last_message;

                        if (
                            chat.unread_messages_count > 0 &&
                            chat.id !== focusedChatId &&
                            lastMessage?.id && //
                            !notifiedMessages.has(lastMessage.id) &&
                            lastMessage.sender?.id !==
                                localStorage.getItem("userId")
                        ) {
                            new Notification(
                                `Новое сообщение в чате: ${chat.title}`,
                                {
                                    body: lastMessage.text || "Новое сообщение",
                                    icon: chat.avatar || "/default-avatar.png",
                                }
                            );

                            const audio = new Audio(
                                "public/sounds/notification.ogg"
                            );
                            audio.play();

                            if (navigator.vibrate) {
                                navigator.vibrate([200, 100, 200]);
                            }

                            setNotifiedMessages((prev) => {
                                const updatedSet = new Set(prev).add(
                                    lastMessage.id
                                );
                                localStorage.setItem(
                                    "notifiedMessages",
                                    JSON.stringify(Array.from(updatedSet))
                                );
                                return updatedSet;
                            });
                        }
                    });
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message || "Ошибка получения чатов");
                }
            } finally {
                if (isMounted) {
                    setTimeout(fetchChats, interval);
                }
            }
        };

        fetchChats();

        return () => {
            isMounted = false;
        };
    }, [focusedChatId, interval, notifiedMessages]);

    return { chats, error };
};
