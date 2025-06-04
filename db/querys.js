const pool = require("./pool.js");
const {format} = require("date-fns");


const dateFormat = "yyyy-MM-dd";
const frontEndDateFormat = "Mon dd yyyy";

async function getAllMessages() {
    console.log("getallmessages")
    console.log(process.env.DB)
    const {rows} = await pool.query(
        "SELECT id, username, TO_CHAR(date, $1) AS date, text, icon FROM messages",
        [frontEndDateFormat]
    );
    return rows;
};


async function addMessage(text, username, date) {
    const icon = username[0].toUpperCase();
    date = format(date, dateFormat);
    await pool.query(
        "INSERT INTO messages (username, text, date, icon) VALUES ($1, $2, $3, $4)",
        [username, text, date, icon]
    );
};


async function getMessage(id) {
    const {rows} = await pool.query(
        "SELECT id, username, TO_CHAR(date, $1) AS date, text, icon FROM messages WHERE id = $2",
        [frontEndDateFormat, id]
    );
    return rows[0];
};


module.exports = {
    getAllMessages,
    addMessage,
    getMessage
};