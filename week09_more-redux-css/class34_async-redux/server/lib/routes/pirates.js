const Router = require('express').Router;
const router = Router();
const Pirate = require('../models/pirate');

router
    .get('/', (req, res) => {
        const query = {};
        if(req.query) query.crew = req.query.crew;
        
        Pirate.find(query)
            .lean()
            .then(pirates => res.json(pirates));
    })
    
    .get('/:id', (req, res) => {
        Pirate.findById(req.params.id)
            .lean()
            .then(pirate => {
                if(!pirate) {
                    res.statusCode = 404;
                    res.send(`id ${req.params.id} does not exist`);
                }
                else res.json(pirate);
            });
    })
    
    .post('/', (req, res) => {
        new Pirate(req.body).save()
            .then(pirate => res.json(pirate))
            .catch(err => {
                res.statusCode = 400;
                res.json({
                    errors: err.errors
                });
            });
    })
    
    .delete('/:id', (req, res) => {
        Pirate.findByIdAndRemove(req.params.id)
            .then(result => {
                const exists = result != null;
                res.json({ removed: exists });
            });
    });

module.exports = router;