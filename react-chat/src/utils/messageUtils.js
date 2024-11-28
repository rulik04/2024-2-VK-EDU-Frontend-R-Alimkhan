export const markMessagesAsRead = (messages) => {
    messages.forEach((message) => {
        if (message.type === "received" && message.status === "unread") {
            message.status = "read";
        }
    });
};

export const getLastMessageDetails = (chat) => {
    const lastMessage = chat.messages[chat.messages.length - 1];
    return {
        text: lastMessage?.text || "",
        time: lastMessage?.time || "",
        status: lastMessage?.type === "sent" ? lastMessage.status : "",
    };
};

export const getUnreadCount = (messages) =>
    messages.filter((msg) => msg.type === "received" && msg.status === "unread")
        .length;
