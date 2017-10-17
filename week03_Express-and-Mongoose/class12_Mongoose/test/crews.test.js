const request = require('./request');
const mongodb = require('../lib/mongodb');
const assert = require('chai').assert;

describe('crews API', () => {
    
    beforeEach(() => mongodb.db.dropDatabase());

    it('saves with id', () => {
        const strawHats = { name: 'Straw Hats', ship: 'Sunny' };
        return request.post('/crews')
            .send(strawHats)
            .then(res => {
                const crew = res.body;
                assert.ok(crew._id, 'Missing Id');
                assert.equal(crew.name, strawHats.name);
            });
    });

    it('get by id', () => {
        const strawHats = { name: 'Straw Hats', ship: 'Sunny' };
        let crew = null;
        return request.post('/crews')
            .send(strawHats)
            .then(res => {
                crew = res.body;
                return request.get(`/crews/${crew._id}`);
            })
            .then(res => {
                assert.deepEqual(res.body, crew);
            });
    });

    it('get by id returns 404 for bad id', () => {
        return request.get('/crews/59dfeaeb083bf9beecc97ce8')
            .then(
                () => { throw new Error('Unexpected successful response'); },
                err => {
                    assert.equal(err.status, 404);    
                }
            );
    });

    it('delete by id', () => {
        const strawHats = { name: 'Straw Hats', ship: 'Sunny' };
        let crew = null;
        return request.post('/crews')
            .send(strawHats)
            .then(res => {
                crew = res.body;
                return request.delete(`/crews/${crew._id}`);
            })
            .then(res => {
                assert.deepEqual(res.body, { removed: true });
                return request.get(`/crews/${crew._id}`);                
            })
            .then(
                () => { throw new Error('Unexpected successful response'); },
                err => {
                    assert.equal(err.status, 404);    
                }
            );
    });

    it('gets all crews', () => {
        const crews = [
            { name: 'Straw Hats', ship: 'Sunny' },
            { name: 'Foxxy Pirates', ship: 'Coolio' }
        ];

        const posts = crews.map(crew => {
            return request.post('/crews')
                .send(crew)
                .then(res => res.body);
        });

        let saved = null;
        return Promise.all(posts)
            .then(_saved => {
                saved = _saved;
                return request.get('/crews');
            })
            .then(res => {
                assert.deepEqual(res.body, saved);
            });
    });
});