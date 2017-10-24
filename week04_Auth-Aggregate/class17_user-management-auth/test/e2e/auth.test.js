const request = require('./request');
const assert = require('chai').assert;
const db = require('./db');

describe('Auth API', () => {
    
    beforeEach(db.drop);

    let token = null;
    beforeEach(async () => {
        const { body }  = await request
            .post('/api/auth/signup')
            .send({
                email: 'user',
                password: 'abc'
            });
        
        token = body.token;
    });

    it('signup', () => {
        assert.ok(token);
    });

    it('Can not signup with same email', async () => {
        try {
            await request
                .post('/api/auth/signup')
                .send({ email: 'user', password: 'def' });
            
            throw new Error('Unexpected successful response');
        }
        catch(err) {
            assert.equal(err.status, 400);
        }
    });

    it('Must include password', async () => {
        try {
            await request
                .post('/api/auth/signup')
                .send({ email: 'otheruser', password: '' });

            throw new Error('Unexpected successful response');                
        }
        catch(err) {
            assert.equal(err.status, 400);
        }    
    });

    it('Signin with same credential', async () => {
        const { body } = await request
            .post('/api/auth/signin')
            .send({ email: 'user', password: 'abc' });

        assert.isOk(body.token);
    });

    it('Signin rejected with bad email', async () => {
        try {
            await request
                .post('/api/auth/signin')
                .send({ email: 'bad', password: 'abc' })

            throw new Error('Unexpected successful response');                
        }
        catch(err) {
            assert.equal(err.status, 401);
        }              
    });
});