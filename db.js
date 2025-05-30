const {format} = require("date-fns");

const formatString = "MMM d y";
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: format(new Date(), formatString),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: format(new Date(), formatString),
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
            added: format(new Date(), formatString),
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