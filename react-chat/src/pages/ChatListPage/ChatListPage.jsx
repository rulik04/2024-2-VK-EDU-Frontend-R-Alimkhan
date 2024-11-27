import { useState } from "react";
import { ChatList } from "@/components/ChatList/ChatList";
import { Header } from "@/components/Header/Header";
import { FloatingButton } from "@/components/FloatingButton/FloatingButton";

export const ChatListPage = ({ onChatClick }) => {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <>
            <Header
                title="Messenger"
                onSearchChange={(query) => setSearchQuery(query)}
            />
            <ChatList searchQuery={searchQuery} />
            <FloatingButton onChatClick={onChatClick} />
        </>
    );
};
