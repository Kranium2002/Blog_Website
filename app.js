const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const homec = "Home content test";
const aboutc = "about content test";
const contactc = "contact content test";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));










app.listen(3000, function() {
    console.log("Listening on port 3000");
});