// @ts-check

const express = require("express");

const app = express();

const PORT = 5000;

app.use("/", (req, res, next) => {
    console.log("hello");
    const requestAt = new Date();
    return next();
});

app.use((req, res) => {
    console.log("hello?");
});

app.listen(PORT, () => {
    console.log("The Express server is listening ap port:" + PORT);
});
