function loadChat() {
    const chatData = [
        {
            chatId: 1,
            chatName: "Max Verstappen",
            status: "online",
            avatar: "https://i3.wp.com/sneg.top/uploads/posts/2023-04/1680839184_sneg-top-p-gonshchik-kartinka-instagram-33.jpg?ssl=1",
            messages: [
                {
                    text: "Hey! I'm good, thanks. How about you?",
                    time: "10:00",
                    type: "received",
                    status: "read",
                },
                {
                    text: "Just got back from the race!",
                    time: "10:05",
                    type: "sent",
                    status: "unread",
                },
            ],
        },
        {
            chatId: 2,
            chatName: "Lewis Hamilton",
            status: "Был(а) 5 минут назад",
            avatar: "https://i.ytimg.com/vi/DAz2UrNQb6s/maxresdefault.jpg",
            messages: [
                {
                    text: "Looking forward to it!",
                    time: "9:00",
                    type: "sent",
                    status: "read",
                },
                {
                    text: "Have a safe trip!",
                    time: "9:30",
                    type: "received",
                    status: "read",
                },
            ],
        },
        {
            chatId: 3,
            chatName: "Lando Norris",
            status: "Был(а) в сети 3 часа назад",
            avatar: "https://avatars.mds.yandex.net/i?id=92891419564e20cacc1b6e33802a2215_l-7553521-images-thumbs&n=13",
            messages: [
                {
                    text: "Sounds good! Where should we meet?",
                    time: "8:00",
                    type: "sent",
                    status: "read",
                },
                {
                    text: "At the usual spot?",
                    time: "8:05",
                    type: "received",
                    status: "unread",
                },
                {
                    text: "Don't forget to bring the tickets!",
                    time: "8:10",
                    type: "received",
                    status: "unread",
                },
            ],
        },
    ];

    if (!localStorage.getItem("chats")) {
        localStorage.setItem("chats", JSON.stringify(chatData));
        console.log("Chat data loaded into localStorage");
    }
}

export default loadChat;
