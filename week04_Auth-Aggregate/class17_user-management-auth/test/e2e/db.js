const mongoose = require('mongoose');
const connect = require('../../lib/connect');
const url = 'mongodb://localhost:27017/pirates-test';
const request = require('./request');

before(() => connect(url));    
after(() => mongoose.connection.close());

// export a helper for dropping the db
//  and creating a user access token
module.exports = {
    drop() {
        return mongoose.connection.dropDatabase();
    },
    getToken(user = { email: 'me@me.com', password: 'abc' }) {
        return request
            .post('/api/auth/signup')
            .send(user)
            .then(({ body }) => body.token);
    }
};