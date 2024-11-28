import "./SearchInput.scss";
import CloseIcon from "@mui/icons-material/Close";

export const SearchInput = ({ onChange, onClose }) => {
    return (
        <div className="search-input">
            <input
                type="text"
                placeholder="Search chats..."
                onChange={onChange}
            />
            <CloseIcon onClick={onClose} />
        </div>
    );
};
