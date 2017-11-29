const express = require('express');
const app = express();
const morgan = require('morgan');
const errorHandler = require('./utils/error-handler');

app.use(morgan('dev'));
app.use(express.static('./public'));

app.get('/api/test', (req, res, next) => {
  const { wait, unexpected, validation } = req.query;
  if(wait) {
    setTimeout(() => res.json({ answer: `waited for ${wait}ms`}), wait);
  }
  else if(unexpected) {
    throw new Error(unexpected);
  }
  else if(validation) {
    next({ code: 400, error: validation });
  }
  else {
    res.json({ answer: 'vanilla response'});
  }
});

app.use(errorHandler());

module.exports = app;