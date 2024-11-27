import { useState, useEffect, useRef } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import { getChatsFromStorage, saveChatsToStorage } from "@/utils/storageUtils";
import { MESSAGE_STATUS, MESSAGE_TYPE } from "@/utils/messageConstants";
import "./Footer.scss";

export const Footer = ({ chatId }) => {
    const [messageText, setMessageText] = useState("");
    const textareaRef = useRef(null);

    const handleInputChange = (event) => {
        setMessageText(event.target.value);
    };

    const sendMessage = () => {
        const trimmedText = messageText.trim();
        if (!trimmedText) return;

        const message = {
            text: trimmedText,
            time: new Date().toISOString(),
            type: MESSAGE_TYPE.SENT,
            status: MESSAGE_STATUS.UNREAD,
        };

        const chats = getChatsFromStorage();
        const currentChat = chats.find(
            (chat) => chat.chatId === parseInt(chatId)
        );

        if (currentChat) {
            currentChat.messages.push(message);
            saveChatsToStorage(chats);
            setMessageText(""); // Очищаем текстовое поле
        }

        if (textareaRef.current) {
            textareaRef.current.style.height = "auto"; // Сбрасываем высоту поля
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault(); // Предотвращаем перенос строки
            sendMessage(); // Отправляем сообщение
        }
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto"; // Сбрасываем высоту на авто
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Подстраиваем высоту под содержимое
        }
    }, [messageText]);

    return (
        <footer className="chat-footer">
            <textarea
                ref={textareaRef}
                className="form-input"
                placeholder="Write a message..."
                rows={1}
                name="message-text"
                value={messageText}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
            />
            <AttachFileIcon className="attachment" />
            <SendIcon className="send" onClick={sendMessage} />
        </footer>
    );
};
