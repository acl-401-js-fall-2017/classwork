const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const errorHandler = require('./error-handler');

app.use(express.static('./public'));
app.use(bodyParser.json());

const boardGames = require('./routes/board-games');
const toyBoxes = require('./routes/toy-boxes');
app.use('/api/board-games', boardGames);
app.use('/api/toy-boxes', toyBoxes);

app.use(errorHandler());

module.exports = app;