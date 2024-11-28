import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { DEFAULT_AVATAR_URL } from "@/utils/messageConstants";
import "./Sidebar.scss";

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const userData = JSON.parse(localStorage.getItem("userInfo"));

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="menu-icon" onClick={handleToggle}>
                <MenuIcon />
            </div>

            {isOpen && (
                <div className="sidebar-overlay" onClick={handleClose}></div>
            )}

            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <div className="sidebar-header">
                    <img
                        src={userData.image || DEFAULT_AVATAR_URL}
                        alt=""
                        className="user_avatar"
                    />
                    <h3>{userData.fullName}</h3>
                    <CloseIcon onClick={handleToggle} className="close-icon" />
                </div>
                <ul className="sidebar-menu">
                    <Link to="/profile">
                        <li className="sidebar-item">Profile</li>
                    </Link>
                    <Link to="/">
                        <li className="sidebar-item">Chats</li>
                    </Link>
                    <li className="sidebar-item">Settings</li>
                    <li className="sidebar-item">Logout</li>
                </ul>
            </div>
        </>
    );
};
