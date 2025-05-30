const asyncHandler = require("express-async-handler");
const db = require("../db.js");


const getIndexView = asyncHandler(async function(req, res) {
    const messages = await db.getAllMessages();

    if (!messages) {
        throw new Error("Server error");
    }

    return res.render("index", {messages: messages});
});


module.exports = getIndexView;