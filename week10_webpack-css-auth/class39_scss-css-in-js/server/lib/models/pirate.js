const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const crewSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    role: String,
    crew: {
        type: Schema.Types.ObjectId,
        ref: 'Crew',
        required: true
    }
});

module.exports = mongoose.model('Pirate', crewSchema);
