const assert = require('chai').assert;
const User = require('../../lib/models/user');

describe('user model', () => {

    const user = new User({
        email: 'me@me.com'
    });
    const password = 'abc';
    
    it('generates hash from password', () => {
        user.generateHash(password);
        assert.ok(user.hash);
        assert.notEqual(user.hash, password);
    });

    // it('compares password', () => {
    //     assert.isOk(user.comparePassword('abc'));
    //     assert.isNotOk(user.comparePassword('bad password'));
    // });
    
});