const express = require('express');
const app = express();
// const morgan = require('morgan');
const logger = require('./utils/logger');
const createAuth = require('./utils/cathentication');

app.use(logger());

app.use(createAuth('meow'));

app.use(express.static('./public'));

app.use('/foo', (req, res) => {
    res.send('hello from foo!');
});

app.use('/bar', (req, res) => {
    res.send('hello from bar!');
});



module.exports = app;