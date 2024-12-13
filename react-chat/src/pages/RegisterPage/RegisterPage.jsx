import { register } from "@/services/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterPage.scss";

export const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        first_name: "",
        last_name: "",
        bio: "",
        avatar: null,
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFormData((prevUser) => ({
                ...prevUser,
                avatar: file,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("formData", formData);

        try {
            await register(formData);
            console.log("Registration successful!");
        } catch (error) {
            console.error("Error registering:", error);
        }
    };

    return (
        <div className="register-section">
            <form onSubmit={handleSubmit} className="register-form">
                <h1>Register Page</h1>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />

                <div className="name_surname">
                    <div>
                        <label htmlFor="first_name">First Name:</label>
                        <input
                            type="text"
                            id="first_name"
                            value={formData.first_name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="last_name">Last Name:</label>
                        <input
                            type="text"
                            id="last_name"
                            value={formData.last_name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>

                <label htmlFor="bio">Bio:</label>
                <textarea
                    id="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                />

                <label htmlFor="avatar">Avatar:</label>
                <input
                    type="file"
                    id="avatar"
                    accept="image/*"
                    onChange={handleAvatarChange}
                />

                <button type="submit">Register</button>

                <div className="login-link">
                    <p>Already have an account?</p>
                    <Link to="/login" className="login">
                        Login
                    </Link>
                </div>
            </form>
        </div>
    );
};
