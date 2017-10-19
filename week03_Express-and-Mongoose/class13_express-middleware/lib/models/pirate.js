const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    familiar: {
        type: String,
        enum: ['parrot', 'wolf', 'lizard']
    },
    legs: {
        type: Number,
        min: 0,
        max: 2,
        required: true
    }
});

module.exports = mongoose.model('Pirate', schema);