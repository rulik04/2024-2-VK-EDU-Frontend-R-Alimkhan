import { Modal } from "@/components/Modal/Modal";
import "./UserListModal.scss";
import { createChat } from "@/services/chat";
import { UserList } from "@/components/UserList/UserList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserListModal = ({ users, onClose, isOpen }) => {
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [chatName, setChatName] = useState("");
    const navigate = useNavigate();

    const handleUserClick = (user) => {
        setSelectedUsers((prev) =>
            prev.includes(user)
                ? prev.filter((selectedUser) => selectedUser !== user)
                : [...prev, user]
        );
    };

    const handleCreateChat = async () => {
        if (selectedUsers.length === 0) {
            alert("Please select at least one user.");
            return;
        }
        if (selectedUsers.length >= 2 && chatName === "") {
            alert("Please enter chat name.");
            return;
        }
        console.log("chatName", chatName);
        const newChatId = await createChat(selectedUsers, chatName);
        onClose();
        navigate(`/chat/${newChatId.id}`);
    };

    const handleChatNameChange = (event) => {
        console.log(event.target.value);
        setChatName(event.target.value);
    };

    return (
        <Modal onClose={onClose} isOpen={isOpen}>
            <h2>Создать чат</h2>

            <label htmlFor="chat-name">Название чата</label>
            <input
                type="text"
                id="chatName"
                onChange={handleChatNameChange}
                value={
                    selectedUsers.length === 1
                        ? selectedUsers[0].first_name +
                          " " +
                          selectedUsers[0].last_name
                        : chatName
                }
                required
            />

            <p>Выберите пользователей для создания группового чата</p>

            <ul className="user-list">
                {users.map((user) => (
                    <UserList
                        key={user.id}
                        user={user}
                        onClick={() => handleUserClick(user)}
                    >
                        <div
                            className={`user-select-circle ${
                                selectedUsers.includes(user) ? "selected" : ""
                            }`}
                        />
                    </UserList>
                ))}
            </ul>
            <button className="create-chat-button" onClick={handleCreateChat}>
                Create Chat
            </button>
        </Modal>
    );
};
