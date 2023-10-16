let express = require('express');
let app = express();


//#1 Challenge
console.log("Hello World");

//#2 Challenge
app.get("/", (req, res) => {
    res.send("Hello Express")
})

//#3 Challenge
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})


































 module.exports = app;
