const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weatherDataSchema = new Schema({
    tempreture: { type: String, required: true },
    city: { type: String, required: true },
    weather: { type: String, required: true },
    username: { type: String, required: true },
}, {
    timestamps: true,
})

const UserInfo = mongoose.model('weatherData', weatherDataSchema);
module.exports = UserInfo;