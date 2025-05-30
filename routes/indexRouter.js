const {Router} = require("express");
const getIndexView = require("../controllers/getIndexView.js");
const getNewMessageForm = require("../controllers/getNewMessageForm.js");
const addNewMessage = require("../controllers/addNewMessage.js");
const getMessageDetails = require("../controllers/getMessageDetailsView.js");


const indexRouter = Router();


indexRouter.get("/", getIndexView);
indexRouter.get("/new", getNewMessageForm);
indexRouter.post("/new", addNewMessage);
indexRouter.get("/message/:id", getMessageDetails);


module.exports = indexRouter;