const router = require('express').Router();

module.exports = router
    .get('/', (req, res) => {
        res.json([
            { name: 'garfield' },
            { name: 'meow-meow' },
            { name: 'tom' }
        ]);
    });
