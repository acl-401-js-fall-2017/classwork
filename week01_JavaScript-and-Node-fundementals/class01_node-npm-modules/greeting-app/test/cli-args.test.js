const assert = require('assert');

function getArgs(args) {
    return {
        name: args[2]
    };
}

it('extracts name from argv', () => {
    const options = getArgs(['node', 'greet.js', 'meow-meow']);
    assert.deepEqual(options, { name: 'meow-meow' });
});