const router = require('express').Router();
const ensureAuth = require('../utils/ensure-role');

module.exports = router
    .get('/', (req, res) => {
        res.json([
            { name: 'garfield' },
            { name: 'meow-meow' },
            { name: 'tom' }
        ]);
    })

    .get('/supercats', ensureAuth('admin'), (req, res) => {
        res.json([
            { name: 'super garfield' },
            { name: 'super meow-meow' },
            { name: 'super tom' }
        ]);
    });
