require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https"); // native node module 
const openWeatherMapEP = "https://api.openweathermap.org/data/2.5/weather?q=";
const urlParams = "&units=imperial&appid=";
const appID = process.env.ID;

const app = express();

app.use(express.urlencoded({extended : true}));




app.get("/", (req, res) => {
    const city = "lagos";
    const dUrl = openWeatherMapEP + city + urlParams + appID;

    https.get(dUrl, (response) => {
        console.log(res.statusCode); // checks if the API call is good

        response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            res.send(weatherData);
        });
    });
});

app.post("/", (req, res) => {

    var finalCityName = (req.body.cityName == "") ? req.body.cityNameBtn : req.body.cityName;
    const pUrl = openWeatherMapEP + finalCityName + urlParams + appID;

    https.get(pUrl, (response) => {
        console.log(res.statusCode);

        response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            res.send(data);
        });
    });
});

let port = process.env.PORT;
if(port == null || port == ""){
  port = 3001;
}

app.listen(port, () => {
  console.log("Server started on port 3001");
});

