import { api } from "./api";

export const getUserInfo = async () => {
    const response = await api("user/current/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    localStorage.setItem("userId", response.id);

    return response;
};

export const getAllUsers = async () => {
    const response = await api("users/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    return response;
};

export const getUserbyUsername = async (username) => {
    const response = await api(`users?username=${username}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    return response;
};

export const getUserById = async (userId) => {
    const response = await api(`user/${userId}/`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    return response;
};

export const updateUser = async (userId, data) => {
    const formData = new FormData();

    for (const key in data) {
        if (key === "avatar" && data[key] instanceof File) {
            formData.append(key, data[key]);
        } else if (key !== "avatar") {
            formData.append(key, data[key]);
        }
    }

    const response = await api(`user/${userId}/`, {
        method: "PATCH",
        body: formData,
    });
    return response;
};
