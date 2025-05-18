const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

const apiKey = '9bd21195d01b7cfe67beafbfe4323885';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', { weather: null, temp: null, icon: null, wind: null, humidity: null, pressure: null, error: null });
});

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  request(url, function (err, httpResponse, body) {
    if (err) {
      res.render('index', {
        weather: null,
        temp: null,
        icon: null,
        wind: null,
        humidity: null,
        pressure: null,
        error: 'Error, please try again'
      });
    } else {
      let weather = JSON.parse(body);
      if (weather.main === undefined) {
        res.render('index', {
          weather: null,
          temp: null,
          icon: null,
          wind: null,
          humidity: null,
          pressure: null,
          error: 'City not found, please try again'
        });
      } else {
        let weatherText = `It's ${weather.main.temp}°C with ${weather.weather[0].main} in ${weather.name}!`;
        let iconCode = weather.weather[0].icon;

        res.render('index', {
          weather: weatherText,
          temp: weather.main.temp,
          icon: iconCode,
          wind: weather.wind.speed,
          humidity: weather.main.humidity,
          pressure: weather.main.pressure,
          error: null
        });
      }
    }
  });
});

app.listen(3000, function () {
  console.log('Server is running on http://localhost:3000');
});
