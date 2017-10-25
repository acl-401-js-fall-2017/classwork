const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./utils/error-handler');

app.use(morgan('dev'));
app.use(express.static('./public'));
app.use(bodyParser.json());

// add routes
const restaurants = require('./routes/restaurants');
app.use('/api/restaurants', restaurants);

app.use(errorHandler());

module.exports = app;