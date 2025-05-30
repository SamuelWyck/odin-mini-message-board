const {Router} = require("express");
const getIndexView = require("../controllers/getIndexView.js");


const indexRouter = Router();


indexRouter.get("/", getIndexView);


module.exports = indexRouter;