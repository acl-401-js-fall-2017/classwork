const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    role: String,
    crew: {
        type: Schema.Types.ObjectId,
        ref: 'Crew'
    },
    weapons: [{
        type: Schema.Types.ObjectId,
        ref: 'Weapon'
    }]
});

module.exports = mongoose.model('Pirate', schema);
