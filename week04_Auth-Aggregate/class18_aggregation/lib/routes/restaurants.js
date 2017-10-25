const router = require('express').Router();
const Restaurant = require('../models/restaurant');
const starwars = require('../services/starwars');

module.exports = router
    .get('/cuisines', (req, res, next) => {
        Restaurant.cuisineCount(req.query.borough)
            .then(restaurants => res.send(restaurants))
            .catch(next);
    })
    
    .get('/people', (req, res, next) => {
        // eslint-disable-next-line
        starwars.getPeople()
            .then(people => res.json(people))
            .catch(next);
    })
    
    .get('/planets', (req, res, next) => {
        // eslint-disable-next-line
        starwars.getPlanets()
            .then(planets => res.json(planets))
            .catch(next);
    });