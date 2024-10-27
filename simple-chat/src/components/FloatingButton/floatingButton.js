import "./floatingButton.css";

export function createFloatingButton() {
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "floating-button-container";

    const floatingButton = document.createElement("span");
    floatingButton.className = "floating-button material-symbols-outlined";
    floatingButton.innerText = "edit";

    buttonContainer.appendChild(floatingButton);

    return buttonContainer;
}
