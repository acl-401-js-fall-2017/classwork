const express = require('express');
const app = express();
const morgan = require('morgan');
const createAuth = require('./utils/cathentication');
const bodyParser = require('body-parser');
const errorHandler = require('./utils/error-handler');

app.use(morgan('dev'));
app.use(express.static('./public'));
app.use(bodyParser.json());

const pirates = require('./routes/pirates');
app.use('/api/pirates', pirates);

app.get('/flag', (req, res) => {
    res.send(`
        <img src="http://www.elizabethan-era.org.uk/images/calico-jack-rackhams-pirate-flag.jpg">
    `);
});

app.use((req, res, next) => {
    res.send('hey marty you got the path wrong');
});

app.use(errorHandler());

module.exports = app;