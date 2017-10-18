const { assert } = require('chai');
const createLogger = require('../../lib/utils/logger');

describe('logger', () => {

    it('logs method and path, and then calls next', () => {
        // mock the request
        const req = {
            method: 'GET',
            url: '/foo'
        };
        // mock next method, we will make sure this gets called
        let called = false;
        const next = () => { called = true; };
        
        // log function that saves logged message to the message variable
        let message = '';
        const log = m => message = m;

        // create a logger middleware by called the create function
        const logger = createLogger(log);
        // simulate the middleware being called (by express)
        logger(req, null, next);

        // test that it logged what we expected
        assert.equal(message, 'GET /foo');

        // test that next was called
        assert.ok(called);
    });
});