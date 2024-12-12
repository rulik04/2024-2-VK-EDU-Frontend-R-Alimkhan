import CheckIcon from "@mui/icons-material/Check";
import DoneAllIcon from "@mui/icons-material/DoneAll";

import "./Message.scss";
import { formatTime, formatDate } from "@/utils/dateUtils";

export const Message = ({ message, userId }) => {
    return (
        <>
            <div
                className={`message ${
                    message.sender.id === userId ? "sent" : "received"
                }`}
            >
                <span className="message-content">{message.text}</span>
                <div className="message-time">
                    <span>
                        {formatTime(message.created_at)}{" "}
                        {formatDate(message.created_at)}
                    </span>

                    {message?.sender?.id === localStorage.getItem("userId") &&
                        message?.was_read_by?.length === 1 && <CheckIcon />}
                    {message?.sender?.id === localStorage.getItem("userId") &&
                        message?.was_read_by?.length > 1 && <DoneAllIcon />}
                </div>
            </div>
        </>
    );
};
