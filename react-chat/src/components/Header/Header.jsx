import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getChatsFromStorage } from "../../utils/storageUtils";
import { Dropdown } from "../Dropdown/Dropdown";
export const Header = ({ title, chatId = null, onBackClick = null }) => {
    const chats = getChatsFromStorage();
    const chat = chats.find((chat) => chat.chatId === chatId);

    return (
        <header className="header">
            <div className="header-container">
                {title == "Messenger" ? (
                    <MenuIcon />
                ) : (
                    <div className="user-image">
                        <ArrowBackIcon onClick={onBackClick} />
                        <img
                            src={chat.avatar}
                            alt="avatar"
                            className="avatar"
                        />
                    </div>
                )}

                <div className="title-info">
                    <h3 className="title">{title}</h3>
                </div>
            </div>
            <div className="header-info">
                <SearchIcon />
                {title !== "Messenger" && <Dropdown />}
            </div>
        </header>
    );
};
