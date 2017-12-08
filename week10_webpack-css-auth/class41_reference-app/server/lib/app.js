const express = require('express');
const app = express();
const morgan = require('morgan');
const errorHandler = require('./util/error-handler');

app.use(morgan('dev'));
app.use(express.static('./public'));
app.use(express.json());

const crews = require('./routes/crews');
const pirates = require('./routes/pirates');
const weapons = require('./routes/weapons');

app.use('/api/crews', crews);
app.use('/api/pirates', pirates);
app.use('/api/weapons', weapons);

app.use(errorHandler());

module.exports = app;