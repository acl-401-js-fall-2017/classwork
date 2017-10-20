const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('Resource API', () => {
    
    beforeEach(() => mongoose.connection.dropDatabase());

    const user = {
        name: 'Sochaul Meedia'
    };

    it('saves a user', () => {
        return request.post('/api/users')
            .send(user)
            .then(({ body }) => {
                assert.equal(body.name, user.name);
            });
    });
});