import { useEffect, useState } from "react";
import { getChatMessages } from "@/services/chat";

export const useLongPolling = (chatId, interval = 4000) => {
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchMessages = async () => {
            try {
                const response = await getChatMessages(chatId);
                console.log("messages from chat.js:", response);
                if (isMounted) {
                    setMessages(response.results);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message || "Error fetching messages");
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
