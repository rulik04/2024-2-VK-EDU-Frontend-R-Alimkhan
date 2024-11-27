import { Header } from "@/components/Header/Header";
import { useState } from "react";
import { getUserInfoFromStorage } from "@/utils/storageUtils";
import "./ProfilePage.scss";

export const ProfilePage = () => {
    const { fullName, username, bio, image } = getUserInfoFromStorage();

    const [formData, setFormData] = useState({
        fullName,
        username,
        bio,
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Profile data saved successfully!");

        localStorage.setItem("userInfo", JSON.stringify(formData));
    };

    return (
        <>
            <Header title="Profile" />

            <div className="profile">
                <form onSubmit={handleSubmit} className="profile-form">
                    <div className="profile-image">
                        <img src={image} alt="Profile Avatar" />
                    </div>

                    <div className="profile-form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="profile-form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                        <small>Minimum length is 5 characters</small>
                    </div>

                    <div className="profile-form-group">
                        <label htmlFor="bio">Bio</label>
                        <input
                            type="text"
                            id="bio"
                            value={formData.bio}
                            onChange={handleInputChange}
                        />
                    </div>

                    <button type="submit" className="profile-form-submit">
                        Save
                    </button>
                </form>
            </div>
        </>
    );
};
