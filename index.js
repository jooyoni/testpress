const express = require("express"); //express를 설치했기 때문에 가져올 수 있다.
const fs = require("fs");
const app = express();
app.get("/", (req, res) => {
    const sourceHTML = fs.readFileSync(__dirname + "/index.html", "utf8");
    console.log(sourceHTML);
    res.send(sourceHTML);
});

app.listen(8000);
