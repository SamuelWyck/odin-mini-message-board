const {format} = require("date-fns");


function getNewMessageForm(req, res) {
    const date = format(new Date(), "y-MM-dd");
    res.render("newMessage", {date: date});  
};


module.exports = getNewMessageForm;