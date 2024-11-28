import DoneAllIcon from "@mui/icons-material/DoneAll";
import DoneIcon from "@mui/icons-material/Done";
import "./Message.scss";
import { formatTime } from "@/utils/dateUtils";

export const Message = ({ message, isVisible }) => {
    return (
        <div
            className={`message ${isVisible ? "visible" : ""} ${
                message.type === "sent" ? "sent" : "received"
            }`}
        >
            <span className="message-content">{message.text}</span>
            <div className="message-time">
                <span>{formatTime(message.time)}</span>
                {message.type === "sent" &&
                    (message.status === "unread" ? (
                        <DoneIcon />
                    ) : (
                        <DoneAllIcon />
                    ))}
            </div>
        </div>
    );
};
