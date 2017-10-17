const Router = require('express').Router;
const router = Router();

router
    .get('/', (req, res) => {
        res.send([
            { name: 'Straw Hats Pirates' }, 
            { name: 'Foxxy Pirates'}]
        );
    })
    
    .get('/:id', (req, res) => {
        res.send({ name: 'Straw Hats Pirates' });
    })
    
    .post('/', (req, res) => {
        res.send(req.body);
    })
    
    .delete('/:id', (req, res) => {
        res.send({ removed: true });
    });

module.exports = router;