import "./footer.css";

export function createFooter() {
    const footer = document.createElement("footer");
    footer.className = "chat-footer";

    const input = document.createElement("textarea");
    input.className = "form-input";
    input.placeholder = "Написать сообщение...";
    input.rows = 1;
    input.name = "message-text";

    const attachBtn = document.createElement("span");
    attachBtn.className = "material-symbols-outlined attachment";
    attachBtn.innerText = "attachment";

    const sendBtn = document.createElement("span");
    sendBtn.className = "material-symbols-outlined send";
    sendBtn.innerText = "send";

    footer.appendChild(input);
    footer.appendChild(attachBtn);
    footer.appendChild(sendBtn);

    return footer;
}
