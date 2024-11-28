import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getChatsFromStorage } from "@/utils/storageUtils";
import { Dropdown } from "@/components/Dropdown/Dropdown";
import { Link, useLocation } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { SearchInput } from "../SearchInput/SearchInput";
import { useState } from "react";

export const Header = ({
    chatId = null,
    onBackClick = null,
    onSearchChange,
}) => {
    const [isSearchActive, setIsSearchActive] = useState(false);

    const location = useLocation();
    const chats = getChatsFromStorage();

    let title = "Messenger";
    if (location.pathname === "/profile") {
        title = "Profile";
    } else if (location.pathname.startsWith("/chat/")) {
        const chat = chats.find((chat) => chat.chatId === parseInt(chatId));
        title = chat ? chat.chatName : "Chat";
    }

    const isChatListPage = location.pathname === "/";
    const isProfilePage = location.pathname === "/profile";

    return (
        <header className="header">
            <div className="header-container">
                {isChatListPage || isProfilePage ? (
                    <Sidebar />
                ) : (
                    <div className="user-image">
                        <Link to="/">
                            <ArrowBackIcon onClick={onBackClick} />
                        </Link>
                        <img
                            src={
                                chats.find(
                                    (chat) => chat.chatId === parseInt(chatId)
                                )?.avatar || "https://via.placeholder.com/50"
                            }
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
                {isChatListPage && !isSearchActive && (
                    <SearchIcon onClick={() => setIsSearchActive(true)} />
                )}
                {isChatListPage && isSearchActive && (
                    <SearchInput
                        onChange={(e) => onSearchChange(e.target.value)}
                        onClose={() => {
                            setIsSearchActive(false);
                            onSearchChange("");
                        }}
                    />
                )}
                {!isChatListPage && !isProfilePage && <Dropdown />}
            </div>
        </header>
    );
};
