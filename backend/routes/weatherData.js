const router = require('express').Router();
let weatherData = require('../model/weatherData');

router.route('/').get((req, res) => {
    weatherData.find()
        .then(payslips => res.json(payslips))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/favourite').post((req, res) => {
    weatherData.find({
            username: req.body.username
        })
        .then(favourites => res.json(favourites))
        .catch(err => res.status(400).json('Error ' + err));
})

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

    newWeatherData.save()
        .then(() => res.json('weather data added!'))
        .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;