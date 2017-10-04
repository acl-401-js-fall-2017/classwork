const assert = require('assert');
const Store = require('../lib/store');

describe('store', () => {

    let store = null;
    beforeEach(() => {
        store = new Store();
    });

    it('adds _id to saved object', () => {
        const cat = { name: 'garfield', type: 'orange tabby' };
        const saved = store.save(cat);
        assert.ok(saved._id);
    });

    it('gets a saved object', () => {
        const cat = { name: 'garfield', type: 'orange tabby' };
        const saved = store.save(cat);
        const got = store.get(saved._id);
        assert.deepEqual(got, saved);        
    });
});