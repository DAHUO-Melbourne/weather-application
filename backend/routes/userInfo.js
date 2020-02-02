const router = require('express').Router();
let userInfo = require('../model/userInfo');

router.route('/').get((req, res) => {
    userInfo.find()
        .then(payslips => res.json(payslips))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const permission = req.body.permission;

    const neUserInfo = new userInfo({
        username,
        password,
        permission,
    })

    neUserInfo.save()
        .then(() => res.json('userInfo added!'))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/find').post((req, res) => {
    userInfo.find({
            username: req.body.username,
            password: req.body.password
        })
        .then(userinfo => res.json(userinfo))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/findusername').post((req, res) => {
    userInfo.find({
            username: req.body.username
        })
        .then(userinfo => res.json(userinfo))
        .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;