import { api } from "./api";

export const getAllChats = async () => {
    const response = await api("chats/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    //console.log("All chats:", response);
    return response;
};

export const createChat = async (users, title) => {
    try {
        const members = users.map((user) => user.id);

        const chatData = {
            members: members,
            is_private: members.length === 1,
            title: title,
            avatar: "https://eoisaac.gallerycdn.vsassets.io/extensions/eoisaac/pychat/1.0.0/1686000250017/Microsoft.VisualStudio.Services.Icons.Default", // Можно добавить аватар чата
        };

        console.log("Creating chat with data:", chatData);

        const response = await api("chats/", {
            method: "POST",
            body: JSON.stringify(chatData),
            headers: { "Content-Type": "application/json" },
        });

        console.log("Chat created successfully:", response);
        return response;
    } catch (error) {
        console.error("Error creating chat:", error);
        throw error;
    }
};

export const getChatById = async (chatId) => {
    const response = await api(`chat/${chatId}/`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    return response;
};

export const getChatMessages = async (chatId) => {
    const params = new URLSearchParams({
        chat: chatId, // UUID of the chat
    });
    const response = await api(`messages/?${params.toString()}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    //console.log("Chat messages from chat.js:", response);
    return response;
};

export const sendMessage = async (chatId, formData) => {
    const response = await api(`messages/`, {
        method: "POST",
        body: formData,
    });
    return response;
};

export const readAllMessages = async (chatId) => {
    const params = new URLSearchParams({
        chat: chatId,
    });
    const response = await api(`messages/read_all/?${params.toString()}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });
    return response;
};

export const deleteChat = async (chatId) => {
    console.log(typeof chatId);
    const response = await api(`chat/${chatId}/`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });

    window.location.hash = "/";
    return response;
};
