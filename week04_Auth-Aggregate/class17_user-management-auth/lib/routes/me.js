const router = require('express').Router();
const User = require('../models/user');

module.exports = router
    .get('/favorites', (req, res) => {
        User.findById(req.user.id)
            .then(user => res.send(user.favorites));
    });