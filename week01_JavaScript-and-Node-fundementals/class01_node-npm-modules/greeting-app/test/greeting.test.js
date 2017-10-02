const assert = require('assert');

function greet(name) {
    return `hello ${name}`;
}

it('greets with name', () => {
    const greeting = greet('meow-meow');
    assert.equal(greeting, 'hello meow-meow');
});