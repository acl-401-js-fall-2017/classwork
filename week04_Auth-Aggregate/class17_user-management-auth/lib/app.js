const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./utils/error-handler');

app.use(morgan('dev'));
app.use(express.static('./public'));
app.use(bodyParser.json());

const auth = require('./routes/auth');
app.use('/api/auth', auth);

app.use(errorHandler());

module.exports = app;