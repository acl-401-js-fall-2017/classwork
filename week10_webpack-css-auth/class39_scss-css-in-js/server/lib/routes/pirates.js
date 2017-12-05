const Router = require('express').Router;
const router = Router();
const Pirate = require('../models/pirate');

router
    .get('/', (req, res, next) => {
        const query = {};
        if(req.query) query.crew = req.query.crew;
        
        Pirate.find(query)
            .lean()
            .then(pirates => res.json(pirates))
            .catch(next);
    })
    
    .get('/:id', (req, res, next) => {
        Pirate.findById(req.params.id)
            .lean()
            .then(pirate => {
                if(!pirate) {
                    throw { code: 404, error: `id ${req.params.id} does not exist` };
                }
                else res.json(pirate);
            })
            .catch(next);
    })
    
    .post('/', (req, res, next) => {
        new Pirate(req.body).save()
            .then(pirate => res.json(pirate))
            .catch(next);
    })
    
    .delete('/:id', (req, res, next) => {
        Pirate.findByIdAndRemove(req.params.id)
            .then(result => {
                const exists = result != null;
                res.json({ removed: exists });
            })
            .catch(next);
    });

module.exports = router;