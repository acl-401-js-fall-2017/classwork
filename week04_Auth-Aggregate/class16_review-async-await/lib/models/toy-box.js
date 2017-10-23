const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    color: {
        type: String,
        required: true
    },
    boardGames: [{
        type: Schema.Types.ObjectId,
        ref: 'BoardGame'
    }]
});

module.exports = mongoose.model('ToyBox', schema);