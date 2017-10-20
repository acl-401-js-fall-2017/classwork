const router = require('express').Router();
const Post = require('../models/post');

module.exports = router
    .post('/', (req, res, next) => {
        new Post(req.body).save()
            .then(post => res.json(post))
            .catch(next);
    })

    .get('/', (req, res, next) => {
        Post.find()
            // limit the paths (fields) that we want to include
            .select('text user createdAt')
            // this adds the selected fields from the associated model (document collection)
            .populate({
                path: 'user',
                select: 'name'
            })
            // this keeps Mongoose from creating an Document Object "wrapper" around the data
            .lean()
            .then(posts => res.json(posts))
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        Post.findById(req.params.id)
            .populate('user')
            .populate('comments.user', 'name')
            .lean()
            .then(post => res.json(post))
            .catch(next);
    })
    
    .post('/:id/comments', (req, res, next) => {
        // update the post document for this id
        Post.findByIdAndUpdate(req.params.id, {
            // "push" this comment into post.comments array
            $push: { comments: req.body }
        }, { 
            // we want the "new" (updated) version of the document
            'new': true, 
            // run data validation on update
            runValidators: true 
        })
            // return the last comment
            .then(post => res.json(post.comments[post.comments.length-1]))
            .catch(next);
    });