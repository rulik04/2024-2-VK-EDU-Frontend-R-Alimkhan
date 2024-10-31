import "./dropdown.css";

export function createDropdown(items, chatId) {
    console.log(chatId);
    const dropdown = document.createElement("div");
    dropdown.className = "dropdown";

    items.forEach((item) => {
        const dropdownItem = document.createElement("div");
        dropdownItem.className = "dropdown-item";
        dropdownItem.innerText = item;

        dropdownItem.addEventListener("click", () => {
            if (item === "Delete") {
                deleteChat(chatId);
            }
        });

        dropdown.appendChild(dropdownItem);
    });

    return dropdown;
}

function deleteChat(chatId) {
    let chats = JSON.parse(localStorage.getItem("chats")) || [];

    chats = chats.filter((chat) => chat.chatId !== chatId);
    localStorage.setItem("chats", JSON.stringify(chats));

    window.location.pathname = "/2024-2-VK-EDU-Frontend-R-Alimkhan/";
}
