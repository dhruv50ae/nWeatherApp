const express = require("express");
const https = require("https");

const app = express();

app.get("/", (req, res) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?appid=f58a6a7a3b81aa9698d51ad854c43102&q=London&units=metric";
  https.get(url, (response) => {
    console.log(response);
  });
  res.send("The server is up and running");
});

app.listen(3000, () => {
  console.log("The server has started on port 3000");
});
