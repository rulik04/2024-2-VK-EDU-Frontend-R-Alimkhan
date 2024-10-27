import "./index.css";
import "./loadChats.js";
import { createHeader } from "./components/Header/header.js";
import { createChat } from "./components/Chat/chat.js";
import { createFloatingButton } from "./components/FloatingButton/floatingButton.js";

const DEFAULT_AVATAR_URL =
    "https://www.clipartmax.com/png/full/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png";

const app = document.querySelector(".chat-container");
app.appendChild(createHeader("Messenger", "chats"));

let chats = JSON.parse(localStorage.getItem("chats")) || [];
chats = chats.filter((chat) => chat.messages.length > 0);
localStorage.setItem("chats", JSON.stringify(chats));

const displayChats = () => {
    if (chats.length === 0) {
        app.appendChild(
            (document.createElement("p").innerText = "No chats available")
        );
        return;
    }

    chats.forEach((chat) => {
        const lastMessage = chat.messages[chat.messages.length - 1];
        const unreadCount = chat.messages.filter(
            (msg) => msg.type === "received" && msg.status === "unread"
        ).length;
        const lastMessageStatus =
            lastMessage.type === "sent" ? lastMessage.status : "";

        app.appendChild(
            createChat(
                chat.chatId,
                chat.chatName,
                lastMessage.text,
                lastMessage.time,
                lastMessageStatus,
                chat.avatar || DEFAULT_AVATAR_URL,
                unreadCount
            )
        );
    });
};
displayChats();

const newChatBtn = createFloatingButton();
newChatBtn.addEventListener("click", () => {
    const chatName = prompt("Enter the name of the new contact:");
    if (!chatName) return;

    const newChat = {
        chatId: chats.length + 1,
        chatName,
        avatar: DEFAULT_AVATAR_URL,
        messages: [],
    };
    chats.push(newChat);
    localStorage.setItem("chats", JSON.stringify(chats));
    window.location.href = `/chat.html?chatId=${newChat.chatId}`;
});
app.appendChild(newChatBtn);
