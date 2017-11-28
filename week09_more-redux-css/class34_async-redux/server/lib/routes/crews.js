const Router = require('express').Router;
const router = Router();
const Crew = require('../models/crew');

router
    .get('/', (req, res) => {
        Crew.find()
            .lean()
            .then(crews => res.json(crews));
    })
    
    .get('/:id', (req, res) => {
        Crew.findById(req.params.id)
            .lean()
            .then(crew => {
                if(!crew) {
                    res.statusCode = 404;
                    res.send(`id ${req.params.id} does not exist`);
                }
                else res.json(crew);
            });
    })
    
    .post('/', (req, res) => {
        new Crew(req.body).save()
            .then(crew => res.json(crew))
            .catch(err => {
                res.statusCode = 400;
                res.json({
                    errors: err.errors
                });
            });
    })
    
    .delete('/:id', (req, res) => {
        Crew.findByIdAndRemove(req.params.id)
            .then(result => {
                const exists = result != null;
                res.json({ removed: exists });
            });
    });

module.exports = router;