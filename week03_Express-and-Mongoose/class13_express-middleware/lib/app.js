const express = require('express');
const app = express();
// const morgan = require('morgan');
const logger = require('./utils/logger');

app.use(logger());

app.use((req, res, next) => {
    if(req.query.access_token === 'meow') next();
    else res.status(401).send('user not authorized');
});

app.use(express.static('./public'));

app.use('/foo', (req, res) => {
    res.send('hello from foo!');
});

app.use('/bar', (req, res) => {
    res.send('hello from bar!');
});



module.exports = app;