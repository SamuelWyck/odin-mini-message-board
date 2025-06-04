const asyncHandler = require("express-async-handler");
const db = require("../db/querys.js");


const addNewMessage = asyncHandler(async function(req, res) {
    const user = req.body.user;
    const text = req.body.text;

    if (!text || !user) {
        res.redirect("/");
        return;
    }
    
    await db.addMessage(text, user, new Date());

    res.redirect("/");
});


module.exports = addNewMessage;