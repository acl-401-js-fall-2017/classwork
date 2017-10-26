const request = require('./request');
const assert = require('chai').assert;
const db = require('./db');
const tokenService = require('../../lib/utils/token-service');

describe('Cats API', () => {
    
    beforeEach(db.drop);

    let token = '';
    beforeEach(() => {
        return request
            .post('/api/auth/signup')
            .send({ email: 'me@me.com', password: 'abc' })
            .then(({ body }) => token = body.token);
    });

    let superToken = '';
    beforeEach(() => {
        return tokenService
            .sign({ roles: ['admin'] })
            .then(token => superToken = token);
    });

    it('gets cats', () => {
        return request.get('/api/cats')
            .set('Authorization', token)
            .then(({ body }) => {
                assert.isOk(body.length > 1);
            });
    });

    it('gets super cats', () => {
        return request.get('/api/cats/supercats')
            .set('Authorization', superToken)
            .then(({ body }) => {
                assert.isOk(body.length > 1);
            });
    });
});