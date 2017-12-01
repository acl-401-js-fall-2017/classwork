const router = require('express').Router();
const Book = require('../models/book');
const respond = require('../utils/respond');

const updateOptions = { 
  new: true,
  runValidators: true
};

module.exports = router
  .post('/', respond(
    req => Book(req.body).save()
  ))

  .get('/', respond(
    () => Book.find().lean()
  ))

  .put('/:id', respond(
    ({ params, body }) => Book.findByIdAndUpdate(params.id, body, updateOptions)
  ))
  
  .delete('/:id', respond(
    ({ params }) => Book.findByIdAndRemove(params.id).then(book => ({ removed: !!book }))
  ))
  
  .get('/:id/reviews', respond(
    req => Book.findById(req.params.id)
      .then(book => book.reviews)
  ))
  
  .post('/:id/reviews', respond(
    req => Book.findByIdAndUpdate(
      req.params.id, 
      { $push: { reviews: req.body } },
      updateOptions
    ).then(book => book.reviews.pop())
  ));