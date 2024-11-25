export const formatTime = (date) =>
    new Date(date).toLocaleTimeString("ru-RU", {
        hour: "numeric",
        minute: "numeric",
    });
