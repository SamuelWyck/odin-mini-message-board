const {format} = require("date-fns");

const formatString = "MMM d y";
const messages = [
    {
        id: 0,
        text: "Hi there!",
        user: "Amando",
        added: format(new Date(), formatString),
    },
    {
        id: 1,
        text: "Hello World!",
        user: "Charles",
        added: format(new Date(), formatString),
    },
];


let idNum = 2;
function getId() {
    const id = idNum;
    idNum += 1;
    return id;
};


async function getAllMessages() {
    return messages;
};

async function addMessage(text, user, date) {
    messages.push(
        {
            id: getId(),
            text: text,
            user: user,
            added: format(date, formatString),
        }
    );
    return true;
};

async function deleteMessage(id) {
    const newMessages = [];
    for (let message of messages) {
        if (message.id === id) {
            continue;
        }
        newMessages.push(message);
    }
    messages = newMessages;
};

async function getMessage(id) {
    for (let message of messages) {
        if (message.id === id) {
            return message;
        }
    }
};


module.exports = {
    getAllMessages,
    addMessage,
    deleteMessage
};