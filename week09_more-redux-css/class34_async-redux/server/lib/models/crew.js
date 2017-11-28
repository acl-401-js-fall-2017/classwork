const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const crewSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Crew', crewSchema);
