module.exports = function respond(handler) {
    return async (req, res, next) => {
        try {
            const result = await handler(req);
            res.json(result);
        }
        catch(err) {
            next(err);
        }
    };
};