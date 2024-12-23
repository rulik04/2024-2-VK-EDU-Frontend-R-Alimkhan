// // import { useState, useEffect, useRef } from "react";
// // import AttachFileIcon from "@mui/icons-material/AttachFile";
// // import SendIcon from "@mui/icons-material/Send";
// // import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
// // import "./Footer.scss";
// // import { sendMessage } from "@/services/chat";
// // import { useParams } from "react-router-dom";

// // export const Footer = ({ onOpenModal }) => {
// //     const [messageText, setMessageText] = useState("");
// //     const textareaRef = useRef(null);
// //     const { chatId } = useParams();

// //     const send = async () => {
// //         try {
// //             const response = await sendMessage(chatId, messageText);
// //             console.log("Message sent:", response);
// //         } catch (error) {
// //             console.error("Error sending message:", error);
// //         }

// //         setMessageText("");

// //         if (textareaRef.current) {
// //             textareaRef.current.style.height = "auto";
// //         }
// //     };

// //     const handleKeyPress = (event) => {
// //         if (event.key === "Enter" && !event.shiftKey) {
// //             event.preventDefault();
// //             send();
// //         }
// //     };

// //     useEffect(() => {
// //         if (textareaRef.current) {
// //             textareaRef.current.style.height = "auto";
// //             textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
// //         }
// //     }, [messageText]);

// //     return (
// //         <footer className="chat-footer">
// //             <textarea
// //                 ref={textareaRef}
// //                 className="form-input"
// //                 placeholder="Write a message..."
// //                 rows={1}
// //                 name="message-text"
// //                 value={messageText}
// //                 onChange={(e) => setMessageText(e.target.value)}
// //                 onKeyDown={handleKeyPress}
// //             />
// //             <AttachFileIcon className="attachment" onClick={onOpenModal} />

// //             <MicNoneOutlinedIcon className="mic" />

// //             <SendIcon className="send" onClick={send} />
// //         </footer>
// //     );
// // };

// import { useState, useEffect, useRef } from "react";
// import AttachFileIcon from "@mui/icons-material/AttachFile";
// import SendIcon from "@mui/icons-material/Send";
// import { AudioRecorder } from "@/components/AudioRecorder/AudioRecorder";

// import "./Footer.scss";
// import { sendMessage } from "@/services/chat";
// import { useParams } from "react-router-dom";

// export const Footer = ({ onOpenModal }) => {
//     const [messageText, setMessageText] = useState("");
//     const [audioBlob, setAudioBlob] = useState(null);
//     const textareaRef = useRef(null);
//     const { chatId } = useParams();

//     const send = async () => {
//         try {
//             const formData = new FormData();
//             formData.append("chat", chatId);
//             if (audioBlob) {
//                 console.log("audioBlob:", audioBlob);
//                 console.log(typeof audioBlob);
//                 formData.append("voice", audioBlob, "audio_message.wav");
//                 console.log("formData:", formData);
//                 const response = await sendMessage(chatId, formData);
//                 console.log("Audio message sent:", response);
//                 setAudioBlob(null);
//             } else {
//                 formData.append("text", messageText);
//                 const response = await sendMessage(chatId, formData);
//                 console.log("Message sent:", response);
//             }
//         } catch (error) {
//             console.error("Error sending message:", error);
//         }

//         setMessageText("");

//         if (textareaRef.current) {
//             textareaRef.current.style.height = "auto";
//         }
//     };

//     const handleKeyPress = (event) => {
//         if (event.key === "Enter" && !event.shiftKey) {
//             event.preventDefault();
//             send();
//         }
//     };

//     useEffect(() => {
//         if (textareaRef.current) {
//             textareaRef.current.style.height = "auto";
//             textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
//         }
//     }, [messageText]);

//     return (
//         <footer className="chat-footer">
//             <textarea
//                 ref={textareaRef}
//                 className="form-input"
//                 placeholder="Write a message..."
//                 rows={1}
//                 name="message-text"
//                 value={messageText}
//                 onChange={(e) => setMessageText(e.target.value)}
//                 onKeyDown={handleKeyPress}
//             />
//             <AttachFileIcon className="attachment" onClick={onOpenModal} />

//             <AudioRecorder setAudioBlob={setAudioBlob} />

//             <SendIcon className="send" onClick={send} />
//         </footer>
//     );
// };

import { useState, useRef } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import { VoiceRecorder } from "@/components/VoiceRecorder/VoiceRecorder";
import "./Footer.scss";
import { sendMessage } from "@/services/chat";
import { useParams } from "react-router-dom";

export const Footer = ({ onOpenModal }) => {
    const [messageText, setMessageText] = useState("");
    const [messageVoice, setMessageVoice] = useState(null);
    const textareaRef = useRef(null);
    const { chatId } = useParams();

    const send = async (voiceBlob = null) => {
        try {
            const formData = new FormData();
            formData.append("chat", chatId);
            if (messageText) formData.append("text", messageText);
            if (voiceBlob)
                formData.append("voice", voiceBlob, "audio_message.wav");

            const response = await sendMessage(chatId, formData);
            console.log("Message sent:", response);

            setMessageText(""); // Reset text input
            if (textareaRef.current) {
                textareaRef.current.style.height = "auto";
            }
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            send();
        }
    };

    return (
        <footer className="chat-footer">
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
            <AttachFileIcon className="attachment" onClick={onOpenModal} />
            <VoiceRecorder
                onStopRecording={(audioBlob) => setMessageVoice(audioBlob)}
                onRecordingUpdate={(audioBlob) => setMessageVoice(audioBlob)} // Передаем частичные данные
            />
            <SendIcon className="send" onClick={() => send(messageVoice)} />
        </footer>
    );
};
