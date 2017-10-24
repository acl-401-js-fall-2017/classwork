const request = require('./request');
const assert = require('chai').assert;
const db = require('./db');

describe('Cats API', () => {
    
    beforeEach(db.drop);

    let token = '';
    beforeEach(() => {
        return request
            .post('/api/auth/signup')
            .send({ email: 'me@me.com', password: 'abc' })
            .then(({ body }) => token = body.token);
    });

    it('gets cats', () => {
        return request.get('/api/cats')
            .set('Authorization', token)
            .then(({ body }) => {
                assert.isOk(body.length > 1);
            });
    });
});