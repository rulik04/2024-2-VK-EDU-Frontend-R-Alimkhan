import "./header.css";

export function createHeader(
    titleText,
    pageType,
    userAvatar = null,
    status = null
) {
    const header = document.createElement("header");
    header.className = "header";

    const container = document.createElement("div");
    container.className = "header-container";

    const btn = createIcon(
        pageType === "personalChat" ? "arrow_back" : "menu",
        () => {
            if (pageType === "personalChat") {
                window.location.href = "index.html";
            }
        }
    );

    const userInfo = document.createElement("div");
    userInfo.className = "user-info";

    const title = document.createElement("h3");
    title.className = "title";
    title.innerText = titleText;
    userInfo.appendChild(title);

    if (pageType === "personalChat") {
        const statusText = document.createElement("p");
        statusText.className = "status";
        statusText.innerText = status;
        userInfo.appendChild(statusText);
    }

    container.appendChild(btn);

    if (userAvatar) {
        const avatar = document.createElement("img");
        avatar.src = userAvatar;
        avatar.className = "avatar";
        container.appendChild(avatar);
    }

    container.appendChild(userInfo);

    const headerInfo = document.createElement("div");
    headerInfo.className = "header-info";
    headerInfo.appendChild(createIcon("search"));

    if (pageType === "personalChat") {
        headerInfo.appendChild(createIcon("more_vert"));
    }

    header.appendChild(container);
    header.appendChild(headerInfo);

    return header;
}

function createIcon(iconName, onClick = null) {
    const icon = document.createElement("span");
    icon.className = "material-symbols-outlined";
    icon.innerText = iconName;
    if (onClick) icon.addEventListener("click", onClick);
    return icon;
}
