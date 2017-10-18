module.exports = function createAuth(password) {
    return (req, res, next) => {
        if(req.query.access_token !== password) {
            res.status(401).send('user not cathenticated');
        }
        else next();
    };
};