const express = require("express");
const https = require("https");

const app = express();

app.get("/", (req, res) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?appid=f58a6a7a3b81aa9698d51ad854c43102&q=London&units=metric";
  https.get(url, (response) => {
    console.log(response);
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write(
        "<h1>The temperature in London is " + temp + " degrees celcius</h1>"
      );
      res.write("<p>The weather is currently " + weatherDescription + "</p>");
      res.write("<img src = " + imageURL + " />");
      res.send();
    });
  });
});

app.listen(3000, () => {
  console.log("The server has started on port 3000");
});
