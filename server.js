const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

const apiKey = '9bd21195d01b7cfe67beafbfe4323885';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function (req,res){
    res.render('index',{weather: null, error: null});
})

app.post('/',function (req,res){
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    console.log(req.body.city);
    request(url,function(err,httpResponse,body){
        if(err){
            res.render('index',{weather: null, error: 'Error, please try again'});
        }else{
            let weather = JSON.parse(body);
            if(weather.main == undefined){
                res.render('index',{weather: null, error: 'Error, please try again'});
            }else{
                let weatherText = `It's ${weather.main.temp} degrees with ${weather.weather[0].main} in ${weather.name}!`;
                res.render('index',{weather: weatherText, 
                    temp: weather.main.temp,
                    error: null});
                console.log("body", body);
                
            }
        }
    });
})

app.listen(3000, function(){
    console.log('Server is running on http://localhost:3000');
});