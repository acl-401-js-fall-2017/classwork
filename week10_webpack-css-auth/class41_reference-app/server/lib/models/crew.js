const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    flag: String
});

module.exports = mongoose.model('Crew', schema);
