

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];


async function getAllMessages() {
    return messages;
};

async function addMessage(text, user) {
    messages.push(
        {
            text: text,
            user: user,
            added: new Date(),
        }
    );
    return true;
};

async function deleteMessage(user, date) {
    const newMessages = [];
    for (let message of messages) {
        if (message.user === user && message.added === date) {
            continue;
        }
        newMessages.push(message);
    }
    messages = newMessages;
};


module.exports = {
    getAllMessages,
    addMessage,
    deleteMessage
};