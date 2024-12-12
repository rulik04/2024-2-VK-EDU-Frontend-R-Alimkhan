import { login } from "@/services/auth";
import { useState } from "react";
import "./LoginPage.scss";
import { Link } from "react-router-dom";

export const LoginPage = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    console.log("formData", formData);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await login(formData);
            console.log("Login successful:", response);
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <div className="login-section">
            <form onSubmit={handleSubmit} className="login-form">
                <h1>Login Page</h1>

                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={formData.username}
                    onChange={handleInputChange}
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />

                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Do not have an account?</p>
                    <Link to="/register" className="register">
                        Register
                    </Link>
                </div>
            </form>
        </div>
    );
};
