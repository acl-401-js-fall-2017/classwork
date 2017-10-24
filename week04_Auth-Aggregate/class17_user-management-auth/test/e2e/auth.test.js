const request = require('./request');
const assert = require('chai').assert;
const db = require('./db');

describe.skip('Resource API', () => {
    
    beforeEach(db.drop);

    it('signup', async () => {
        const { body } = await request
            .post('/api/auth/signup')
            .send({
                email: 'user',
                password: 'abc'
            });

        assert.ok(body.token);
    });

});