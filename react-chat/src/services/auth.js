import { api } from "./api";
import { getUserInfo } from "./user";

export const register = async (userData) => {
    try {
        const formData = new FormData();
        const fields = [
            "username",
            "password",
            "first_name",
            "last_name",
            "bio",
        ];

        fields.forEach((field) => {
            formData.append(field, userData[field] || "");
        });

        if (userData.avatar) {
            formData.append("avatar", userData.avatar);
        }

        const response = await api("register/", {
            method: "POST",
            body: formData,
        });

        console.log("Registration successful from auth:", response);

        const loginData = {
            username: userData.username,
            password: userData.password,
        };

        await login(loginData);

        console.log("Registration successful from login:", response);

        return response;
    } catch (error) {
        console.error("Error registering:", error);
        throw error;
    }
};

export const login = async (userData) => {
    try {
        const response = await api("auth/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        });

        localStorage.setItem("accessToken", response.access);
        localStorage.setItem("refreshToken", response.refresh);

        getUserInfo();

        window.location.hash = "/";

        console.log("Login successful:", response);
        return response;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};
