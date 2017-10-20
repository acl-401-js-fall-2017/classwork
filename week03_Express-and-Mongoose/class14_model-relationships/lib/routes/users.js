const router = require('express').Router();
const User = require('../models/user');
const Post = require('../models/post');

module.exports = router
    .post('/', (req, res, next) => {
        new User(req.body).save()
            .then(user => res.json(user))
            .catch(next);
    })
    
    .get('/:id', (req, res, next) => {
        const userId = req.params.id;
        
        Promise.all([
            User.findById(userId).lean(),
            Post.find({ user: userId }).lean()
        ])
            .then(([user, posts]) => {
                user.posts = posts;
                res.json(user);
            })
            .catch(next);
        
    })
    
    .delete('/:id', (req, res, next) => {
        const userId = req.params.id;        
        Post.find({ user: userId })
            .count()
            .then(count => {
                if(count > 0) throw ({ code: 400, error: 'must delete posts first'});

                return User.findByIdAndRemove(userId);
            })
            .then(() => {
                res.json({ removed: true });
            })
            .catch(next);
    });