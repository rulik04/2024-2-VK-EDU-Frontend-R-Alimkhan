import { useNavigate } from "react-router-dom";
import CreateIcon from "@mui/icons-material/Create";
import "./FloatingButton.scss";
import { getChatsFromStorage } from "@/utils/storageUtils";
import { DEFAULT_AVATAR_URL } from "@/utils/messageConstants";

export const FloatingButton = () => {
    const navigate = useNavigate();

    const onClick = () => {
        const chatName = prompt("Enter the name of the new contact:");
        if (!chatName) return;

        const chats = getChatsFromStorage();
        const newChatId =
            chats.length > 0 ? chats[chats.length - 1].chatId + 1 : 1;

        const newChat = {
            chatId: newChatId,
            chatName,
            avatar: DEFAULT_AVATAR_URL,
            messages: [],
        };

        chats.push(newChat);
        localStorage.setItem("chats", JSON.stringify(chats));

        navigate(`/chat/${newChatId}`);
    };

    return (
        <div className="floating-button-container" onClick={onClick}>
            <CreateIcon />
        </div>
    );
};
