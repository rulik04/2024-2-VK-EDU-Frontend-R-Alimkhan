import "./Chat.scss";
import CheckIcon from "@mui/icons-material/Check";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { formatTime, formatDate } from "@/utils/dateUtils";
export const Chat = ({
    chatName,
    lastMessage,
    time,
    isRead,
    avatar,
    unread,
    onClick,
}) => {
    const truncatedMessage =
        lastMessage.length > 20
            ? `${lastMessage.slice(0, 20)}...`
            : lastMessage;

    return (
        <div className="chat" onClick={onClick}>
            <img
                src={avatar}
                alt={`${chatName} avatar`}
                className="chat-image"
            />

            <div className="chat-main">
                <h2>{chatName}</h2>
                <p>{truncatedMessage}</p>
            </div>

            <div className="chat-info">
                <p className="time">
                    {formatDate(time)} {formatTime(time)}
                </p>
                {isRead === "read" && <DoneAllIcon />}
                {isRead === "unread" && <CheckIcon />}
                {unread > 0 && <span className="unread">{unread}</span>}
            </div>
        </div>
    );
};
