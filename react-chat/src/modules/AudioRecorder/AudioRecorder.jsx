import { useState, useRef, useEffect } from "react";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CancelIcon from "@mui/icons-material/Cancel";
import SendIcon from "@mui/icons-material/Send";
import { useParams } from "react-router-dom";
import { sendMessage } from "@/services/chat";

export const AudioRecorder = ({ setStartRecord }) => {
    const [isRecording, setIsRecording] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [recordTime, setRecordTime] = useState(0);
    const [isCanceled, setIsCanceled] = useState(false);
    const mediaRecorderRef = useRef(null);
    const chunksRef = useRef([]);
    const timerRef = useRef(null);

    const { chatId } = useParams();

    useEffect(() => {
        startRecording();

        return () => {
            stopAllRecording();
        };
    }, []);

    const startRecording = async () => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            console.error("Audio recording is not supported in this browser.");
            return;
        }

        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
            });
            const recorder = new MediaRecorder(stream);

            recorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    chunksRef.current.push(event.data);
                }
            };

            recorder.onstop = () => {
                if (isCanceled) {
                    return; // Exit early if the recording was canceled
                }
                if (chunksRef.current.length) {
                    const audioBlob = new Blob(chunksRef.current, {
                        type: "audio/wav",
                    });
                    send(audioBlob); // Send the recorded audio
                }
                chunksRef.current = [];
                setStartRecord(false);
            };

            recorder.start();
            mediaRecorderRef.current = recorder;
            setIsRecording(true);
            setIsPaused(false);

            startTimer();
        } catch (error) {
            console.error("Error accessing microphone:", error);
        }
    };

    const sendRecord = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            stopAllRecording();
        }
    };

    const pauseRecording = () => {
        if (mediaRecorderRef.current?.state === "recording") {
            mediaRecorderRef.current.pause();
            setIsPaused(true);
            stopTimer(); // Останавливаем таймер
        }
    };

    const resumeRecording = () => {
        if (mediaRecorderRef.current?.state === "paused") {
            mediaRecorderRef.current.resume();
            setIsPaused(false);
            startTimer(); // Перезапускаем таймер
        }
    };

    const cancelRecording = () => {
        setIsCanceled(true); // Set the canceled flag
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.onstop = null; // Prevent the onstop handler from sending
            mediaRecorderRef.current.stream
                .getTracks()
                .forEach((track) => track.stop());
            mediaRecorderRef.current.stop();
        }
        chunksRef.current = []; // Clear the recorded chunks
        stopAllRecording();
        setStartRecord(false); // Close the recorder UI
    };

    const stopAllRecording = () => {
        setIsRecording(false);
        setIsPaused(false);
        stopTimer();
        setRecordTime(0);
        setIsCanceled(false);
    };
    const stopTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current); // Очищаем текущий таймер
            timerRef.current = null; // Обнуляем ссылку на таймер
        }
    };

    const startTimer = () => {
        stopTimer(); // Убедимся, что предыдущий таймер остановлен
        timerRef.current = setInterval(() => {
            setRecordTime((prev) => prev + 1);
        }, 1000);
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    const send = async (audioBlob) => {
        try {
            const formData = new FormData();
            formData.append("chat", chatId);
            formData.append("voice", audioBlob, "audio_message.wav");
            const response = await sendMessage(chatId, formData);
            console.log("Audio message sent:", response);
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (
        <div className="audio-recorder">
            {isRecording && (
                <div className="recording-indicator">
                    <div className="dot" />
                    <span>{formatTime(recordTime)}</span>
                </div>
            )}
            <div className="controls">
                {isRecording && !isPaused && (
                    <PauseIcon className="icon" onClick={pauseRecording} />
                )}
                {isPaused && (
                    <PlayArrowIcon className="icon" onClick={resumeRecording} />
                )}
                <CancelIcon className="icon" onClick={cancelRecording} />
                <SendIcon className="send" onClick={sendRecord} />
            </div>
        </div>
    );
};
