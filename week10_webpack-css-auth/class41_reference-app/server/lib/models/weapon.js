const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    damage: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Weapon', schema);
