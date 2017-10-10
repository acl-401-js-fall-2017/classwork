const url = require('url');
const catchphrase = require('./routes/catchphrase');
const pandas = require('./routes/pandas');
const notFound = require('./routes/not-found');

const routes = {
    catchphrase,
    pandas
};

module.exports = (req, res) => {
    const { pathname } = url.parse(req.url);
    const parts = pathname.slice(1).split('/');
    const route = routes[parts[0]] || notFound;
    route(req, res);
};