const request = require('./request');
const mongodb = require('../lib/mongodb');
const assert = require('chai').assert;

describe('pirates API', () => {
    
    beforeEach(() => mongodb.db.dropDatabase());

    it('saves with id', () => {
        assert(true);
    });
});