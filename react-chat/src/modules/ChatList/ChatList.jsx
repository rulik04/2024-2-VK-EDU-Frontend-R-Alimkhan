import { Chat } from "@/components/Chat/Chat";
import { Link } from "react-router-dom";

export const ChatList = ({ searchQuery, chats }) => {
    console.log("Chats", chats);

    const filteredChats = chats.filter((chat) => {
        return chat.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
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
