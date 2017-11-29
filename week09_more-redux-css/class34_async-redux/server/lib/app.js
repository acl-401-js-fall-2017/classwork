const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const errorHandler = require('./error-handler');

app.use(express.static('./public'));
app.use(bodyParser.json());

const crews = require('./routes/crews');
const pirates = require('./routes/pirates');

app.use('/api/crews', crews);
app.use('/api/pirates', pirates);

app.use(errorHandler());

module.exports = app;