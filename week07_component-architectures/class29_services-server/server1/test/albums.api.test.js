const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const db = require('./db');
const app = require('../lib/app');

describe('albums', () => {

    before(db.drop(connection));

    const request = chai.request(app);

    let album = { name: 'cute bunnies' };

    it('/GET all', () => request
        .get('/api/albums')
        .then(res => assert.deepEqual(res.body, []))
    );

    it('/POST', () => request
        .post('/api/albums')
        .send(album)
        .then(({ body }) => {
            assert.ok(body._id);
            assert.equal(album.name, body.name);
            album = body;
        })
    );

    let image = { 
        title: 'the image',
        url: 'http:/images.com/123.png'
    };
    
    it('/POST image with album id', () => {
        image.album = album._id;
        return request
            .post('/api/images')
            .send(image)
            .then(({ body }) => image = body);
    });

    it('/GET by id', () => request
        .get(`/api/albums/${album._id}`)
        .then(({ body }) =>  {
            assert.equal(body._id, album._id);
            assert.equal(body.name, album.name);
            assert.isOk(body.images);
            assert.deepEqual(body.images, [image]);
        })
    );

    it('/GET all after post contains one item', done => {
        request
            .get('/api/albums')
            .then(({ body }) => {
                assert.deepEqual(body, [album]);
                done();
            })
            .catch(done);
    });

    const name = 'cute kittens';

    it('/PUT new album name', () => request
        .put(`/api/albums/${album._id}`)
        .send({ name })
        .then(({ body }) => assert.equal(body.name, name))
    );

    it('/DELETE album', () => request
        .delete(`/api/albums/${album._id}`)
    );

    it('/GET by id gives 404', () => request
        .get(`/api/albums/${album._id}`).then(
            () => { throw new Error('unexpected success response'); },
            res => assert.equal(res.status, 404)
        )
    );

    it('removes associated images', () => request
        .get('/api/images')
        .then(res => res.body)
        .then(images => assert.equal(images.length, 0))
    );

});