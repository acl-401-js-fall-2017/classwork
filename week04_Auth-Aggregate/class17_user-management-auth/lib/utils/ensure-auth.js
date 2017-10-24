const tokenService = require('./token-service');

module.exports = function () {
    return (req, res, next) => {
        const token = req.get('Authorization');
        tokenService.verify(token)
            .then(payload => {
                req.user = payload;
                next();
            })
            .catch(() => {
                next({ code: 401, error: 'Not Authorized' });
            });
    };
};