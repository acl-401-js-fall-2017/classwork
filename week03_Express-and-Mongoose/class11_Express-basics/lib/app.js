const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const publicDir = './public';
app.use(express.static(publicDir));
app.use(bodyParser.json());

const crews = require('./routes/crews');
app.use('/api/crews', crews);


module.exports = app;