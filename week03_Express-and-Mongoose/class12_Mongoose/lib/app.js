const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('./public'));
app.use(bodyParser.json());

const crews = require('./routes/crews');
app.use('/api/crews', crews);

module.exports = app;