const router = require('express').Router();
let Favourite = require('../model/favourite');

router.route('/').post((req, res) => {
    Favourite.find({
            username: req.body.username
        })
        .then(favourites => res.json(favourites))
        .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;