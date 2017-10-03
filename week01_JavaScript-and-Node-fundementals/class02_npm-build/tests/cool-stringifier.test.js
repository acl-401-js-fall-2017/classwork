const assert = require('assert');
const CoolStringifier = require('../lib/cool-stringifier');

describe('cool stringifier', () => {

    const sentence = 'This is so cool';
    let stringifier = null;
    beforeEach(() => {
        stringifier = new CoolStringifier(sentence);
    });

    it('reverse each word', () => {
        stringifier.reverseWords();
        assert.equal(stringifier.sentence, 'sihT si os looc');
    });

    it('reverses word order', () => {
        stringifier.reverseWordOrder();
        assert.equal(stringifier.sentence, 'cool so is This');
    });
    
});