const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favouriteSchema = new Schema({
    cityName: { type: String, required: true },
    weather: { type: String, required: true },
    tempreture: { type: String, required: true }
}, {
    timestamps: true,
});

const Favourite = mongoose.model('Favourite', favouriteSchema);

module.exports = Favourite;