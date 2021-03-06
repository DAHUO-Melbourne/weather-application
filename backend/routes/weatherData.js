const router = require('express').Router();
const fetch = require('node-fetch');
let weatherData = require('../model/weatherData');
let moment = require('moment');

router.route('/').get((req, res) => {
    weatherData.find()
        .then(payslips => {
            res.json(payslips)
        })
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/favourite').post((req, res) => {
    weatherData.find({
            username: req.body.username
        })
        .then(favourites => res.json(favourites))
        .catch(err => res.status(400).json('Error ' + err));
})

router.route('/updates').post((req, res) => {
    let favour = req.body.favourites;
    let counter = 0;
    let time = new Date(); 
    favour.forEach(async function(element) {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=eeafa45a1d53ce4cf30b841805c81737&q=${element.city}`);
        const myJson = await response.json();
        element.weather = myJson.weather[0].main;
        element.tempreture = Math.ceil(myJson.main.temp - 273.15);
        element.updatedAt = moment(moment(time).valueOf()).format();
        console.log(element.updatedAt);
        counter++;
    });
    setInterval(() => {
        if (counter === favour.length) {
            Promise.all(favour).then(favour => res.json(favour))
                .catch(err => res.status(400).json('Error ' + err))
        }
    }, 1000)
})

router.route('/:id').delete((req, res) => {
    weatherData.findByIdAndDelete(req.params.id)
        .then(() => res.json('weather Data deleted'))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/add').post((req, res) => {
    const tempreture = req.body.tempreture;
    const city = req.body.city;
    const weather = req.body.weather;
    const username = req.body.username;
    const newWeatherData = new weatherData({
        username,
        tempreture,
        city,
        weather,
    })
    let element
    let time = new Date(); 

    weatherData.find()
    .then(payslips => {
        let array = []
        // eslint-disable-next-line no-unused-vars
        res.json(payslips)
        // eslint-disable-next-line array-callback-return
        payslips.map(item => {
            if(item.username===username){
                array.push(item)
            }
        })
        // eslint-disable-next-line array-callback-return
        array.map(item => {
            if(item.city===city){
                element=item
            }
        })

        if(element===undefined){
            newWeatherData.save()
                .then(() => res.json('weather data added!'))
                .catch(err => res.status(400).json('Error ' + err));
        }else{
            console.log(element)
            weatherData.findById(element._id)
            .then(weatherLog=>{
                weatherLog.tempreture = req.body.tempreture;
                weatherLog.city = req.body.city;
                weatherLog.weather = req.body.weather;
                weatherLog.username = req.body.username;
                weatherLog.updatedAt = moment(moment(time).valueOf()).format();
                weatherLog.save()
                .then(()=>res.json('weather log updated!'))
                .catch(err=>res.status(400).json('Error'+err));
            })
        }
    })
});

module.exports = router;