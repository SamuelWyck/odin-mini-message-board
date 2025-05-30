const {Router} = require("express");
const getIndexView = require("../controllers/getIndexView.js");
const getNewMessageForm = require("../controllers/getNewMessageForm.js");
const addNewMessage = require("../controllers/addNewMessage.js");


const indexRouter = Router();


indexRouter.get("/", getIndexView);
indexRouter.get("/new", getNewMessageForm);
indexRouter.post("/new", addNewMessage);


module.exports = indexRouter;