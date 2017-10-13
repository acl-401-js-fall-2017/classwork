const cowsay = require('cowsay');

module.exports = function notFound(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404;
    const message = cowsay.say({
        text: `${req.method} ${req.url.path} not found`,
        e: 'oO',
        T: 'U '
    });

    res.end(`<pre>${message}</pre>`);
};