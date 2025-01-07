const BASE_URL = "https://vkedu-fullstack-div2.ru/api/";

export const api = async (endpoint, options = {}) => {
    const accessToken = localStorage.getItem("accessToken");

    const shouldSkipAuth = endpoint === "register/";

    const headers = {
        ...(accessToken &&
            !shouldSkipAuth && { Authorization: `Bearer ${accessToken}` }),
        ...options.headers,
    };

    const isFormData = options.body instanceof FormData;

    const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: isFormData
            ? { Authorization: headers.Authorization }
            : headers,
    });

    if (response.status === 401) {
        await refreshTokens();
        return api(endpoint, options);
    }

    if (!response.ok) {
        const text = await response.text();
        console.error("API error details (raw):", text);
        try {
            const error = JSON.parse(text);
            console.error("Parsed API error details:", error);
            throw new Error(error.message || "API error");
        } catch {
            console.error("Failed to parse API error details", text);
            throw new Error("API returned non-JSON response");
        }
    }

    return response.json();
};

const refreshTokens = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
        console.error("No refresh token found");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        console.error("Redirecting to regioster page...");
        window.location.hash = "/register";
        return;
    }

    try {
        const response = await fetch(`${BASE_URL}auth/refresh/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refresh: refreshToken }),
        });

        if (!response.ok) {
            throw new Error("Failed to refresh token");
        }

        const data = await response.json();
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
    } catch (error) {
        console.error("Token refresh failed:", error);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        console.error("Redirecting to login page...");
        window.location.hash = "/login";
    }
};
