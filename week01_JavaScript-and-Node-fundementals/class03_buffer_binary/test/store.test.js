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

    it('returns null if get id not found', () => {
        const got = store.get('bad id');
        assert.strictEqual(got, null);
    });

    it('removes an object', () => {
        const cat = { name: 'garfield', type: 'orange tabby' };
        const saved = store.save(cat);
        
        // remove returns  { removed: true }
        const status = store.remove(saved._id);
        assert.equal(status.removed, true);

        const got = store.get(saved._id);
        assert.equal(got, null);
    });

    it('returns { removed: false } when object to remove not exists', () => {
        const status = store.remove('bad id');
        assert.equal(status.removed, false);
    });
});