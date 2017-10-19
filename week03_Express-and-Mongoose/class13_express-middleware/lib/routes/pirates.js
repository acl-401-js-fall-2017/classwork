const router = require('express').Router();
const Pirate = require('../models/pirate');

module.exports = router
    .post('/', (req, res, next) => {
        new Pirate(req.body).save()
            .then(pirate => res.json(pirate))
            .catch(next);
        // above is shorter version as:
        // .catch(err => next(err))
        
    })

    .get('/:id', (req, res, next) => {
        Pirate.findById(req.params.id)
            .then(pirate => {
                if(!pirate) {
                    next({ code: 404, error: `id ${req.params.id} not found`});
                }
                else res.json(pirate);
            })
            .catch(next);
    })

    .get('/', (req, res, next) => {

    });