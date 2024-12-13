import CreateIcon from "@mui/icons-material/Create";
import "./FloatingButton.scss";

export const FloatingButton = ({ onOpenModal }) => {
    return (
        <div className="floating-button-container" onClick={onOpenModal}>
            <CreateIcon />
        </div>
    );
};
