const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    tasks: [{
        list: {
            type: Schema.Types.ObjectId,
            ref: 'List'
        },
        title: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            required: true,
            default: false
        }
    }]
});

module.exports = mongoose.model('List', schema);
