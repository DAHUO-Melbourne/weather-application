const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const userInfoRouter = require('./routes/userInfo');
const weatherDataRouter = require('./routes/weatherData');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("mongoDB database connection established successfully");
});

app.use('/userinfo', userInfoRouter);
app.use('/weatherdata', weatherDataRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})