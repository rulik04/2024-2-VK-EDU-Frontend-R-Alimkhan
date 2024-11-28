import { ChatList } from "../../components/ChatList/ChatList";
import { Header } from "../../components/Header/Header";
import { FloatingButton } from "../../components/FloatingButton/FloatingButton";

export const ChatListPage = ({ onChatClick }) => {
    return (
        <>
            <Header title="Messenger" />
            <ChatList onChatClick={onChatClick} />
            <FloatingButton onChatClick={onChatClick} />
        </>
    );
};
