import { Header } from "@/components/Header/Header";
import { useState, useEffect } from "react";
import { getUserInfo, updateUser } from "@/services/user";
import "./ProfilePage.scss";

export const ProfilePage = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [previewAvatar, setPreviewAvatar] = useState(null);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await getUserInfo();
                setCurrentUser(response);
            } catch (error) {
                setError("Error fetching current user: " + error.message);
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCurrentUser();
    }, []);

    console.log("currentUser", currentUser);

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setCurrentUser((prevUser) => ({
            ...prevUser,
            [id]: value,
        }));
    };

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setCurrentUser((prevUser) => ({
                ...prevUser,
                avatar: file,
            }));

            setPreviewAvatar(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const updatedUser = await updateUser(currentUser.id, {
                avatar: currentUser.avatar,
                first_name: currentUser.first_name,
                last_name: currentUser.last_name,
                username: currentUser.username,
                bio: currentUser.bio,
            });

            setCurrentUser(updatedUser);
            alert("Profile updated successfully!");
        } catch (error) {
            setError("Error updating profile: " + error.message);
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Header title="Profile" />

            <div className="profile">
                {isLoading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <form onSubmit={handleSubmit} className="profile-form">
                        <div className="profile-image">
                            <img
                                src={
                                    previewAvatar ||
                                    currentUser.avatar ||
                                    "default-avatar.png"
                                } // Показываем аватар
                                alt="Profile Avatar"
                            />
                            <div className="avatar-overlay">
                                <label className="change-avatar-text">
                                    Change Avatar
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleAvatarChange}
                                    />
                                </label>
                            </div>
                        </div>

                        <div className="profile-form-group">
                            <label htmlFor="first_name">First Name</label>
                            <input
                                type="text"
                                id="first_name"
                                value={currentUser.first_name || ""}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="profile-form-group">
                            <label htmlFor="last_name">Last Name</label>
                            <input
                                type="text"
                                id="last_name"
                                value={currentUser.last_name || ""}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="profile-form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={currentUser.username || ""}
                                onChange={handleInputChange}
                            />
                            <small>Minimum length is 5 characters</small>
                        </div>

                        <div className="profile-form-group">
                            <label htmlFor="bio">Bio</label>
                            <input
                                type="text"
                                id="bio"
                                value={currentUser.bio || ""}
                                onChange={handleInputChange}
                            />
                        </div>

                        <button
                            type="submit"
                            className="profile-form-submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Saving..." : "Save"}
                        </button>
                    </form>
                )}
            </div>
        </>
    );
};
