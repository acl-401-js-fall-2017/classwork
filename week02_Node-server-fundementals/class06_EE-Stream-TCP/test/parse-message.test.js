const assert = require('assert');
const parseMessage = require('../lib/parse-message');

describe('parse message', () => {
    it('returns empty object when message does not start with "@"', () => {
        assert.deepEqual(parseMessage('some string'), {});
    });
    
    it('returns an action object for parsed message', () => {
        assert.deepEqual(parseMessage('@cmd:arg some text'), {
            command: 'cmd',
            arg: 'arg',
            text: 'some text'
        });
    });
});