const assert = require('assert');
const Store = require('../lib/store');

describe('store', () => {

    describe('CRUD', () => {

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

    describe('get all', () => {
        
        let store = null;
        before(() => {
            store = new Store();
        });

        it('returns empty array on new store', () => {
            assert.deepEqual(store.getAll(), []);
        });

        it('returns list of saved items', () => {
            const cat1 = store.save({ name: 'garfield' });
            const cat2 = store.save({ name: 'felix' });
            const cats = store.getAll();
            assert.deepEqual(cats, [cat1, cat2]);
        });

        it('does not return actual store array', () => {
            // getAll returns an array of all the items in the store
            const cats = store.getAll();

            // however, the caller of getAll should **not**
            // be able to modify the array and effect what is
            // in the store
            cats.push({ name: 'should be in store' });

            // so array should not have changed length
            // on subsequent get
            assert.equal(store.getAll().length, 2);
        });
    });


});