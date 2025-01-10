import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { DEFAULT_AVATAR_URL } from "@/utils/messageConstants";
import "./Sidebar.scss";
import { getUserInfo } from "@/services/user";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await getUserInfo();
                setUserData(response);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData();
    }, []);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate("/login");
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
                        src={userData.avatar || DEFAULT_AVATAR_URL}
                        alt=""
                        className="user_avatar"
                    />
                    <h3>
                        {userData.first_name} {userData.last_name}
                    </h3>
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
                    <li className="sidebar-item" onClick={logout}>
                        Logout
                    </li>
                </ul>
            </div>
        </>
    );
};
