export const formatTime = (time) =>
    new Date(time).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

export const formatDate = (time) =>
    new Date(time).toLocaleDateString([], {
        month: "short",
        day: "numeric",
    });
