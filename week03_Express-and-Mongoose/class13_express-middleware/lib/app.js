const express = require('express');
const app = express();
// const morgan = require('morgan');
const logger = require('./utils/logger');

app.use(logger());

app.use(express.static('./public'));

app.use('/danger', () => {
    throw new Error('You were warned!');
});

app.use('/foo', (req, res, next) => {
    res.send('hello from app.use!');
});



module.exports = app;