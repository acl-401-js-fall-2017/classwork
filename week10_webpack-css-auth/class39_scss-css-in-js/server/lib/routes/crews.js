const Router = require('express').Router;
const router = Router();
const Crew = require('../models/crew');

router
    .get('/', (req, res, next) => {
        Crew.find()
            .lean()
            .then(crews => res.json(crews))
            .catch(next);
    })
    
    .get('/:id', (req, res, next) => {
        Crew.findById(req.params.id)
            .lean()
            .then(crew => {
                if(!crew) {
                    throw { code: 404, error: `id ${req.params.id} does not exist` };
                }
                else res.json(crew);
            })
            .catch(next);
    })
    
    .post('/', (req, res, next) => {
        new Crew(req.body).save()
            .then(crew => res.json(crew))
            .catch(next);
    })
    
    .delete('/:id', (req, res, next) => {
        Crew.findByIdAndRemove(req.params.id)
            .then(result => {
                const exists = result != null;
                res.json({ removed: exists });
            })
            .catch(next);
    });

module.exports = router;