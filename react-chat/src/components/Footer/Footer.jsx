import { useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import {
    getChatsFromStorage,
    saveChatsToStorage,
} from "../../utils/storageUtils";
import { formatTime } from "../../utils/dateUtils";
import { MESSAGE_STATUS, MESSAGE_TYPE } from "../../utils/messageConstants";
import "./Footer.scss";

export const Footer = ({ chatId }) => {
    const [messageText, setMessageText] = useState("");

    const handleInputChange = (event) => {
        setMessageText(event.target.value);
    };

    const sendMessage = () => {
        const trimmedText = messageText.trim();
        if (!trimmedText) return;

        const message = {
            text: trimmedText,
            time: formatTime(new Date()),
            type: MESSAGE_TYPE.SENT,
            status: MESSAGE_STATUS.UNREAD,
        };

        const chats = getChatsFromStorage();
        const currentChat = chats.find((chat) => chat.chatId === chatId);

        if (currentChat) {
            currentChat.messages.push(message);
            saveChatsToStorage(chats);
            setMessageText("");
        }
    };

    return (
        <footer className="chat-footer">
            <textarea
                className="form-input"
                placeholder="Write a message..."
                rows={1}
                name="message-text"
                value={messageText}
                onChange={handleInputChange}
            />
            <AttachFileIcon className="attachment" />
            <SendIcon className="send" onClick={sendMessage} />
        </footer>
    );
};
