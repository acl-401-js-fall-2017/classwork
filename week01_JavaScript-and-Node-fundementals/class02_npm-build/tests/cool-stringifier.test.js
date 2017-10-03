const assert = require('assert');
const CoolStringifier = require('../lib/cool-stringifier');

describe('cool stringifier', () => {

    describe('basic operations', () => {

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

        it('uppercase all things', () => {
            stringifier.shout();
            assert.equal(stringifier.sentence, 'THIS IS SO COOL');
        });

        it('chains methods', () => {
            stringifier.reverseWords().shout();
            assert.equal(stringifier.sentence, 'SIHT SI OS LOOC');        
        });
    });
    
    describe('edge cases', () => {
        it('outer test', () => {
            const stringifier = new CoolStringifier('');
            stringifier.shout();
            assert.equal(stringifier.sentence, '');            
        });
    });
});