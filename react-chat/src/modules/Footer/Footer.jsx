import { useState, useEffect, useRef } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import "./Footer.scss";
import { sendMessage } from "@/services/chat";
import { useParams } from "react-router-dom";

export const Footer = () => {
    const [messageText, setMessageText] = useState("");
    const textareaRef = useRef(null);

    const { chatId } = useParams();

    const send = async () => {
        try {
            const response = await sendMessage(chatId, messageText);
            console.log("Message sent:", response);
        } catch (error) {
            console.error("Error sending message:", error);
        }

        setMessageText("");

        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            send();
        }
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
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
                onChange={(e) => setMessageText(e.target.value)}
                onKeyDown={handleKeyPress}
            />
            <AttachFileIcon className="attachment" />
            <SendIcon className="send" onClick={send} />
        </footer>
    );
};
