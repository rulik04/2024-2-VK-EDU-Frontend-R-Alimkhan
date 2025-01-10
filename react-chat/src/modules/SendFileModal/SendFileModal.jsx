import { Modal } from "@/components/Modal/Modal";
import "./SendFileModal.scss";
import { useState, useRef } from "react";
import { sendMessage } from "@/services/chat";
import { useParams } from "react-router-dom";

export const SendFileModal = ({ isOpen, onClose }) => {
    const [files, setFiles] = useState(null);
    const inputRef = useRef(null);
    const { chatId } = useParams();

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        setFiles(files);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        Array.from(files).forEach((file) => {
            formData.append("files", file);
        });
        formData.append("chat", chatId);

        try {
            const response = await sendMessage(chatId, formData);
            console.log("Files sent:", response);
        } catch (error) {
            console.error("Error sending files:", error);
        }
        setFiles(null);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            {files ? (
                <div className="uploads">
                    {Array.from(files).map((file) => (
                        <div key={file.name} className="file">
                            <p>{file.name}</p>
                        </div>
                    ))}

                    <div className="action">
                        <button onClick={() => setFiles(null)} className="btn">
                            Clear
                        </button>
                        <button onClick={handleUpload} className="btn">
                            Upload
                        </button>
                    </div>
                </div>
            ) : (
                <div
                    className="dropzone"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    <h3>Drag and Drop files to upload</h3>
                    <h4>Or</h4>
                    <input
                        type="file"
                        multiple
                        onChange={(e) => setFiles(e.target.files)}
                        hidden
                        ref={inputRef}
                    />
                    <button
                        onClick={() => inputRef.current.click()}
                        className="SelectFile"
                    >
                        {" "}
                        Select File{" "}
                    </button>
                </div>
            )}
        </Modal>
    );
};
