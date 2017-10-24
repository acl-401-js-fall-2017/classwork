const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./utils/error-handler');
const ensureAuth = require('./utils/ensure-auth')();

app.use(morgan('dev'));
app.use(express.static('./public'));
app.use(bodyParser.json());

const auth = require('./routes/auth');
const cats = require('./routes/cats');

app.use('/api/auth', auth);
app.use('/api/cats', ensureAuth, cats);

app.use(errorHandler());

module.exports = app;