const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    images: [{
        title: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        description: String
    }]
});

module.exports = mongoose.model('Album', schema);
