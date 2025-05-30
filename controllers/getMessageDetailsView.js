const asyncHandler = require("express-async-handler");
const db = require("../db.js");



const getMessageDetails = asyncHandler(async function(req, res) {
    const messageId = Number(req.params.id);
    
    const message = await db.getMessage(messageId);

    if (!message) {
        throw new Error("Message not found");
    }

    res.render("messageDetails", {message: message});
});


module.exports = getMessageDetails;