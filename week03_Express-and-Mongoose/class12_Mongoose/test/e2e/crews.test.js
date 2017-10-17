const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('crews API', () => {
    
    beforeEach(() => mongoose.connection.dropDatabase());

    const strawHats = { 
        name: 'Straw Hats', 
        homebase: { bodyOfWater: 'East Blue' },
        gold: 10
    };

    it('saves with id', () => {

        return request.post('/api/crews')
            .send(strawHats)
            .then(res => {
                const crew = res.body;
                assert.ok(crew._id);
                assert.equal(crew.name, strawHats.name);
            });
    });

    it('fails on save with validation errors', () => {
        return request.post('/api/crews')
            .send({})
            .then(
                () => { throw new Error('Unexpected successful response'); },
                err => {
                    assert.equal(err.status, 400);    
                    const body = err.response.body;
                    assert.ok(Object.keys(body.errors).length);
                }
            );
    });

    it('get by id', () => {
        let crew = null;
        return request.post('/api/crews')
            .send(strawHats)
            .then(res => {
                crew = res.body;
                return request.get(`/api/crews/${crew._id}`);
            })
            .then(res => {
                assert.deepEqual(res.body, crew);
            });
    });

    it('get by id returns 404 for bad id', () => {
        return request.get('/api/crews/59dfeaeb083bf9beecc97ce8')
            .then(
                () => { throw new Error('Unexpected successful response'); },
                err => {
                    assert.equal(err.status, 404);    
                }
            );
    });

    it('delete by id', () => {
        let crew = null;
        return request.post('/api/crews')
            .send(strawHats)
            .then(res => {
                crew = res.body;
                return request.delete(`/api/crews/${crew._id}`);
            })
            .then(res => {
                assert.deepEqual(res.body, { removed: true });
                return request.get(`/api/crews/${crew._id}`);                
            })
            .then(
                () => { throw new Error('Unexpected successful response'); },
                err => {
                    assert.equal(err.status, 404);    
                }
            );
    });

    it('gets all crews', () => {
        const foxxy = {
            name: 'Foxxy Pirates',
            homebase: { bodyOfWater: 'North Blue' },
            gold: 100000
        };

        const posts = [strawHats, foxxy].map(crew => {
            return request.post('/api/crews')
                .send(crew)
                .then(res => res.body);
        });

        let saved = null;
        return Promise.all(posts)
            .then(_saved => {
                saved = _saved;
                return request.get('/api/crews');
            })
            .then(res => {
                assert.deepEqual(res.body, saved);
            });
    });
});