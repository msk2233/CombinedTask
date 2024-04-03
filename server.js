var express = require("express");
var app = express();
var router = require('./router.js')
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use('/',router);
const port = 5050;

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
module.exports = app;
