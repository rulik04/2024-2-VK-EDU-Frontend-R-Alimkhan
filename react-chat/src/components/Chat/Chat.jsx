import "./Chat.scss";
import CheckIcon from "@mui/icons-material/Check";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { formatTime, formatDate } from "@/utils/dateUtils";
import { DEFAULT_CHAT_AVATAR } from "@/utils/messageConstants";

export const Chat = ({ chat }) => {
    //console.log("chat", chat);

    const { title, last_message, updated_at, avatar, unread_messages_count } =
        chat;
    const truncatedMessage =
        last_message?.text?.length > 20
            ? last_message?.text?.slice(0, 20) + "..."
            : last_message?.text;

    const messageFiles = last_message?.files
        .map((file) => file.item.split("/").pop())
        .join(", ");

    const truncatedMessageFiles =
        messageFiles?.length > 40
            ? messageFiles.slice(0, 40) + "..."
            : messageFiles;

    return (
        <div className="chat">
            <img
                src={avatar || DEFAULT_CHAT_AVATAR}
                alt={`${title} avatar`}
                className="chat-image"
            />

            <div className="chat-main">
                <h2>{title}</h2>
                <p>{truncatedMessage || truncatedMessageFiles}</p>
            </div>

            <div className="chat-info">
                <p className="time">
                    {formatDate(updated_at)} {formatTime(updated_at)}
                </p>
                {unread_messages_count > 0 &&
                    last_message?.sender?.id !==
                        localStorage.getItem("userId") && (
                        <span className="unread">{unread_messages_count}</span>
                    )}

                {last_message?.sender?.id === localStorage.getItem("userId") &&
                    last_message?.was_read_by?.length === 1 && <CheckIcon />}
                {last_message?.sender?.id === localStorage.getItem("userId") &&
                    last_message?.was_read_by?.length > 1 && <DoneAllIcon />}
            </div>
        </div>
    );
};
