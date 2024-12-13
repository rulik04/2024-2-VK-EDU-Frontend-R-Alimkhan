import { useState, useEffect } from "react";
import { Chat } from "@/components/Chat/Chat";
import { getAllChats } from "@/services/chat";
import { Link } from "react-router-dom";

export const ChatList = ({ searchQuery }) => {
    const [chats, setChats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChats = async () => {
            try {
                const response = await getAllChats();
                setChats(response.results);
                console.log("Chats fetched:", response.results);
            } catch (error) {
                console.error("Error fetching chats:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchChats();
    }, []);

    const filteredChats = chats.filter((chat) => {
        return chat.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    if (loading) {
        return <p>Loading chats...</p>;
    }

    return (
        <div>
            {filteredChats.length > 0 ? (
                filteredChats.map((chat) => {
                    return (
                        <Link to={`/chat/${chat.id}`} key={chat.id}>
                            <Chat chat={chat}></Chat>
                        </Link>
                    );
                })
            ) : (
                <p>No chats found.</p>
            )}
        </div>
    );
};
