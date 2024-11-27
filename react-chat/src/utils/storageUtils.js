export const getChatsFromStorage = () =>
    JSON.parse(localStorage.getItem("chats")) || [];

export const saveChatsToStorage = (chats) =>
    localStorage.setItem("chats", JSON.stringify(chats));

export const getUserInfoFromStorage = () =>
    JSON.parse(localStorage.getItem("userInfo")) || {};
