const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const crewSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dateFounded: Date,
    colors: [String],
    pirates: [{
        name: String,
        role: String,
        weapons: [String]
    }],
    homebase: {
        island: String,
        bodyOfWater: {
            type: String,
            enum: ['East Blue', 'West Blue', 'North Blue', 'South Blue'],
            required: true
        }
    },
    visited: [{
        name: {
            type: String,
            enum: ['East Blue', 'West Blue', 'North Blue', 'South Blue'],
        },
        date: Date
    }],
    gold: {
        type: Number,
        min: 0,
        required: true
    }
});

module.exports = mongoose.model('Crew', crewSchema);
