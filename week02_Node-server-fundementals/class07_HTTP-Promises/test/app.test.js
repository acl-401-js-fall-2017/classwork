const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../lib/app');
chai.use(chaiHttp);
const assert = chai.assert;

const request = chai.request(app);

describe('panda app', () => {
    it('GET /catchphrase', done => {
        request.get('/catchphrase')
            .end((err, res) => {
                if(err) return done(err);
                assert.equal(res.text, '<h1>Bamboo Pandy FTW</h1>');
                done();
            });
    });

    it('GET /catchphrase with query color', done => {
        request.get('/catchphrase?color=steelblue')
            .end((err, res) => {
                if(err) return done(err);
                assert.equal(res.text, '<h1 style="color: steelblue;">Bamboo Pandy FTW</h1>');
                done();
            });
    });

    it('GET /pandas', done => {
        request.get('/pandas')
            .end((err, res) => {
                if(err) return done(err);
                assert.deepEqual(res.body, [
                    'Jake the Super Panda', 
                    'Sally Sumo Panda',
                    'Tiny'
                ]);
                done();
            });
    });

    it('Returns 404 when not found', done => {
        request.get('/bad')
            .end((err, res) => {
                if(!err) return done('expected error from http response');
                assert.equal(err.status, 404);
                assert.equal(res.text, '<h4>all the pandas are hiding, look somewhere else</h4>');
                done();
            });
    });
});