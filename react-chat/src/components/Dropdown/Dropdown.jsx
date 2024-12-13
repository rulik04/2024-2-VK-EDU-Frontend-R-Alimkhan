import { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import "./Dropdown.scss";

export const Dropdown = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <div className="dropdown-icon" onClick={toggleDropdown}>
                <MoreVert />
            </div>
            {isOpen && <ul className="dropdown-menu">{children}</ul>}
        </div>
    );
};
