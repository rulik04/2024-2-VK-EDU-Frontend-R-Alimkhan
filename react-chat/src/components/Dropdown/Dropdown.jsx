import { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import "./Dropdown.scss";

export const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <div className="dropdown-icon" onClick={toggleDropdown}>
                <MoreVert />
            </div>
            {isOpen && (
                <ul className="dropdown-menu">
                    <li className="dropdown-item">Delete</li>
                    <li className="dropdown-item">Mute</li>
                    <li className="dropdown-item">Block</li>
                </ul>
            )}
        </div>
    );
};
