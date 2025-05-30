const {Router} = require("express");
const getIndexView = require("../controllers/getIndexView.js");
const getNewMessageForm = require("../controllers/getNewMessageForm.js");


const indexRouter = Router();


indexRouter.get("/", getIndexView);
indexRouter.get("/new", getNewMessageForm);


module.exports = indexRouter;