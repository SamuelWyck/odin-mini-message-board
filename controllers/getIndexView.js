const asyncHandler = require("express-async-handler");

const getIndexView = asyncHandler(async function(req, res) {
    return res.send("Index");
});


module.exports = getIndexView;