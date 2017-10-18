const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('./public'));
app.use(bodyParser.json());

const resource = require('./routes/resource');
app.use('/api/resource', resource);

module.exports = app;