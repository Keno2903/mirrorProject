const express = require("express");
const app = express();
fs = require("fs");

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  

app.get("/", (req, res) => {
    fs.truncate("C:/Users/Schüler/Desktop/config.txt", 0, function () {
        fs.writeFile(
          "C:/Users/Schüler/Desktop/config.txt",
          "Felix hat einen kleinen!",
          function (err) {
            if (err) {
              return console.log("Error writing file: " + err);
            }
          }
        );
      });
  res.send("Hello World2!");
});
  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));