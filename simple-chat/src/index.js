import "./index.css";

document
    .querySelector(".form-input")
    .addEventListener("keypress", function (event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    });

document.querySelector(".send").addEventListener("click", sendMessage);

function sendMessage() {
    const messageInput = document.querySelector(".form-input");
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        const currentMessages =
            JSON.parse(localStorage.getItem("chatMessages")) || [];
        const message = {
            text: messageText,
            time: new Date().toLocaleTimeString("ru-RU", {
                hour: "numeric",
                minute: "numeric",
            }),
            type: "sent",
        };

        currentMessages.push(message);
        localStorage.setItem("chatMessages", JSON.stringify(currentMessages));

        addMessageToChat(message);
        messageInput.value = "";
        messageInput.style.height = "auto";
    }
}

function addMessageToChat(message) {
    const chatMain = document.querySelector(".chat-main");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");

    messageElement.classList.add(message.type === "sent" ? "sent" : "received");

    messageElement.innerHTML = `
        <span>${message.text}</span>
        <div class="message-time">
            <span>${message.time}</span>
            <span class="material-symbols-outlined">check</span>
        </div>
    `;

    chatMain.appendChild(messageElement);
    chatMain.scrollTop = chatMain.scrollHeight;
}

window.addEventListener("load", function () {
    const storedMessages =
        JSON.parse(localStorage.getItem("chatMessages")) || [];
    storedMessages.forEach(addMessageToChat);
});

const textarea = document.querySelector(".form-input");
textarea.addEventListener("input", () => {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
});
