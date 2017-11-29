const express = require('express');
const app = express();
const morgan = require('morgan');
const errorHandler = require('./utils/error-handler');

app.use(morgan('dev'));
app.use(express.static('./public'));

app.get('/test', (req, res, next) => {
  const { wait, unexpected, validation } = req.query;
  if(wait) {
    setTimeout(() => res.json({ response: `waited for ${wait}ms`}));
  }
  else if(unexpected) {
    throw new Error(unexpected);
  }
  else if(validation) {
    next({ code: 400, error: validation });
  }
  else {
    res.json({ response: 'vanilla response'});
  }
});

app.use(errorHandler());

module.exports = app;