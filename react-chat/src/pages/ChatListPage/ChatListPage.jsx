import { useState } from "react";
import { ChatList } from "@/modules/ChatList/ChatList";
import { Header } from "@/components/Header/Header";
import { FloatingButton } from "@/components/FloatingButton/FloatingButton";
import { UserListModal } from "@/modules/UserListModal/UserListModal";
import { getAllUsers } from "@/services/user";
import { useEffect } from "react";

export const ChatListPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getAllUsers();
                setUsers(response.results);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <>
            <Header
                title="Messenger"
                onSearchChange={(query) => setSearchQuery(query)}
            />
            <ChatList searchQuery={searchQuery} />
            <FloatingButton onOpenModal={() => setIsModalOpen(true)} />

            <UserListModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                users={users}
            />
        </>
    );
};
