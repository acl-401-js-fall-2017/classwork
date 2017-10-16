const express = require('express');
const app = express();

app.get('/crews', (req, res) => {
    res.send(`GET /crews ${JSON.stringify(req.query)}`);
});

// crews/banana/foo/mango
app.get('/crews/:one/foo/:two', (req, res) => {
    // POJO Plain Old JavaScript Object
    res.send({
        routePath: '/crews/:one/foo/:two',
        method: 'get',
        params: req.params,
        query: req.query
    });
});

app.post('/bar', (req, res) => {
    res.end('POST /bar');
});

module.exports = app;