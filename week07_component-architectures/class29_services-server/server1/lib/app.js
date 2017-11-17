const express = require('express');
const app = express();
const path = require('path');

/* middleware */
const morgan = require('morgan');
const redirectHttp = require('./redirect-http')();
const cors = require('cors')();
const checkDb = require('./check-connection')();
const errorHandler = require('./error-handler')();

app.use(morgan('dev'));
app.use(cors);
// Redirect http to https in production
if(process.env.NODE_ENV === 'production') {
    app.use(redirectHttp);
}
app.use(express.static('./public'));
app.use(express.json());

/* routes */
const lists = require('./routes/lists');
app.use(checkDb);
app.use('/api/lists', lists);

// if no match, treat as a client side path and send back index.html
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use(errorHandler);

module.exports = app;