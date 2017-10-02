const assert = require('assert');
const greet = require('../lib/greet');

it('greets with name', () => {
    const greeting = greet('meow-meow');
    assert.equal(greeting, 'hello meow-meow');
});