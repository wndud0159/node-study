const express = require("express");
const path = require("path");
const app = express();

console.log(path.join(__dirname, "index.html"));

app.get("/", (req, res) => {
    console.log("안찍히네");
    return res.sendFile(path.join(__dirname, "index.html"));
    console.log("찍히나?");
});

app.listen(3000, () => {
    console.log("익스프레스 서버 실행");
});
