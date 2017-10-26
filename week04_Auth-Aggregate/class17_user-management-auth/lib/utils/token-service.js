const jwt = require('jsonwebtoken');
const promisify = require('util').promisify;
const appSecret = process.env.APP_SECRET || 'changemenow';

const sign = promisify(jwt.sign);
const verify = promisify(jwt.verify);

module.exports = {
    sign(user) {
        
        const payload = {
            id: user._id,
            roles: user.roles
        };

        return sign(payload, appSecret);
    },
    verify(token) {
        return verify(token, appSecret);
    }
};