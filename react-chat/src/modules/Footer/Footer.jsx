import { useState, useEffect, useRef } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import { AudioRecorder } from "@/modules/AudioRecorder/AudioRecorder";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import "./Footer.scss";
import { sendMessage } from "@/services/chat";
import { useParams } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const Footer = ({ onOpenModal }) => {
    const [messageText, setMessageText] = useState("");
    const [audioBlob, setAudioBlob] = useState(null);
    const textareaRef = useRef(null);
    const { chatId } = useParams();
    const [startRecord, setStartRecord] = useState(false);

    const send = async (messageType = "text", payload = null) => {
        try {
            const formData = new FormData();
            formData.append("chat", chatId);

            if (messageType === "audio" && audioBlob) {
                formData.append("voice", audioBlob, "audio_message.wav");
            } else if (messageType === "location" && payload) {
                formData.append("text", payload);
            } else {
                formData.append("text", messageText);
            }

            const response = await sendMessage(chatId, formData);
            console.log(`${messageType} message sent:`, response);

            if (messageType === "audio") setAudioBlob(null);
        } catch (error) {
            console.error("Error sending message:", error);
        }

        setMessageText("");

        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
        }
    };
    const sendLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const locationMessage = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
                    send("location", locationMessage);
                },
                (error) => {
                    console.error("Error fetching location:", error);
                    alert(
                        "Unable to access location. Please check your browser permissions."
                    );
                }
            );
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            send();
        }
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [messageText]);

    return (
        <footer className="chat-footer">
            {startRecord ? (
                <AudioRecorder
                    setAudioBlob={setAudioBlob}
                    setStartRecord={setStartRecord}
                />
            ) : (
                <>
                    <textarea
                        ref={textareaRef}
                        className="form-input"
                        placeholder="Write a message..."
                        rows={1}
                        name="message-text"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                    <AttachFileIcon
                        className="attachment"
                        onClick={onOpenModal}
                    />
                    <LocationOnIcon
                        className="location"
                        onClick={sendLocation}
                    />

                    <MicNoneOutlinedIcon
                        className="mic"
                        onClick={() => setStartRecord(true)}
                    />

                    <SendIcon className="send" onClick={send} />
                </>
            )}
        </footer>
    );
};
