import "./Modal.scss";

export const Modal = ({ children, onClose, isOpen }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
};
