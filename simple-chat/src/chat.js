import "./chat.css";
import "./index.css";
import { createHeader } from "./components/Header/header.js";
import { createFooter } from "./components/Footer/footer.js";

const urlParams = new URLSearchParams(window.location.search);
const chatId = parseInt(urlParams.get("chatId"), 10);
const chats = JSON.parse(localStorage.getItem("chats")) || [];
const currentChat = chats.find((chat) => chat.chatId === chatId);

if (!currentChat) {
    alert("Chat not found!");
    window.location.href = "/2024-2-VK-EDU-Frontend-R-Alimkhan/";
}

currentChat.messages.forEach((message) => {
    if (message.type === "received" && message.status === "unread") {
        message.status = "read";
    }
});
localStorage.setItem("chats", JSON.stringify(chats));

const app = document.querySelector(".chat-container");
app.prepend(
    createHeader(
        currentChat.chatName,
        "personalChat",
        currentChat.chatId,
        currentChat.avatar,
        currentChat.status
    )
);
app.appendChild(createFooter());

const chatMain = document.querySelector(".chat-main");

currentChat.messages.forEach(addMessageToChat);

document.querySelector(".form-input").addEventListener("keypress", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
    }
});
document.querySelector(".send").addEventListener("click", sendMessage);

function sendMessage() {
    const messageInput = document.querySelector(".form-input");
    const messageText = messageInput.value.trim();

    if (!messageText) return;

    const message = {
        text: messageText,
        time: new Date().toLocaleTimeString("ru-RU", {
            hour: "numeric",
            minute: "numeric",
        }),
        type: "sent",
        status: "unread",
    };

    currentChat.messages.push(message);
    localStorage.setItem("chats", JSON.stringify(chats));
    addMessageToChat(message);
    messageInput.value = "";
    messageInput.style.height = "auto";
}

function addMessageToChat(message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", message.type);
    const messageContent = document.createElement("span");
    messageContent.innerText = message.text;

    const messageInfo = document.createElement("div");
    messageInfo.classList.add("message-time");

    const messageTime = document.createElement("span");
    messageTime.innerText = message.time;

    messageInfo.appendChild(messageTime);

    if (message.type === "sent") {
        const messageStatus = document.createElement("span");
        messageStatus.classList.add("material-symbols-outlined");
        messageStatus.innerText =
            message.status === "unread" ? "check" : "done_all";
        messageInfo.appendChild(messageStatus);
    }

    messageElement.appendChild(messageContent);
    messageElement.appendChild(messageInfo);

    chatMain.prepend(messageElement);

    setTimeout(() => {
        messageElement.classList.add("visible");
    }, 10);
}

document
    .querySelector(".form-input")
    .addEventListener("input", adjustTextareaHeight);

function adjustTextareaHeight() {
    const textarea = document.querySelector(".form-input");
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
}
