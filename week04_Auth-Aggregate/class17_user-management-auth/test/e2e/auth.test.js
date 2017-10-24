const request = require('./request');
const assert = require('chai').assert;
const db = require('./db');

describe('Auth API', () => {
    
    beforeEach(db.drop);

    let token = null;
    beforeEach(() => {
        return request
            .post('/api/auth/signup')
            .send({
                email: 'user',
                password: 'abc'
            })
            .then(({ body }) => token = body.token);
    });

    it('signup', () => {
        assert.ok(token);
    });

    it('Can not signup with same email', () => {
        return request
            .post('/api/auth/signup')
            .send({ email: 'user', password: 'def' })
            .then(
                () => { throw new Error('Unexpected successful response'); },
                err => {
                    assert.equal(err.status, 400);
                }
            );
    });

    it('Must include password', () => {
        return request
            .post('/api/auth/signup')
            .send({ email: 'otheruser', password: '' })
            .then(
                () => { throw new Error('Unexpected successful response'); },
                err => {
                    assert.equal(err.status, 400);
                }
            );       
    });

    it('Signin with same credential', () => {
        return request
            .post('/api/auth/signin')
            .send({ email: 'user', password: 'abc' })
            .then(({ body }) => {
                assert.isOk(body.token);
            });          
    });

    it('Signin rejected with bad email', () => {
        return request
            .post('/api/auth/signin')
            .send({ email: 'bad', password: 'abc' })
            .then(
                () => { throw new Error('Unexpected successful response'); },
                err => {
                    assert.equal(err.status, 401);
                }
            );             
    });

    

});