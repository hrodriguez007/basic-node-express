let express = require('express');
let app = express();
require('dotenv').config(); //part of #6 Challenge


//#1 Challenge
// console.log("Hello World");

//#2 Challenge
// app.get("/", (req, res) => {
//     res.send("Hello Express")
// })

//#4 Challenge
app.use("/public", express.static(__dirname + "/public"));

// #7 Challenge
app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

//#3 Challenge
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

// // #5 Challenge
// app.get("/json", (req, res) => {
//     // res.json({"message": "Hello json"})
// });

// #6 Challenge
app.get("/json", (req, res) => {
    console.log(process.env.MESSAGE_STYLE, " <= message style");
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json(
            {"message": "HELLO JSON"}
        )
    } else {
        res.json(
            {"message": "Hello json"}
        )
    }
});
































 module.exports = app;
