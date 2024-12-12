import { Dropdown } from "@/components/Dropdown/Dropdown";
import { deleteChat } from "@/services/chat";
import { useParams } from "react-router-dom";

export const ChatDropdown = () => {
    const { chatId } = useParams();
    const handleDeleteChat = () => {
        try {
            deleteChat(chatId);
            window.location.href = "/";
        } catch (error) {
            console.error("Error deleting chat:", error);
        }
    };
    return (
        <Dropdown>
            <li className="dropdown-item" onClick={handleDeleteChat}>
                Delete
            </li>
            <li className="dropdown-item">Mute</li>
            <li className="dropdown-item">Block</li>
        </Dropdown>
    );
};
