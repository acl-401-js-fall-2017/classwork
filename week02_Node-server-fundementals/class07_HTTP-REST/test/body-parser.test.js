const assert = require('assert');
const EventEmitter = require('events');
const bodyParser = require('../lib/body-parser');
describe('body parser', () => {
    it('parses the body', () => {
        const req = new EventEmitter();

        const promise = bodyParser(req)
            .then(body => {
                assert.deepEqual(body, { name: 'banana' });
            });

        req.emit('data', '{ "name": "banana" }');
        req.emit('end');

        return promise;

    });
});