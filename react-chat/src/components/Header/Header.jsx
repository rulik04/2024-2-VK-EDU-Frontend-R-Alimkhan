import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ChatDropdown } from "@/modules/ChatDropdown/ChatDropdown";
import { Link, useLocation } from "react-router-dom";
import { DEFAULT_CHAT_AVATAR } from "@/utils/messageConstants";

// sidebar is a module, and it is allowed to import it here
import { Sidebar } from "@/modules/Sidebar/Sidebar";

import { SearchInput } from "../SearchInput/SearchInput";
import { useState } from "react";
import { formatDate, formatTime } from "@/utils/dateUtils";
export const Header = ({
    title,
    avatar = null,
    is_online = null,
    last_online_at = null,
    onBackClick = null,
    onSearchChange,
}) => {
    const [isSearchActive, setIsSearchActive] = useState(false);

    const location = useLocation();

    if (location.pathname === "/profile") {
        title = "Profile";
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
                            src={avatar || DEFAULT_CHAT_AVATAR}
                            alt="avatar"
                            className="avatar"
                        />
                    </div>
                )}

                <div className="title-info">
                    <h3 className="title">{title}</h3>
                    {isProfilePage && is_online !== null && is_online && (
                        <p className="online">Online</p>
                    )}

                    {isProfilePage && last_online_at && (
                        <p className="last-online">
                            Был в сети {formatTime(last_online_at)}{" "}
                            {formatDate(last_online_at)}
                        </p>
                    )}
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
                {!isChatListPage && !isProfilePage && <ChatDropdown />}
            </div>
        </header>
    );
};
