import "./chat.css";

export function createChat(
    chatId,
    chatName,
    lastMessage,
    time,
    isRead,
    avatar,
    unread
) {
    const chat = document.createElement("div");
    chat.className = "chat";
    const chatImage = document.createElement("img");
    chatImage.src = avatar;
    chatImage.className = "chat-image";

    const chatMain = document.createElement("div");
    chatMain.className = "chat-main";

    const chatTitle = document.createElement("h2");
    chatTitle.innerText = chatName;
    chatMain.appendChild(chatTitle);

    const chatLastMessage = document.createElement("p");

    if (lastMessage.length > 20) {
        lastMessage = lastMessage.slice(0, 20) + "...";
    }
    chatLastMessage.innerText = lastMessage;
    console.log(lastMessage);
    chatMain.appendChild(chatLastMessage);

    chat.appendChild(chatImage);
    chat.appendChild(chatMain);

    const chatInfo = document.createElement("div");
    chatInfo.className = "chat-info";

    const lastMessageTime = document.createElement("p");
    lastMessageTime.className = "time";
    lastMessageTime.innerText = time;
    chatInfo.appendChild(lastMessageTime);

    const checked = document.createElement("span");
    checked.className = "material-symbols-outlined";
    if (isRead == "read") {
        checked.innerText = "done_all";
        chatInfo.appendChild(checked);
    } else if (isRead == "unread") {
        checked.innerText = "check";
        chatInfo.appendChild(checked);
    }
    if (unread > 0) {
        const unreadMessages = document.createElement("span");
        unreadMessages.className = "unread";
        unreadMessages.innerText = unread;
        chatInfo.appendChild(unreadMessages);
    }

    chat.appendChild(chatInfo);

    chat.addEventListener("click", () => {
        window.location.href = `/chat.html?chatId=${chatId}`;
    });

    return chat;
}
