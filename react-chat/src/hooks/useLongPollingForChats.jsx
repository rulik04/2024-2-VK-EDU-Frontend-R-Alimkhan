// // import { useEffect, useState } from "react";
// // import { getAllChats } from "@/services/chat";

// // export const useLongPollingForChats = (
// //     focusedChatId = null,
// //     interval = 5000
// // ) => {
// //     const [chats, setChats] = useState([]);
// //     const [error, setError] = useState(null);

// //     useEffect(() => {
// //         let isMounted = true;

// //         const fetchChats = async () => {
// //             try {
// //                 const response = await getAllChats();
// //                 if (isMounted) {
// //                     setChats(response.results);

// //                     // Уведомления для непрочитанных сообщений
// //                     response.results.forEach((chat) => {
// //                         if (
// //                             chat.unread_messages_count > 0 && // Есть непрочитанные сообщения
// //                             chat.id !== focusedChatId && // Чат не открыт
// //                             chat.last_message?.sender?.id !==
// //                                 localStorage.getItem("userId") // Сообщение не от текущего пользователя
// //                         ) {
// //                             new Notification(
// //                                 `Новое сообщение в чате: ${chat.title}`,
// //                                 {
// //                                     body:
// //                                         chat.last_message?.text ||
// //                                         "Новое сообщение",
// //                                     icon: chat.avatar || "/default-avatar.png",
// //                                 }
// //                             );
// //                         }
// //                     });
// //                 }
// //             } catch (err) {
// //                 if (isMounted) {
// //                     setError(err.message || "Ошибка получения чатов");
// //                 }
// //             } finally {
// //                 if (isMounted) {
// //                     setTimeout(fetchChats, interval);
// //                 }
// //             }
// //         };

// //         fetchChats();

// //         return () => {
// //             isMounted = false;
// //         };
// //     }, [focusedChatId, interval]);

// //     return { chats, error };
// // };

// import { useEffect, useState } from "react";
// import { getAllChats } from "@/services/chat";

// export const useLongPollingForChats = (
//     focusedChatId = null,
//     interval = 5000
// ) => {
//     const [chats, setChats] = useState([]); // Все чаты
//     const [messages, setMessages] = useState([]); // Сохраненные сообщения
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         let isMounted = true;

//         const fetchChats = async () => {
//             try {
//                 const response = await getAllChats();
//                 if (isMounted) {
//                     const fetchedChats = response.results;

//                     // Обновляем состояние чатов
//                     setChats(fetchedChats);

//                     // Находим новые сообщения
//                     fetchedChats.forEach((chat) => {
//                         const lastMessageId = chat.last_message?.id;

//                         // Если это новое сообщение и чат не открыт, уведомляем
//                         if (
//                             lastMessageId &&
//                             !messages.includes(lastMessageId) && // Проверяем, было ли сообщение уже обработано
//                             chat.id !== focusedChatId && // Чат не открыт
//                             chat.last_message?.sender?.id !==
//                                 localStorage.getItem("userId") // Сообщение не от текущего пользователя
//                         ) {
//                             // Создаем уведомление
//                             new Notification(
//                                 `Новое сообщение в чате: ${chat.title}`,
//                                 {
//                                     body:
//                                         chat.last_message?.text ||
//                                         "Новое сообщение",
//                                     icon: chat.avatar || "/default-avatar.png",
//                                 }
//                             );

//                             // Добавляем новое сообщение в список
//                             setMessages((prevMessages) => [
//                                 ...prevMessages,
//                                 lastMessageId,
//                             ]);
//                         }
//                     });
//                 }
//             } catch (err) {
//                 if (isMounted) {
//                     setError(err.message || "Ошибка получения чатов");
//                 }
//             } finally {
//                 if (isMounted) {
//                     setTimeout(fetchChats, interval);
//                 }
//             }
//         };

//         fetchChats();

//         return () => {
//             isMounted = false;
//         };
//     }, [focusedChatId, interval, messages]);

//     return { chats, error };
// };

import { useEffect, useState } from "react";
import { getAllChats } from "@/services/chat";

export const useLongPollingForChats = (
    focusedChatId = null,
    interval = 5000
) => {
    const [chats, setChats] = useState([]);
    const [error, setError] = useState(null);
    const [notifiedMessages, setNotifiedMessages] = useState(
        new Set(JSON.parse(localStorage.getItem("notifiedMessages") || "[]")) // Загружаем из localStorage
    );

    useEffect(() => {
        let isMounted = true;

        const fetchChats = async () => {
            try {
                const response = await getAllChats();
                if (isMounted) {
                    setChats(response.results);

                    // Уведомления для новых непрочитанных сообщений
                    response.results.forEach((chat) => {
                        const lastMessage = chat.last_message;

                        if (
                            chat.unread_messages_count > 0 && // Есть непрочитанные сообщения
                            chat.id !== focusedChatId && // Чат не открыт
                            lastMessage?.id && // У сообщения есть ID
                            !notifiedMessages.has(lastMessage.id) && // Уведомление еще не отправлено
                            lastMessage.sender?.id !==
                                localStorage.getItem("userId") // Сообщение не от текущего пользователя
                        ) {
                            // Создаем уведомление
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

                            // Обновляем notifiedMessages
                            setNotifiedMessages((prev) => {
                                const updatedSet = new Set(prev).add(
                                    lastMessage.id
                                );
                                // Сохраняем в localStorage
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
