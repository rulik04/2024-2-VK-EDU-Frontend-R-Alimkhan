import { useEffect, useState } from "react";
import { getChatMessages } from "@/services/chat";

export const useLongPollingForMessages = (chatId, interval = 4000) => {
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchMessages = async () => {
            try {
                const response = await getChatMessages(chatId);
                if (isMounted) {
                    setMessages(response.results);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message || "Ошибка получения сообщений");
                }
            } finally {
                if (isMounted) {
                    setTimeout(fetchMessages, interval);
                }
            }
        };

        fetchMessages();

        return () => {
            isMounted = false;
        };
    }, [chatId, interval]);

    return { messages, error };
};
