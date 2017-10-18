
//eslint-disable-next-line
module.exports = function createLogger(log = console.log) {

    return function logger(req, res, next) {
        const message = `${req.method} ${req.url}`;
        log(message);
        next();
    };
};
    