module.exports = function notFound(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 404;
    res.statusMessage = 'Hiding';
    res.end('<h4>all the pandas are hiding, look somewhere else</h4>');
};