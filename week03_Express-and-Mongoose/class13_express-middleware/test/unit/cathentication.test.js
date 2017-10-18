const { assert } = require('chai');

function createAuth(password) {
    return (req, res, next) => {
        if(req.query.access_token !== password) {
            res.status(401).send('user not cathenticated');
        }
        else next();
    };
}

describe.only('cathentication', () => {

    let ensureAuth = null;
    beforeEach(() => ensureAuth = createAuth('meow'));


    it('calls next when correct token is passed', () => {
        const req = { 
            query: { access_token: 'meow' }
        };

        let called = false;
        const next = () => called = true;

        ensureAuth(req, null, next);

        assert.ok(called);
    });

    it('sends 401 when correct token not passed', () => {
        const req = { 
            query: { access_token: 'woof' }
        };
        
        const res = {
            status(code) {
                this.statusCode = code;
                return this;
            },
            send(message) {
                this.message = message;
            }
        };

        let called = false;
        const next = () => called = true;

        ensureAuth(req, res, next);

        assert.equal(res.statusCode, 401);
        assert.equal(res.message, 'user not cathenticated');
        assert.equal(called, false);
    });
});