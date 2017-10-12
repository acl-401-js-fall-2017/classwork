
module.exports = function bodyParser(req) {
    return new Promise((resolve) => {
        let body = '';
        req.on('data', data => body += data);
        req.on('end', () => {
            resolve(JSON.parse(body));
        });
    });
};
