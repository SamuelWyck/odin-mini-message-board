const asyncHandler = require("express-async-handler");
const db = require("../db/querys.js");


const getIndexView = asyncHandler(async function(req, res) {
    const messages = await db.getAllMessages();

    return res.render("index", {messages: messages});
});


module.exports = getIndexView;