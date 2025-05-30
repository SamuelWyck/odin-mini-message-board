const express = require("express");
const indexRouter = require("./routes/indexRouter.js");
const path = require("node:path");



const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath));


app.use("/", indexRouter);



const PORT = process.env.PORT || 3000;


app.listen(PORT, function() {console.log(`Server listening on port: ${PORT}!`)});

