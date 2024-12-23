import CheckIcon from "@mui/icons-material/Check";
import DoneAllIcon from "@mui/icons-material/DoneAll";

import "./Message.scss";
import { formatTime, formatDate } from "@/utils/dateUtils";

export const Message = ({ message, userId }) => {
    console.log("message", message);
    return (
        <>
            <div
                className={`message ${
                    message.sender.id === userId ? "sent" : "received"
                }`}
            >
                <span className="message-content">
                    {message.text ||
                        (message?.voice && (
                            <audio
                                controls
                                src={message?.voice}
                                className="message-voice"
                            >
                                Your browser does not support the audio element.
                            </audio>
                        )) ||
                        message.files.map((file) =>
                            file.item.includes(".png") ||
                            file.item.includes(".jpg") ? (
                                <img
                                    key={file.item}
                                    src={file.item}
                                    alt="file"
                                    className="message-image"
                                />
                            ) : (
                                <a
                                    key={file.item}
                                    href={file.item}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="message-file"
                                >
                                    {file.item.split("/").pop()}
                                </a>
                            )
                        )}
                </span>
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
