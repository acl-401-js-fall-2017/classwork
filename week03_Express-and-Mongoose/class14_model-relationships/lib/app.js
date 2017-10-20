const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('./public'));
app.use(bodyParser.json());

const users = require('./routes/users');
const posts = require('./routes/posts');

app.use('/api/users', users);
app.use('/api/posts', posts);

module.exports = app;