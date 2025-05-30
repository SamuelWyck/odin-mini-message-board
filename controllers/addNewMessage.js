const asyncHandler = require("express-async-handler");
const db = require("../db.js");


const addNewMessage = asyncHandler(async function(req, res) {
    const user = req.body.user;
    const text = req.body.text;

    if (!text || !user) {
        res.redirect("/");
        return;
    }
    
    const success = await db.addMessage(text, user, new Date());

    if (!success) {
        throw new Error("Server error");
    }

    res.redirect("/");
});


module.exports = addNewMessage;