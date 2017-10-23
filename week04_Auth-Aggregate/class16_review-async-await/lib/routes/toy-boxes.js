const router = require('express').Router();
const ToyBox = require('../models/toy-box');
const respond = require('../respond');

module.exports = router
    .post('/', respond(async req => {
        return new ToyBox(req.body).save();
    }))

    .get('/', respond(async () => {
        return ToyBox.find();
    }));