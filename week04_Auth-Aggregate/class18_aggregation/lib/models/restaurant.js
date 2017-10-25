const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cuisineCount = require('./cuisine-count');

const schema = new Schema({

});

schema.statics.cuisineCount = cuisineCount;

module.exports = mongoose.model('Restaurant', schema);