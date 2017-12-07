const express = require('express');
const app = express();

/* middleware */
const morgan = require('morgan');
const redirectHttp = require('./redirect-http')();
const checkDb = require('./check-connection')();
const errorHandler = require('./error-handler')();
const ensureAuth = require('./auth/ensure-auth')();

app.use(morgan('dev'));

// Redirect http to https in production
if(process.env.NODE_ENV === 'production') {
    app.use(redirectHttp);
}

app.use(express.static('./public'));

/* routes */
const auth = require('./routes/auth');
const me = require('./routes/me');
const album = require('./routes/albums');

if(process.env.NODE_ENV !== 'production') {
    app.use(checkDb);
}
app.use('/api/auth', auth);
app.use('/api/me', ensureAuth, me);
app.use('/api/albums', ensureAuth, album);

// TODO: add handler for server request with path, like: /albums


app.use(errorHandler);

module.exports = app;