const request = require('./request');
const mongoose = require('mongoose');
const assert = require('chai').assert;

describe('Post API', () => {
    
    beforeEach(() => mongoose.connection.dropDatabase());

    function saveUser(user) {
        return request.post('/api/users')
            .send(user);
    }

    let user = null;
    beforeEach(() => {
        return saveUser({ name: 'Polly Poster' })
            .then(({ body }) => user = body);
    });

    const text = 'What a lovely day';
    let post = null;
    beforeEach(() => {
        return request.post('/api/posts')
            .send({
                text,
                user: user._id
            })
            .then(({ body }) => post = body);
    });
    
    it('saves a post', () => {
        assert.equal(post.text, text);
        assert.equal(post.user, user._id);
        assert.ok(post.createdAt);
        assert.ok(post.updatedAt);
    });

    it('get posts with the users name', () => {
        return request.get('/api/posts')
            .then(({ body}) => {
                assert.equal(body.length, 1);
                const got = body[0];
                assert.equal(got.text, text);
                assert.equal(got.user.name, user.name);
            });
    });

    it('saves a comment to a post', () => {
        const text = 'It looks cloudy to me';

        return saveUser({ name: 'Cathy Commentator' })
            // alias the body property of the res object as "commentator"
            .then(({ body: commentator }) => {
                return request.post(`/api/posts/${post._id}/comments`)
                    .send({
                        user: commentator._id,
                        text: 'It looks cloudy to me'
                    });
            })
            .then(({ body: comment }) => {
                assert.equal(comment.text, text);
                assert.ok(comment._id);
            });
    });
});