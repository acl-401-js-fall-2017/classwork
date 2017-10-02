const assert = require('assert');
const getArgs = require('../lib/cli-args');

describe('cli args', () => {     
    it('extracts name from argv', () => {
        const options = getArgs(['node', 'greet.js', 'meow-meow']);
        assert.deepEqual(options, { name: 'meow-meow' });
    });
});