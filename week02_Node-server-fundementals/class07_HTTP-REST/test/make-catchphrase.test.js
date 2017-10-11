const makeCatchphrase = require('../lib/routes/make-catchphrase');
const assert = require('chai').assert;

describe('make catchphrase', () => {

    it('omits color style if not provided', () => {
        assert.equal(makeCatchphrase(), '<h1>Bamboo Pandy FTW</h1>');
    });

    it('includes color style when provided', () => {
        assert.equal(makeCatchphrase('blue'), '<h1 style="color: blue;">Bamboo Pandy FTW</h1>');
    });

});