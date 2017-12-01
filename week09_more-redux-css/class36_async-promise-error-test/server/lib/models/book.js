const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  reviews: [{
    comment: String
  }]
});

module.exports = mongoose.model('Book', schema);